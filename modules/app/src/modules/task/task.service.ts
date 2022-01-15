import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ObjectId } from 'mongodb';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateUserDto } from './dto/update-task.dto';
import { Task, TaskDocument } from './entities/task.entity';

@Injectable()
export class TaskService {
   /**
   * construtor da classe para injetar as dependências necessárias
   * @param taskModel - model para lidar com os métodos do banco
   */
  constructor(
    @InjectModel(Task.name)
    private taskModel: Model<TaskDocument>,
  ) {}
  
   /**
   * método responsável por criar um novo usuário no banco de dados
   * @param id - identificado único do usuário no banco de dados
   */
  async create(createTaskDto: CreateTaskDto) {
    try {
      const resp = await this.taskModel.create(createTaskDto);
      return resp;
    }catch (error) {
      return error;
    };
  }

   /**
   * método respnsável por consultar todos os usuários do banco de dados
   * @param id - identificado único do usuário no banco de dados
   */
  async findAll() {
    try {
      const resp = await this.taskModel.find();
      return resp;
    }catch (error) {
      return error;
    };
  }

   /**
   * método responsável por consultar um usuários dado o id passado como parâmetro
   * @param id - identificado único do usuário no banco de dados
   */
  async findOne(id: string) {
    try {
      const resp = await this.taskModel.findOne({ _id: id });
      return resp;
    }catch (error) {
      return error;
    };
  }

   /**
   * método responsável por atualizar um usuário dado o id passado como parâmetro
   * @param id - identificado único do usuário no banco de dados
   */
  async update(id: string, data: UpdateUserDto) {
    try {
      const resp = await this.taskModel.updateOne(
        {
          _id: new ObjectId(id),
        },
        {
          $set: data
        },
      );
      return id;
    }catch (error) {
      return error;
    }
  }

  /**
   * método responsável por remover remover usuário dado ao _id passado como parâmetro
   * @param id - identificado único do usuário no banco de dados
   */
  async remove(id: string) {
    try {
      const resp = await this.taskModel.deleteOne({ _id: id });
      return resp;
    } catch (error) {
      return error;
    }
  }
}
