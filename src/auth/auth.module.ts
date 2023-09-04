import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { PrismaService } from '../prisma/prisma.service';
import { JwtModule } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { UsersRepository } from '../users/users.repository';

@Module({
  imports: [JwtModule.register({
    secret: process.env.JWT_SECRET  
  }),UsersModule],
  controllers: [AuthController],
  providers: [AuthService, PrismaService, UsersService, UsersRepository]
})
export class AuthModule {}
