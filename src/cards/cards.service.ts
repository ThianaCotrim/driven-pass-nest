import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateCardDto } from './dto/create-card.dto';
import { UpdateCardDto } from './dto/update-card.dto';
import { CardsRepository } from './cards.repository';

@Injectable()
export class CardsService {

  constructor(private readonly repository: CardsRepository){ }


  create(createCardDto: CreateCardDto) {
    const {title, number, name, cvv, expiration, password, virtual, type} = createCardDto
    
    if(!title || !number || !name || !cvv || !expiration || !password || !virtual || !type) {
      throw new BadRequestException("Todos os campos são obrigatórios")}

      

      return this.repository.create(createCardDto)

  }

  async findAll() {
    return await this.repository.findAll()
  }

  async findOne(id: number) {
    const card = await this.repository.findOne(id)
    if (!card) throw new NotFoundException();
    
    // Se o usuário procurar por uma credencial que não é dele (403 Forbidden) 

    return card
  }


  async remove(id: number) {
      const card = await this.repository.findOne(id)
    if(!card) throw new NotFoundException();

    // Se o usuário procurar por uma credencial que não é dele (403 Forbidden) 
    return this.repository.remove(id)
  }
}
