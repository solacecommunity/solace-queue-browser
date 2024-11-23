import React from 'react';

import { Splitter, SplitterPanel } from 'primereact/splitter';
import { Panel } from 'primereact/panel';
import classes from './styles.module.css';


function BasePanel({ children }) {
  return children;
  // return <Panel 
  //   header="panel"
  //   pt={{ 
  //     root: { className: classes.panelRoot },
  //     header: { className: classes.panelHeader },
  //     toggleableContent: { className: classes.panelOuterContent }, 
  //     content: { className: classes.panelInnerContent }}}
  //   >
  //     {children}
  //   </Panel>
}

const LeftPanel = (...args) => BasePanel(...args);
const CenterPanel = (...args) => BasePanel(...args);
const RightTopPanel= (...args) => BasePanel(...args);
const RightBottomPanel = (...args) => BasePanel(...args);

function RootLayout({ children }) {
  const nodes = React.Children.toArray(children);

  const leftPanel = nodes.find(node => node.type === LeftPanel);
  const centerPanel = nodes.find(node => node.type === CenterPanel);
  const rightTopPanel = nodes.find(node => node.type === RightTopPanel);
  const rightBottomPanel = nodes.find(node => node.type === RightBottomPanel);
    
  return (
    <Splitter className="h-full">
      <SplitterPanel size={25}>{leftPanel}</SplitterPanel>
      <SplitterPanel size={50}>{centerPanel}</SplitterPanel>
      <SplitterPanel size={25}>
        <Splitter style={{ height: '100%', width: '100%' }} layout="vertical">
          <SplitterPanel size={70}>{rightTopPanel}</SplitterPanel>
          <SplitterPanel size={30}>{rightBottomPanel}</SplitterPanel>
        </Splitter>
      </SplitterPanel>
    </Splitter>
  );
}

Object.assign(RootLayout, { LeftPanel, CenterPanel, RightTopPanel, RightBottomPanel });

export default RootLayout;