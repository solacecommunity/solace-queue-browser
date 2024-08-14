import { fetch } from '@tauri-apps/api/http';

export async function getQueues(brokerConfig) {
  const { hostName, useTls, vpn, sempUsername, sempPassword } = brokerConfig;
  const url = useTls ?
    `https://${hostName}:943/SEMP/v2/monitor/msgVpns/${vpn}/queues?count=100&select=queueName` :
    `http://${hostName}:8080/SEMP/v2/monitor/msgVpns/${vpn}/queues?count=100&select=queueName`;
  
  const start = Date.now();

  const resp = await fetch(url, {
      headers: {
        'Authorization': `Basic ${btoa(`${sempUsername}:${sempPassword}`)}`
      }
    }
  );
  const end = Date.now();

  console.log(`GET ${url} took ${end-start} ms.`)
  
  return resp.data.data;
}