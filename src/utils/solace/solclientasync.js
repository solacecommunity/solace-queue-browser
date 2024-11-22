import solace from 'solclientjs';

const { SolclientFactory } = solace;

const factoryProps = new solace.SolclientFactoryProperties();
factoryProps.profile = solace.SolclientFactoryProfiles.version10_5;
solace.SolclientFactory.init(factoryProps);
solace.SolclientFactory.setLogLevel(solace.LogLevel.INFO);

(() => {
  function createOperationError(type, errorStr) {
    return new solace.OperationError(`Invalid ${type}: ${errorStr}`, ErrorSubcode.INVALID_TOPIC_SYNTAX);
  }

  const { DestinationUtil } = solace._internal.Destination;
  const {
    encode,
    legacyValidate,
  } = DestinationUtil;

  function validateAndEncode(type, name, exceptionCreator = createOperationError.bind(null, type)) {
    const { bytes, offset } = encode(type, name);
    const { error: constError, isWildcarded } = legacyValidate(type, bytes, name, exceptionCreator);
    let error = constError;
    let subscriptionInfo = {};
    subscriptionInfo.isWildcarded = isWildcarded;
  
    return { bytes, offset, error, isWildcarded, subscriptionInfo };
  }

  Object.assign(DestinationUtil, { validateAndEncode });
})();

function createAsyncSession(sessionProperties) {
  const session = SolclientFactory.createSession(sessionProperties);

  const {
    connect,
    provisionEndpoint,
    createMessageConsumer,
    createQueueBrowser
  } = session;

  function connectAsync() {
    return new Promise((onUpNotice, onConnectFailed) => {
      session.once(solace.SessionEventCode.UP_NOTICE, onUpNotice);
      session.once(solace.SessionEventCode.CONNECT_FAILED_ERROR, onConnectFailed);
      connect.call(session);
    });
  }

  function provisionEndpointAsync(...args) {
    return new Promise((onProvisionOk) => {
      session.once(solace.SessionEventCode.PROVISION_OK, onProvisionOk);
      provisionEndpoint.call(session, ...args);
    });
  }

  function createAsyncMessageConsumer(...args) {
    const messageConsumer = createMessageConsumer.call(session, ...args);

    const {
      addSubscription
    } = messageConsumer;

    function addSubscriptionAsync(...args) {
      return new Promise((resolve, reject) => {
        const [_, correlationKey, __] = args;
        const { SUBSCRIPTION_OK, SUBSCRIPTION_ERROR } = solace.MessageConsumerEventName;
        
        let onOk, onError;
        const createHandler = execute => evt => {
          if(evt.correlationKey !== correlationKey) {
            return;
          }
          messageConsumer.removeListener(SUBSCRIPTION_OK, onOk);
          messageConsumer.removeListener(SUBSCRIPTION_ERROR, onError);
          execute(evt);
        };
        
        onOk = createHandler(resolve);
        onError = createHandler(reject);
        
        messageConsumer.on(SUBSCRIPTION_OK, onOk);
        messageConsumer.on(SUBSCRIPTION_ERROR, onError);

        addSubscription.call(messageConsumer, ...args);
      });
    }

    return Object.assign(messageConsumer, {
      addSubscription: addSubscriptionAsync
    });
  }

  function createAyncQueueBrowser(...args) {
    const queueBrowser = createQueueBrowser.call(session, ...args);

    const { connect } = queueBrowser;

    function connectAsync() {
      return new Promise(onBrowserUp => {
        queueBrowser.once(solace.QueueBrowserEventName.UP, onBrowserUp);
        connect.call(queueBrowser);
      });
    }

    function readMessagesAsync(count, timeout) {
      return new Promise((resolve) => {
        const messages = [];
        const onMessageTimeout = () => { 
          console.warn('Timeout waiting for messages');
          resolve(messages);
        };

        let messageTimeout = setTimeout(onMessageTimeout, timeout);

        queueBrowser.on(solace.QueueBrowserEventName.MESSAGE, msg => {
          messages.push(msg);
          clearTimeout(messageTimeout);
          if (messages.length >= count) {
            queueBrowser.stop();
            resolve(messages);
            return;
          }
          messageTimeout = setTimeout(onMessageTimeout, timeout);
        });

        queueBrowser.start();
      });
    }

    // Change default status of browser
    queueBrowser.stop();

    return Object.assign(queueBrowser, {
      connect: connectAsync,
      readMessages: readMessagesAsync
    });
  }

  return Object.assign(session, {
    connect: connectAsync,
    provisionEndpoint: provisionEndpointAsync,
    createMessageConsumer: createAsyncMessageConsumer,
    createQueueBrowser: createAyncQueueBrowser
  });
}

Object.assign(SolclientFactory, {
  createAsyncSession
});

export default solace;