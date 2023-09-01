import { Injectable, UnauthorizedException } from '@nestjs/common';
import SignUpDto from './dto/signup.dto';
import SignInDto from './dto/signin.dto';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from "bcrypt"
import { User } from '@prisma/client';
import { JwtService } from '@nestjs/jwt';

@Injectable()

export class AuthService {

    private EXPIRATION_TIME = "7 days"
    private ISSUER = "Driven"
    private AUDIENCIE= "users"

    constructor(
        private readonly usersService: UsersService, 
        private readonly jwtService: JwtService){ }

    async signUp(signUpDto: SignUpDto) {
        const user = await this.usersService.create(signUpDto)
        return user
    }

    async signIn(signInDto: SignInDto) {
        const {email, password} = signInDto
        const user = await this.usersService.getUserByEmail(email)
        if(!user) throw new UnauthorizedException("Email e senha não existem")

        const valid = await bcrypt.compare(password, user.password)
        if (!valid) throw new UnauthorizedException("Email e senha não existem")

        return this.createToken(user)
    } 


    createToken(user: User) {
        const {id, email} = user
        const token = this.jwtService.sign({ email }, {
            expiresIn: this.EXPIRATION_TIME,
            subject: String(id),
            issuer: this.ISSUER,
            audience: this.AUDIENCIE
        })
        return token 
    }

    checkToken(token: string){
        const chaveSecreta = "nest"
        const data = this.jwtService.verify(token,{
            secret: chaveSecreta,
            audience: this.AUDIENCIE,
            issuer: this.ISSUER
        })

        return data
    }

}
