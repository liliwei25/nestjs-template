import { Test, TestingModule } from '@nestjs/testing';
import { HealthController } from './health.controller';
import { HealthService } from './health.service';
import { AppConfigModule } from '../config/app/config.module';

describe('HealthController', () => {
  let healthController: HealthController;
  let healthService: HealthService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [HealthController],
      providers: [HealthService],
      imports: [AppConfigModule],
    }).compile();

    healthService = app.get<HealthService>(HealthService);
    healthController = app.get<HealthController>(HealthController);
  });

  describe('root', () => {
    it('should return config', () => {
      const result = { env: 'test' };
      const pongSpy = jest.spyOn(healthService, 'pong').mockReturnValue(result);

      expect(healthController.ping()).toEqual({ env: 'test' });
      expect(pongSpy).toHaveBeenCalled();
    });
  });
});
