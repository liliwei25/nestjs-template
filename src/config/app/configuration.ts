import { registerAs } from '@nestjs/config';
import { Enum, Object } from '@sinclair/typebox/type';

export enum Environment {
  Development = 'development',
  Staging = 'staging',
  Production = 'production',
  Test = 'test',
}

export default registerAs('app', () => ({
  env: process.env.NODE_ENV,
}));

export const APP_CONFIG_SCHEMA = Object({
  NODE_ENV: Enum(Environment, { default: Environment.Development }),
});
