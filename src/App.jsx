import { useState } from 'react';

import { useBrokerConfig } from './providers/BrokerConfigProvider';

import DesktopContainer from './components/DesktopContainer';
import RootLayout from './components/RootLayout';
import TreeView from './components/BrokerQueueTreeView';
import MessageList from './components/MessageList';
import MessagePayloadView from './components/MessagePayloadView';
import MessageHeaderView from './components/MessageHeaderView';


import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import './App.css';

export default function App() {
  const [selectedQueue, setSelectedQueue] = useState({});
  const [selectedMessage, setSelectedMessage] = useState({});

  const { brokers, brokerEditor } = useBrokerConfig();

  const handleQueueSelected = (queue) => {
    setSelectedQueue(queue);
    setSelectedMessage({});
  };

  const handleMessageSelect = (message) => {
    setSelectedMessage(message);
  };

  return (
    window.location.pathname === '/desktop' ?
      <DesktopContainer /> :
      <>
        <RootLayout>
          <RootLayout.LeftPanel>
            <TreeView brokers={brokers} brokerEditor={brokerEditor} onQueueSelected={handleQueueSelected} />
          </RootLayout.LeftPanel>
          <RootLayout.CenterPanel>
            <MessageList 
              queueDefinition={selectedQueue} 
              selectedMessage={selectedMessage} 
              onMessageSelect={handleMessageSelect} 
            />
          </RootLayout.CenterPanel>
          <RootLayout.RightTopPanel header="Payload">
            <MessagePayloadView message={selectedMessage} />
          </RootLayout.RightTopPanel>
          <RootLayout.RightBottomPanel header="Headers">
            <MessageHeaderView message={selectedMessage} />
          </RootLayout.RightBottomPanel>
        </RootLayout>
      </>
  );
}