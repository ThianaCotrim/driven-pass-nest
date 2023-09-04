import { ApiProduces, ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsStrongPassword, isStrongPassword } from "class-validator";


export default class SignUpDto {

    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        example: "thiana@hotmail.com",
        description: "email for user"
    })
    email: string

    
    @IsNotEmpty()
    @IsStrongPassword()
    @ApiProperty({
        example: "Thiana123!",
        description: "passoword for user"
    })
    password: string


}