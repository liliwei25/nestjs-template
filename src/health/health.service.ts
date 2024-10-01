import { Injectable } from '@nestjs/common';
import { AppConfigService } from '../config/app/config.service';

@Injectable()
export class HealthService {
  constructor(private readonly appConfigService: AppConfigService) {}

  pong() {
    return { env: this.appConfigService.env };
  }
}
