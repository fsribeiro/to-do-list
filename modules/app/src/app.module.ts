import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskModule } from './modules/task/task.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_API_URI, {
      connectionName: process.env.MONGO_API_DOCKER_SERVICE,
    }),
    TaskModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
