import { Injectable } from '@nestjs/common';
import { CreateCardDto } from './dto/create-card.dto';
import { UpdateCardDto } from './dto/update-card.dto';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from "bcrypt"

@Injectable()
export class CardsRepository {

  constructor(private readonly prisma: PrismaService){ }

  create(createCardDto: CreateCardDto) {
    return this.prisma.card.create({
      data: {
          ...createCardDto,
          password: bcrypt.hashSync(createCardDto.password, 10),
          cvv: bcrypt.hashSync(createCardDto.cvv, 10)}
        })
  }

  // async checkTitleAndUser (title: string, user: string){
  //   return await this.prisma.card.findFirst({ where: {title, AND: {user}}})
  // } essa função vai impedir que o usuario cria dois cartoes com o mesmo titulo


  findAll() {
    return this.prisma.card.findMany()
  }

  findOne(id: number) {
    return this.prisma.card.findFirst({where: {id}})
  }

  remove(id: number) {
    return this.prisma.card.delete({where: {id}})
  }
}
