import "./App.css";

import RootLayout from "./components/RootLayout";

import { ApiClient as MonitorClient, QueueApi as QueueMonitorApi } from "./utils/solace/semp/monitor";
import { ApiClient as ConfigClient, QueueApi as QueueConfigApi } from "./utils/solace/semp/config";
import { ApiClient as ActionClient, QueueApi as QueueActionApi } from './utils/solace/semp/action';

function App() {
  function createApi(ClientCtor, ApiCtor, basePath, username, password) {
    const client = new ClientCtor();
    Object.assign(client, { basePath });
    Object.assign(client.authentications.basicAuth, { username, password });
    return new ApiCtor(client);
  }

  Object.assign(window, {
    createApi,
    MonitorClient,
    ConfigClient,
    ActionClient,
    QueueMonitorApi,
    QueueConfigApi,
    QueueActionApi
  });

  return (
    <RootLayout />
  );
}

export default App;
