import { ConflictException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './users.repository';
import SignUpDto from 'src/auth/dto/signup.dto';

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
