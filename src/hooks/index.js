import { useState, useEffect} from "react";

export function useQueueList() {
  // Dummy data for now...
  let defaultQueueList = [
    {
      id: 1,
      name: 'Local Std / Default',
      config: {
        url: 'broker-std.local',
        vpn: 'default',
        username: 'user',
        password: 'password'
      },
      children: []
    },
    {
      id: 2,
      name: 'Local Ent / Default',
      children: []
    }
  ];

  const [queueList, setQueueList] = useState(defaultQueueList);

  const updateChildren = async (entry) => {
    const resp = await fetch(
      `http://${entry.config.url}:8080/SEMP/v2/monitor/msgVpns/${entry.config.vpn}/queues?count=100`, {
        headers: {
          'Authorization': `Basic ${btoa(`${entry.config.username}:${entry.config.password}`)}`
        }
      }
    );
    const json = await resp.json();

    entry.children = json.data.map(queue => ({
      id: `${entry.config.url}|${entry.config.vpn}|${queue.queueName}`,
      name: queue.queueName
    }));

    setQueueList(curr => [...curr]);
  };

  useEffect(() => {
    queueList.forEach(entry => {
      entry.update = () => updateChildren(entry);
    });
  },[]);

  return queueList;
}

export function useMessageBrowser() {
  const [ messages, setMessages ] = useState([]);
  const [ options, setOptions ] = useState({});

  const getMessages = async (opts) => {

    const resp = await fetch(
      `http://${opts.url}:8080/SEMP/v2/monitor/msgVpns/${opts.vpn}/queues/${encodeURIComponent(opts.queueName)}/msgs?count=100`, {
        headers: {
          'Authorization': `Basic ${btoa(`${opts.username}:${opts.password}`)}`
        }
      }
    );
    const json = await resp.json();
    setOptions(opts);
    setMessages(json.data);
  };

  return {
    messages,
    options,
    getMessages
  }
};