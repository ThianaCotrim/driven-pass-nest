import { BadGatewayException, ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateCredentialDto } from './dto/create-credential.dto';
import { UpdateCredentialDto } from './dto/update-credential.dto';
import { CredentialsRepository } from './credentials.repository';


@Injectable()
export class CredentialsService {

  constructor(private readonly repository: CredentialsRepository){ }

  async create(createCredentialDto: CreateCredentialDto) {
    const {title, url, username, password} = createCredentialDto
    if(!title || !url || !username || !password) throw new BadGatewayException("Todos os campos são obrigatórios")

    const ExistTitle = await this.repository.getTitle(title)

    if(ExistTitle) throw new ConflictException("Esse título já existe")

    return this.repository.create(createCredentialDto)
  }

  async findAll() {

    return await this.repository.findAll()
  }

  async findOne(id: number) {
    const credential = await this.repository.findOne(id)
    if (!credential) throw new NotFoundException();
    
    // Se o usuário procurar por uma credencial que não é dele (403 Forbidden) 

    return credential
  }


  async remove(id: number) {
    const credential = await this.repository.findOne(id)
    if(!credential) throw new NotFoundException();

    // Se o usuário procurar por uma credencial que não é dele (403 Forbidden) 
    return credential
  }
}
