import { Module } from '@nestjs/common';
import { CardsService } from './cards.service';
import { CardsController } from './cards.controller';
import { CardsRepository } from './cards.repository';
import { AuthService } from '../auth/auth.service';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { UsersRepository } from '../users/users.repository';

@Module({
  controllers: [CardsController],
  providers: [CardsService, CardsRepository, AuthService, UsersService, JwtService, UsersRepository],
})
export class CardsModule {}
