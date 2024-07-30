import { useState } from 'react';

import './styles.css';

import TitleBar from '../TitleBar';
import Toolbar from '../Toolbar';
import TreeView from '../TreeView';
import MessageList from '../MessageList';
import MessageDetails from '../MessageDetails';

import Gridview from '../GridLayout';
import { SolaceQueueContextProvider } from '../../hooks/solace';


export default function RootLayout() {
  // const DefaultComponent = ({title}) => (
  //   <div style={{ padding: '20px', color: 'white' }}>
  //     {title}
  //   </div>
  // );

  return (
    <div className="rootLayout">
      <header><TitleBar /></header>
      <menu><Toolbar /></menu>
      <SolaceQueueContextProvider>
        <main>
          <Gridview
            leftComponent={TreeView}
            topComponent={MessageList}
            bottomComponent={MessageDetails}
          />
        </main>
      </SolaceQueueContextProvider>
    </div>
  );
}

