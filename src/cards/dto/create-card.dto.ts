import { IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CreateCardDto {

    @IsNotEmpty()
    @IsString()
    title: string

    @IsNotEmpty()
    @IsString()
    number: string

    @IsNotEmpty()
    @IsString()
    name: string

    @IsNotEmpty()
    @IsString()
    cvv: string

    @IsNotEmpty()
    @IsString()
    expiration: string
    
    @IsNotEmpty()
    @IsString()
    password: string

    @IsNotEmpty()
    @IsString()
    virtual: string

    @IsNotEmpty()
    @IsString()
    type: string
}
