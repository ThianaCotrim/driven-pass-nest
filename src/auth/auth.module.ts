import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtModule } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { UsersRepository } from 'src/users/users.repository';

@Module({
  imports: [JwtModule.register({
    secret: process.env.JWT_SECRET  
  }),UsersModule],
  controllers: [AuthController],
  providers: [AuthService, PrismaService, UsersService, UsersRepository]
})
export class AuthModule {}
