import { Module } from '@nestjs/common';
import { CredentialsService } from './credentials.service';
import { CredentialsController } from './credentials.controller';
import { CredentialsRepository } from './credentials.repository';
import { AuthService } from '../auth/auth.service';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { UsersRepository } from '../users/users.repository';

@Module({
  controllers: [CredentialsController],
  providers: [CredentialsService, CredentialsRepository, AuthService, UsersService, JwtService, UsersRepository],
})
export class CredentialsModule {}
