import { IsNotEmpty, IsString} from "class-validator";


export default class SignInDto {

    @IsNotEmpty()
    @IsString()
    email: string

    
    @IsNotEmpty()
    @IsString()
    password: string
}