import { PluginFunction } from 'vue';

import './vue'

export interface VueGoogleMapOptions {
  apiKey: string
  libraries: Array<string>
}

export interface LibLoader {
  ensureReady: () => Promise<any>;
  readyPromises: any[];
  loaded: boolean;
  load: () => Promise<void>;
  _setLoaded: () => void;
}

export default class VueGoogleMap {
  constructor(options: VueGoogleMapOptions);

  static install(): PluginFunction<any>;

  static libLoader: LibLoader;
}

