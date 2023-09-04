import { Injectable } from '@nestjs/common';
import { CreateCredentialDto } from './dto/create-credential.dto';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from "bcrypt"

@Injectable()
export class CredentialsRepository{

  constructor(private readonly prisma: PrismaService){ }


  create(createCredentialDto: CreateCredentialDto) {
    return this.prisma.credential.create({
      data: {
          ...createCredentialDto,
          password: bcrypt.hashSync(createCredentialDto.password, 10)}
        })
  }


  getTitle(title: string) {
    return this.prisma.credential.findUnique({where:{title}})
  }


  findAll() {
    // Todas as credenciais retornadas devem aparecer com a senha descriptografada (200 Ok).
    return this.prisma.credential.findMany()
  }


  findOne(id: number) {
    // Todas as credenciais retornadas devem aparecer com a senha descriptografada (200 Ok).
    return this.prisma.credential.findFirst({where: {id}})
  }

  
  remove(id: number) {
    return this.prisma.credential.delete({where: {id}})
  }
}
