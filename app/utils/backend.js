import { AppService } from '../../backend/services';

export const pingBackend = () => {
  return AppService.checkBackend();
};
