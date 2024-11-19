import { useState } from 'react';

import { useSolaceConfigContext } from './providers/SolaceConfigProvider';

import DesktopContainer from './components/DesktopContainer';
import RootLayout from './components/RootLayout';
import TreeView from './components/BrokerQueueTreeView';
import MessageList from './components/MessageList';
import MessageDetails from './components/MessageDetails';

import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import './App.css';

export default function App() {
  const [selectedQueue, setSelectedQueue] = useState({});
  const [selectedMessage, setSelectedMessage] = useState({});

  const { brokers, brokerEditor } = useSolaceConfigContext();

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
          <RootLayout.TopPanel>
            <MessageList 
              queueDefinition={selectedQueue} 
              selectedMessage={selectedMessage} 
              onMessageSelect={handleMessageSelect} 
            />
          </RootLayout.TopPanel>
          <RootLayout.BottomPanel>
            <MessageDetails message={selectedMessage} />
          </RootLayout.BottomPanel>
        </RootLayout>
      </>
  );
}