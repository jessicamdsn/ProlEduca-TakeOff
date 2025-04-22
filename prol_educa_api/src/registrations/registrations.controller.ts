import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RegistrationsService } from './registrations.service';
import { CreateRegistrationDto } from './dto/create-registration.dto';
import { UpdateRegistrationDto } from './dto/update-registration.dto';

@Controller('registrations')
export class RegistrationsController {
  constructor(private readonly registrationsService: RegistrationsService) {}

  @Post()
  public async create(@Body() createRegistrationDto: CreateRegistrationDto) {
    const newRegistration = await this.registrationsService.create(createRegistrationDto);
    return {
      message: 'Registration created successfully',
      data: newRegistration,
    };
  }

  @Get()
  public async findAll() {
    const registrations = await this.registrationsService.findAll();
    return {
      message: `Found ${registrations.length} registrations`,
      data: registrations,
    };
  }

  @Get(':id')
  public async findOne(@Param('id') id: string) {
    const registration = await this.registrationsService.findOne(+id);
    return {
      message: 'registration found',
      data: registration,
    };
  }

  @Patch(':id')
  public async update(@Param('id') id: string, @Body() updateRegistrationDto: UpdateRegistrationDto) {
    return await this.registrationsService.update(+id, updateRegistrationDto);
  }

  @Delete(':id')
  public async remove(@Param('id') id: string) {
    return await this.registrationsService.remove(+id);
  }
}
