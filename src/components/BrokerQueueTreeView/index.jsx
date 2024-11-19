import { useState } from 'react';
import { useSempApi } from '../../providers/SolaceSempProvider';
import { QueueApi } from '../../utils/solace/semp/monitor';

import { PrimeIcons } from 'primereact/api';
import { Button } from 'primereact/button';
import { Tree } from 'primereact/tree';
import { Toolbar } from 'primereact/toolbar';

import BrokerConfigDialog from '../BrokerConfigDialog';

import classes from './styles.module.css';

export default function TreeView({ brokers, brokerEditor, onQueueSelected }) {
  const [ brokerForConfig, setBrokerForConfig ] = useState(null);
  const [ isLoading, setIsLoading ] = useState(false);

  const [ queuesListMap, setQueuesListMap ] = useState({});
  
  const queueApi = useSempApi(QueueApi);

  const getBrokerIcon = (testResult) => (
    testResult ? (
      testResult.connected ? (
        testResult.replay ?
          'pi pi-circle-fill text-primary' :
          'pi pi-circle text-primary'
      ) :
        'pi pi-times-circle text-red-500'
    ) : 'pi pi-question-circle'
  );

  const getQueueIcon = (queue) => {
    const isLvq = queue.maxMsgSpoolUsage === 0;
    const isEmpty = queue.msgSpoolUsage === 0;
    const isFull = (queue.msgSpoolUsage/queue.maxMsgSpoolUsage) > queue.eventMsgSpoolUsageThreshold.setPercent;

    const iconType = isLvq ? 'pi-caret-right' : 'pi-forward';
    const iconColor = isEmpty ? '' : (!isLvq && isFull) ? 'text-red-500' : 'text-primary';
    return `pi ${iconType} ${iconColor}`;
  };

  const nodes = brokers.map(config => ({
    id: config.id,
    key: config.id,
    label: config.displayName,
    data: {
      type: 'broker',
      config
    },
    icon: getBrokerIcon(config.testResult),
    leaf: false,
    children: queuesListMap[config.id] || []
  }));

  const handleExpand = async (event) => {
    setIsLoading(true);
    const { config } = event.node.data;

    const { result } = await brokerEditor.test(config);
    Object.assign(config, { testResult: result }); //HACK: this updates the during each expansion

    let queueNodeList = [];
    if(result.connected) {
      const queues = (await queueApi.with(config).getMsgVpnQueues(config.vpn, { count: 100 })).data;
      queueNodeList = queues
        .filter((queue) => !queue.queueName.startsWith('#'))
        .map((queue, n) => ({
          id: `${config.id}-${n}`,
          key: n.toString(),
          label: queue.queueName,
          data: {
            type: 'queue',
            config: Object.assign({}, config, { queueName: queue.queueName })
          },
          icon: getQueueIcon(queue)
        }));
    }

    setQueuesListMap(prev => ({...prev, [config.id]: queueNodeList}));
    setIsLoading(false);
  };

  const handleSelect = (event) => {
    if(event.node.data.type === 'queue') {
      onQueueSelected?.(event.node.data.config);
    }
  };

  const handleAddBrokerClick = () => {
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
      <Tree value={nodes} className={classes.tree} onExpand={handleExpand} onSelect={handleSelect} onNodeDoubleClick={handleDoubleClick} selectionMode="single" loading={isLoading} pt={{ container: { className: classes.treeContainer } }} />
      <BrokerConfigDialog config={brokerForConfig} brokerEditor={brokerEditor} onHide={handleConfigHide}  />
    </div>
  );
}