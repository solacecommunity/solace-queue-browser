import { Splitter, SplitterPanel } from 'primereact/splitter';

import TreeView from '../TreeView';
import MessageList from '../MessageList';
import MessageDetails from '../MessageDetails';

import { SolaceQueueContextProvider } from '../../hooks/solace';



export default function RootLayout() {
  return (
    <SolaceQueueContextProvider>
      <Splitter style={{ height: '100%' }}>
        <SplitterPanel size={25}><TreeView /></SplitterPanel>
        <SplitterPanel size={75}>
          <Splitter style={{ height: '100%', width: '100%' }} layout="vertical">
            <SplitterPanel size={70}><MessageList /></SplitterPanel>
            <SplitterPanel size={30}><MessageDetails /></SplitterPanel>
          </Splitter>
        </SplitterPanel>
      </Splitter>
    </SolaceQueueContextProvider>
  );
}

