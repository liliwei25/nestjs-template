import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration, { APP_CONFIG_SCHEMA } from './configuration';
import { AppConfigService } from './config.service';
import { Value } from '@sinclair/typebox/value';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      validate: (config) => Value.Parse(APP_CONFIG_SCHEMA, config),
    }),
  ],
  providers: [ConfigService, AppConfigService],
  exports: [AppConfigService],
})
export class AppConfigModule {}
