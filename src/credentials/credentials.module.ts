import { Module } from '@nestjs/common';
import { CredentialsService } from './credentials.service';
import { CredentialsController } from './credentials.controller';
import { CredentialsRepository } from './credentials.repository';
import { AuthService } from 'src/auth/auth.service';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { UsersRepository } from 'src/users/users.repository';

@Module({
  controllers: [CredentialsController],
  providers: [CredentialsService, CredentialsRepository, AuthService, UsersService, JwtService, UsersRepository],
})
export class CredentialsModule {}
