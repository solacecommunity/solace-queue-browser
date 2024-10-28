import { useState } from 'react';

import Providers from './providers';

import DesktopContainer from './components/DesktopContainer';
import RootLayout from './components/RootLayout';
import TreeView from './components/BrokerQueueTreeView';
import MessageList from './components/MessageList';
import MessageDetails from './components/MessageDetails';

import 'primeicons/primeicons.css';
import './App.css';

export default function App() {
  const [selectedQueue, setSelectedQueue] = useState({});
  const [selectedMessage, setSelectedMessage] = useState({});

  const handleQueueSelected = (queue) => {
    setSelectedQueue(queue);
    setSelectedMessage({});
  };

  const handleMessageSelect = (message) => {
    setSelectedMessage(message);
  };

  return (
    <Providers>
      {
        window.location.pathname === '/desktop' ?
          <DesktopContainer /> :
          <>
            <RootLayout>
              <RootLayout.LeftPanel>
                <TreeView onQueueSelected={handleQueueSelected} />
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
      }
    </Providers>
  );
}