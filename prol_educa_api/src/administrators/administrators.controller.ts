import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AdministratorsService } from './administrators.service';
import { CreateAdministratorDto } from './dto/create-administrator.dto';
import { UpdateAdministratorDto } from './dto/update-administrator.dto';

@Controller('administrators')
export class AdministratorsController {
  constructor(private readonly administratorsService: AdministratorsService) {}

  @Post()
  public async create(@Body() createAdminDto: CreateAdministratorDto) {
    const newAdmin = await this.administratorsService.create(createAdminDto);
    return {
      message: 'Administrator created successfully',
      data: newAdmin,
    };
  }

  @Get()
  public async findAll() {
    const admins = await this.administratorsService.findAll();
    return {
      message: `Found ${admins.length} administrators`,
      data: admins,
    };
  }

  
  @Get(':id')
  public async findOne(@Param('id') id: number) {
    const admin = await this.administratorsService.findOne(+id);
    return {
      message: 'Administrator found',
      data: admin,
    };
  }

  @Patch(':id')
  public async update(@Param('id') id: string, @Body() updateAdministratorDto: UpdateAdministratorDto) {
    return await this.administratorsService.update(+id, updateAdministratorDto);
  }

  @Delete(':id')
  public async remove(@Param('id') id: string) {
    return await this.administratorsService.remove(+id);
  }
}
