import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly lastname: string;

  @IsString()
  @IsNotEmpty()
  readonly user_tag: string;

  @IsString()
  @IsNotEmpty()
  readonly password: string;
}

export class UpdatePasswordUserDto {
  @IsString()
  @IsNotEmpty()
  readonly password: string;

  @IsString()
  @IsNotEmpty()
  readonly new_password: string;
}

export class UpdateUserDto {
  @IsString()
  @IsOptional()
  readonly name: string;

  @IsString()
  @IsOptional()
  readonly lastname: string;

  @IsString()
  @IsOptional()
  readonly user_tag: string;
}
