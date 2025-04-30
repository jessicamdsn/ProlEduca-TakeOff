import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InstitutionsService } from './institutions.service';
import { CreateInstitutionDto } from './dto/create-institution.dto';
import { UpdateInstitutionDto } from './dto/update-institution.dto';

@Controller('institutions')
export class InstitutionsController {
  constructor(private readonly institutionsService: InstitutionsService) {}

  @Post()
  public async create(@Body() createInstitutionDto: CreateInstitutionDto) {
    const newInstitution = await this.institutionsService.create(createInstitutionDto);
    return {
      message: 'Institution created successfully',
      data: newInstitution,
    };
  }

  @Get()
  public async findAll() {
    const institutions = await this.institutionsService.findAll();
    return {
      message: `Found ${institutions.length} institutions`,
      data: institutions,
    };
  }

  @Get(':id')
  public async findOne(@Param('id') id: string) {
    const institution = await this.institutionsService.findOne(+id);
    return {
      message: 'institution found',
      data: institution,
    };
  }

  @Patch(':id')
  public async update(@Param('id') id: string, @Body() updateInstitutionDto: UpdateInstitutionDto) {
    return await this.institutionsService.update(+id, updateInstitutionDto);
  }

  @Delete(':id')
  public async remove(@Param('id') id: string) {
    return await this.institutionsService.remove(+id);
  }
}
