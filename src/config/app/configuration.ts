import { registerAs } from '@nestjs/config';
import { z } from 'zod';

export default registerAs('app', () => ({
  env: process.env.NODE_ENV,
}));

export const APP_CONFIG_SCHEMA = z.object({
  NODE_ENV: z
    .enum(['development', 'staging', 'production', 'test'])
    .default('development'),
});
