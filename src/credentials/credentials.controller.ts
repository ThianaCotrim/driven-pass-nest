import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CredentialsService } from './credentials.service';
import { CreateCredentialDto } from './dto/create-credential.dto';
import { UpdateCredentialDto } from './dto/update-credential.dto';

@Controller('credentials')
export class CredentialsController {
  constructor(private readonly credentialsService: CredentialsService) {}

  @Post("/credentials")
  create(@Body() createCredentialDto: CreateCredentialDto) {
    return this.credentialsService.create(createCredentialDto);
  }

  @Get("/credentials")
  findAll() {
    return this.credentialsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.credentialsService.findOne(+id);
  }

  
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.credentialsService.remove(+id);
  }
}
