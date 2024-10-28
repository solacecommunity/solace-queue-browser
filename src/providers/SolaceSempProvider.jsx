import { createContext, useContext } from "react";

const SolaceSempContext = createContext();

export function SolaceSempProvider({ value, children }) {
  return (
    <SolaceSempContext.Provider value={value}>
      {children}
    </SolaceSempContext.Provider>
  );
}

export function useSempApi(ApiCtor) {
  const ApiClient = useContext(SolaceSempContext);
  return {
    with: (opts) => {
      const client = new ApiClient();
      const { useTls, hostName, sempPort, sempUsername, sempPassword } = opts;
      Object.assign(client, { 
        basePath: `${(useTls ? 'https': 'http')}://${hostName}:${sempPort}/SEMP/v2/monitor`
      });
      Object.assign(client.authentications.basicAuth, { username: sempUsername, password: sempPassword });
      return new ApiCtor(client);
    }
  }
}