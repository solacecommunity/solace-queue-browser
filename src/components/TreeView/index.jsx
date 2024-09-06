import { useState } from 'react';
import { useSolaceQueueContext } from '../../hooks/solace';
import { useSolaceConfigContext } from '../../providers/SolaceConfigProvider';
import { useSempApi } from '../../providers/SolaceSempProvider';
import { QueueApi } from '../../utils/solace/semp/monitor';


import { Tree } from 'primereact/tree';
import ConfigServerDialog from '../ConfigServerDialog';

import classes from './styles.module.css';
        

export default function TreeView() {
  const [ brokerForConfig, setBrokerForConfig ] = useState(null);
  const [ isLoading, setIsLoading ] = useState(false);

  const [ queuesListMap, setQueuesListMap ] = useState({});
  
  const { brokers } = useSolaceConfigContext();
  const { setQueueDefinition } = useSolaceQueueContext();
  const queueApi = useSempApi(QueueApi);

  const nodes2 = brokers.map(config => ({
    id: config.id,
    key: config.id,
    label: config.displayName,
    data: {
      type: 'broker',
      config
    },
    leaf: false,
    children: queuesListMap[config.id] || []
  }));

  const handleExpand = async (event) => {
    setIsLoading(true);
    const { config } = event.node.data;
    const queues = (await queueApi.build(config).getMsgVpnQueues(config.vpn, { count: 100 })).data;
    const queueNodeList = queues
      .filter((queue) => !queue.queueName.startsWith('#'))
      .map((queue, n) => ({
        id: `${config.id}-${n}`,
        key: n.toString(),
        label: queue.queueName,
        data: {
          type: 'queue',
          config: Object.assign({}, config, { queueName: queue.queueName })
        }
      }));
    setQueuesListMap(prev => ({...prev, [config.id]: queueNodeList}));
    setIsLoading(false);
  };

  const handleSelect = (event) => {
    if(event.node.data.type === 'queue') {
      setQueueDefinition(event.node.data.config);
    }
  };

  const handleDoubleClick = (event) => {
    if(event.node.data.type === 'broker') {
      setBrokerForConfig(event.node.data.config);
    }
  };

  const handleConfigHide = (data) => {
    setBrokerForConfig(null);
  };

  return (
    <>
      <Tree value={nodes2} className={classes.tree} onExpand={handleExpand} onSelect={handleSelect} onNodeDoubleClick={handleDoubleClick} selectionMode="single" loading={isLoading} />
      <ConfigServerDialog config={brokerForConfig} onHide={handleConfigHide} />
    </>
  );
}