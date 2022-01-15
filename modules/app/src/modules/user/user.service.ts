import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ObjectId } from 'mongodb';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './entities/user.entity';

@Injectable()
export class UserService {
   /**
   * construtor da classe para injetar as dependências necessárias
   * @param userModel - model para lidar com os métodos do banco
   */
  constructor(
    @InjectModel(User.name)
    private userModel: Model<UserDocument>,
  ) {}
  
   /**
   * método responsável por criar um novo usuário no banco de dados
   * @param id - identificado único do usuário no banco de dados
   */
  async create(createUserDto: CreateUserDto) {
    try {
      const resp = await this.userModel.create(createUserDto);
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
      const resp = await this.userModel.find();
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
      const resp = await this.userModel.findOne({ _id: id });
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
    data.dataInclusao = new Date();

    try {
      const resp = await this.userModel.updateOne(
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
      const resp = await this.userModel.deleteOne({ _id: id });
      return resp;
    } catch (error) {
      return error;
    }
  }
}
