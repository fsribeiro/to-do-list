import { IsDate, IsNotEmpty, IsOptional, IsString } from "class-validator";
export class CreateTaskDto {

  @IsString()
  @IsNotEmpty()
  titulo: string;

  @IsString()
  @IsNotEmpty()
  responsavel: string;

  @IsDate()
  @IsOptional()
  dataInicio: Date;

  @IsDate()
  @IsOptional()
  dataFim: Date;

  @IsString()
  @IsDate()
  resumoTarefa: string;
}
