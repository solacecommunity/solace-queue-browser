import { ApiClient as TauriClient } from "./TauriClient";
import { ApiClient as FetchClient } from './monitor/ApiClient';

export const ApiClient = window.__TAURI__ ? TauriClient : FetchClient;