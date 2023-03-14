import { ValidationPipe, ValidationPipeOptions } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableShutdownHooks();
  app.useGlobalPipes(new ValidationPipe(determineValidationPipeOptions()));
  await app.listen(3000);
}
function determineValidationPipeOptions(): ValidationPipeOptions {
  const validationOptions: ValidationPipeOptions = {
    transform: true,
    whitelist: true,
    forbidNonWhitelisted: true,
    forbidUnknownValues: true,
  };
  if (process.env.NODE_ENV === 'production') {
    validationOptions.disableErrorMessages = true;
  }
  return validationOptions;
}
bootstrap();
