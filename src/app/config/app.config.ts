import { AppService } from '@photon/service/app.service';

export const NAME = 'Photon';
export const CREDENTIAL = 'access_token';

export function servicesOnRun(config: AppService) {
    return () => config.load();
}
