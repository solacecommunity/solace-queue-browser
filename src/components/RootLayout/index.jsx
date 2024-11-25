import React from 'react';

import { Splitter, SplitterPanel } from 'primereact/splitter';
import { Panel } from 'primereact/panel';
import classes from './styles.module.css';

function BasePanel({ header, children }) {
  return <Panel 
    header={header}
    pt={{ 
      root: { className: classes.panelRoot },
      header: { className: classes.panelHeader },
      toggleableContent: { className: classes.panelOuterContent }, 
      content: { className: classes.panelInnerContent }}}
    >
      {children}
    </Panel>
}

const LeftPanel = (props) => props.children;
const CenterPanel = (props) => props.children;
const RightTopPanel= (props) => BasePanel(props);
const RightBottomPanel = (props) => BasePanel(props);

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
          <SplitterPanel size={50}>{rightTopPanel}</SplitterPanel>
          <SplitterPanel size={50}>{rightBottomPanel}</SplitterPanel>
        </Splitter>
      </SplitterPanel>
    </Splitter>
  );
}

Object.assign(RootLayout, { LeftPanel, CenterPanel, RightTopPanel, RightBottomPanel });

export default RootLayout;