import { Module } from '@nestjs/common';
import { NotesService } from './notes.service';
import { NotesController } from './notes.controller';
import { NotesRepository } from './notes.repository';
import { AuthService } from '../auth/auth.service';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { UsersRepository } from '../users/users.repository';

@Module({
  controllers: [NotesController],
  providers: [NotesService, NotesRepository, AuthService, UsersService, JwtService, UsersService, UsersRepository],
})
export class NotesModule {}
