import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { UserController } from './task.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Task, TaskSchema } from './entities/task.entity';

@Module({
  imports: [
    MongooseModule.forFeature(
      [{ name: Task.name, schema: TaskSchema }],
      process.env.MONGO_API_DOCKER_SERVICE,
    )
  ],
  controllers: [UserController],
  providers: [TaskService]
})
export class TaskModule {}
