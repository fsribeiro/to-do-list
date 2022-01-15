import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateUserDto } from './dto/update-task.dto';

@Controller('task')
export class UserController {
  constructor(private readonly userService: TaskService) {}

  @Post()
  async create(@Body() createUserDto: CreateTaskDto) {
    const resp = this.userService.create(createUserDto);
    return resp;
  }

  @Get()
  async findAll() {
    const resp = await this.userService.findAll();
    return resp;
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const resp = await this.userService.findOne(id);
    return resp;
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    const resp = await this.userService.update(id, updateUserDto);
    return resp;
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const resp = await this.userService.remove(id);
    return resp;
  }
}
