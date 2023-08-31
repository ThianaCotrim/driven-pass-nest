import { Injectable } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class NotesRepository {

  constructor(private readonly prisma: PrismaService){ }

  
  getTitle(title: string) {
    return this.prisma.note.findFirst({where: {title}})
  }


  create(createNoteDto: CreateNoteDto) {
    return this.prisma.note.create({ data: createNoteDto})
  }


  findAll() {
    return this.prisma.note.findMany()
  }


  findOne(id: number) {
    return this.prisma.note.findFirst({where: {id}})
  }


  remove(id: number) {
    return this.prisma.note.delete({where: {id}})
  }
}
