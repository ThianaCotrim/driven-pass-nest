import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import SignUpDto from './dto/signup.dto';
import SignInDto from './dto/signin.dto';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags("Auth")
@Controller('auth')
export class AuthController {

    constructor( private readonly authservice: AuthService) { }

    //cadastro
    @Post("/sign-up")
    @ApiOperation({summary: "Register a user"})
    @ApiBody({type: SignUpDto})
    @ApiResponse({
        status: HttpStatus.CONFLICT, 
        description: "Email já cadastrado"
    })
    signUp(@Body() signUpDto: SignUpDto){
       return this.authservice.signUp(signUpDto)
    }

    //login
    @Post("/sign-in")
    @ApiOperation({summary: "Authenticate a user"})
    @HttpCode(HttpStatus.OK)
    signIp(@Body() signInDto: SignInDto){
        return this.authservice.signIn(signInDto)
    }
}
