import { Injectable } from '@nestjs/common';
import SignUpDto from 'src/auth/dto/signup.dto';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from "bcrypt"

@Injectable()
export class UsersRepository {
  
  constructor(private readonly prisma: PrismaService){ }

  create(signUpDto: SignUpDto) {
    return this.prisma.user.create({
      data:{
        ...signUpDto,
      password: bcrypt.hashSync(signUpDto.password, 10)} 
    })
  }



  getUserByEmail(email: string) {
    return this.prisma.user.findUnique({where:{email}})
  }


  async getUserById(id: number){
    return this.prisma.user.findUnique({where: {id}})
  }









  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  remove(id: number) {
    return this.prisma.user.delete({where: {id}})
  }
}
