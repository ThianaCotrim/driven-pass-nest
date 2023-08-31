import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import SignUpDto from 'src/auth/dto/signup.dto';
import { PrismaService } from 'src/prisma/prisma.service';
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









  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
