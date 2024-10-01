import { ConfigModule } from '@nestjs/config';

ConfigModule.forRoot({
  envFilePath: ['.env.test'],
  isGlobal: true,
  ignoreEnvVars: true,
});
