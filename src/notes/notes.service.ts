import { BadRequestException, ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { NotesRepository } from './notes.repository';

@Injectable()

export class NotesService {

  constructor(private readonly repository: NotesRepository){ }
  

  async create(createNoteDto: CreateNoteDto) {
    const {title, text} = createNoteDto
    if(!title || !text) throw new BadRequestException("Todos os campos são obrigatórios")

    const ExistTitle = await this.repository.getTitle(title)
    if(ExistTitle) throw new ConflictException("Esse título já existe")

    return this.repository.create(createNoteDto)
  }


  async findAll() {
    return await this.repository.findAll()
  }


  async findOne(id: number) {
      const notes = await this.repository.findOne(id)
    if (!notes) throw new NotFoundException();
    
    // Se o usuário procurar por uma credencial que não é dele (403 Forbidden) 

    return notes
  }


  async remove(id: number) {
    const notes = await this.repository.findOne(id)
    if(!notes) throw new NotFoundException();

    // Se o usuário procurar por uma credencial que não é dele (403 Forbidden) 
    return this.repository.remove(id)
  }
}
