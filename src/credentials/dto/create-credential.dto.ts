import { IsNotEmpty, IsString } from "class-validator"

export class CreateCredentialDto {

    @IsNotEmpty()
    @IsString()
    url: string

    @IsNotEmpty()
    @IsString()
    username: string
    
    @IsNotEmpty()
    @IsString()
    password: string

    @IsNotEmpty()
    @IsString()
    title: string
}


