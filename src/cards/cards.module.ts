import { Module } from '@nestjs/common';
import { CardsService } from './cards.service';
import { CardsController } from './cards.controller';
import { CardsRepository } from './cards.repository';
import { AuthService } from 'src/auth/auth.service';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { UsersRepository } from 'src/users/users.repository';

@Module({
  controllers: [CardsController],
  providers: [CardsService, CardsRepository, AuthService, UsersService, JwtService, UsersRepository],
})
export class CardsModule {}
