importimport { getAppInfo } from '../api';
 { getStatus } from '../api';

export const AppService = {
  checkBackend: () => getStatus(),
};
