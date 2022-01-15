import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { IsDate, IsString } from 'class-validator';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

/**
 * schema referente a coleção user do mongodb
 */
@Schema({ collection: 'contato' })
export class User {
  /**
   * nome do user
   */
  @Prop()
  @IsString()
  nome: String;

  /**
   * sobrenome do user
   */
  @Prop()
  @IsString()
  sobrenome: String;

  /**
   * endereço de e-mail do user
   */
  @Prop()
  @IsString()
  email: String;

  /**
   * data de inclusão do user
   */
  @Prop()
  @IsDate()
  dataInclusao: Date;

  /**
   *
   * @param props dados de inicialização da entidade
   */
  constructor(props?: any) {
    Object.assign(this, props);
  }
}

export const UserSchema = SchemaFactory.createForClass(User);
