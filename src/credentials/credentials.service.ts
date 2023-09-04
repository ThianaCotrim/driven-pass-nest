import { BadGatewayException, ConflictException, ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateCredentialDto } from './dto/create-credential.dto';
import { CredentialsRepository } from './credentials.repository';


@Injectable()
export class CredentialsService {
  private readonly cryptr: any;

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

    return await this.repository.findOne(id)
  }


  async remove(id: number) {


    const credential = await this.repository.findOne(id)
    if(!credential) throw new NotFoundException();


    return this.repository.remove(id)
  }
}
