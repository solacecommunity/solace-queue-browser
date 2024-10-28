import { useState } from 'react';
import { useSolaceConfigContext } from '../../providers/SolaceConfigProvider';
import { useSempApi } from '../../providers/SolaceSempProvider';
import { QueueApi } from '../../utils/solace/semp/monitor';

import { PrimeIcons } from 'primereact/api';
import { Button } from 'primereact/button';
import { Tree } from 'primereact/tree';
import { Toolbar } from 'primereact/toolbar';

import ConfigServerDialog from '../ServerConfigDialog';

import classes from './styles.module.css';

export default function TreeView({ onQueueSelected }) {
  const [ brokerForConfig, setBrokerForConfig ] = useState(null);
  const [ isLoading, setIsLoading ] = useState(false);

  const [ queuesListMap, setQueuesListMap ] = useState({});
  
  const { brokers } = useSolaceConfigContext();
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
    const queues = (await queueApi.with(config).getMsgVpnQueues(config.vpn, { count: 100 })).data;
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
      onQueueSelected?.(event.node.data.config);
    }
  };

  const handleAddBrokerClick = (event) => {
    setBrokerForConfig({});
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
    <div className={classes.container}>
      <Toolbar className={classes.toolbar} start={() => <Button size="small" icon={PrimeIcons.PLUS} onClick={handleAddBrokerClick} />} />
      <Tree value={nodes2} className={classes.tree} onExpand={handleExpand} onSelect={handleSelect} onNodeDoubleClick={handleDoubleClick} selectionMode="single" loading={isLoading} />
      <ConfigServerDialog config={brokerForConfig} onHide={handleConfigHide} />
    </div>
  );
}