import { fetch } from '@tauri-apps/api/http';

export async function getQueues(brokerConfig) {
  const { hostName, sempPort, useTls, vpn, sempUsername, sempPassword } = brokerConfig;
  const url =
    `${(useTls ? 'https': 'http')}://${hostName}:${sempPort}/SEMP/v2/monitor/msgVpns/${vpn}/queues?count=100&select=queueName`;
  
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