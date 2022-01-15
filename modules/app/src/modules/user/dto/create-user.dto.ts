import { IsDate, IsNotEmpty, IsOptional, IsString } from "class-validator";
export class CreateUserDto {

  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsString()
  @IsNotEmpty()
  sobrenome: string;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsDate()
  @IsOptional()
  dataInclusao?: Date;
}
