import { IsNotEmpty } from 'class-validator';
export class RegisterDto {
  @IsNotEmpty()
  email: string;
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  password: string;
}

export default RegisterDto;
