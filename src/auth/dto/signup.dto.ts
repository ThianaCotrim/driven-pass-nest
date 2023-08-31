import { IsNotEmpty, IsString, IsStrongPassword, isStrongPassword } from "class-validator";


export default class SignUpDto {

    @IsNotEmpty()
    @IsString()
    email: string

    
    @IsNotEmpty()
    @IsStrongPassword()
    password: string


}