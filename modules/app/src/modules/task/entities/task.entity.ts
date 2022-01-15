import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { IsDate, IsString } from 'class-validator';
import { Document } from 'mongoose';

export type TaskDocument = Task & Document;

/**
 * schema referente a coleção user do mongodb
 */
@Schema({ collection: 'tasks' })
export class Task {
  /**
   * nome da tarefa
   */
  @Prop()
  @IsString()
  titulo: String;

  /**
   * responsável pela tarefa
   */
  @Prop()
  @IsString()
  responsavel: String;

  /**
  * data de início da tarefa
   */
  @Prop()
  @IsDate()
  dataInicio: Date;

  /**
   * data de conclusão da tarefa
   */
  @Prop()
  @IsDate()
  dataFim: Date;

  /**
   * descritivo da tarefa
   */
   @Prop()
   @IsDate()
   resumoTarefa: string;

  /**
   *
   * @param props dados de inicialização da entidade
   */
  constructor(props?: any) {
    Object.assign(this, props);
  }
}

export const TaskSchema = SchemaFactory.createForClass(Task);
