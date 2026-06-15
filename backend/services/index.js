import { getStatus } from '../api';

export const AppService = {
  checkBackend: () => getStatus(),
};
