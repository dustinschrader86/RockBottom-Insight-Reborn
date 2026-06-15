import { getStatus, getAppInfo } from '../api';

export const AppService = {
  checkBackend: () => getStatus(),
  getInfo: () => getAppInfo(),
};
