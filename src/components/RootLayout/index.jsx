import React from 'react';

import { Splitter, SplitterPanel } from 'primereact/splitter';

function LeftPanel({ children }) {
  return children;
}
function TopPanel({ children }) {
  return children;
}
function BottomPanel({ children }) {
  return children;
}

function RootLayout({ children }) {
  const nodes = React.Children.toArray(children);
  
  const leftPanel = nodes.find(node => node.type === LeftPanel);
  const topPanel = nodes.find(node => node.type === TopPanel);
  const bottomPanel = nodes.find(node => node.type === BottomPanel);
    
  return (
    <Splitter style={{ height: '100%' }}>
      <SplitterPanel size={25}>{leftPanel}</SplitterPanel>
      <SplitterPanel size={75}>
        <Splitter style={{ height: '100%', width: '100%' }} layout="vertical">
          <SplitterPanel size={70}>{topPanel}</SplitterPanel>
          <SplitterPanel size={30}>{bottomPanel}</SplitterPanel>
        </Splitter>
      </SplitterPanel>
    </Splitter>
  );
}

Object.assign(RootLayout, { LeftPanel, TopPanel, BottomPanel });

export default RootLayout;