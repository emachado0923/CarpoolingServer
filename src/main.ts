import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const colors = require('colors/safe');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3001,()=>{
    console.clear();
    console.log(colors.green('runing on port 3001...'));
  });
}
bootstrap();
