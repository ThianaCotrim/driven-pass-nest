import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './users.repository';
import SignUpDto from 'src/auth/dto/signup.dto';
import { NotFoundError } from 'rxjs';

@Injectable()
export class UsersService {

  constructor(private readonly repository: UsersRepository){ }

  async create(signUpDto: SignUpDto){
    const { email } = signUpDto
    const user = await this.repository.getUserByEmail(email);
    if(user) throw new ConflictException("Email já existe")

    return await this.repository.create(signUpDto)
  }


  async getUserByEmail(email: string) {
    const user = await this.repository.getUserByEmail(email);
    return user
  }

  async getUserById(id: number){
    const user = await this.repository.getUserById(id)
    if(!user) throw new NotFoundException("Usuario não encontrado")

    return user
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

  async remove(id: number) {
    return await this.repository.remove(id)
  }
}
