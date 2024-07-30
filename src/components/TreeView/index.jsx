import { useState } from 'react';
import './styles.css';
import { useSolaceQueueContext } from '../../hooks/solace';
import { useQueueList } from '../../hooks';

export default function TreeView() {
  const nodes = useQueueList();
  const [ toggleState, setToggleState ] = useState(Object.fromEntries(nodes.map(node => ([node.id, false]))));
  const { setQueueDefinition } = useSolaceQueueContext();
  
  const handleNodeClick = (node) => {
    if(node.children.length === 0) {
      node.update();
    }
    setToggleState(curr => ({ ...curr, [node.id]: !curr[node.id] }));
  };

  const handleChildClick = (node,child) => {
    setQueueDefinition({
      url: node.config.url,
      vpn: node.config.vpn,
      username: node.config.username,
      password: node.config.password,
      queueName: child.name
    });
  };

  return (
    <ul className="treeview">
      {
        nodes.map(node => (
          <li key={node.id} className={`caret ${toggleState[node.id] ? 'caret-down' : 'caret-up'}`} >
            <span onClick={() => handleNodeClick(node)}>{node.name}</span>
            <ul>
              {
                node.children.map(child => (
                  <li key={child.id} onClick={() => handleChildClick(node,child)}>{child.name}</li>
                ))
              }
            </ul>
          </li>
        ))
      }
    </ul>
  );
}