import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ScholarsService } from './scholars.service';
import { CreateScholarDto } from './dto/create-scholar.dto';
import { UpdateScholarDto } from './dto/update-scholar.dto';

@Controller('scholars')
export class ScholarsController {
  constructor(private readonly scholarsService: ScholarsService) {}

  @Post()
  public async create(@Body() createScholarDto: CreateScholarDto) {
    const newScholar = await this.scholarsService.create(createScholarDto);
    return {
      message: 'Scholar created successfully',
      data: newScholar,
    };
  }

  @Get()
  public async findAll() {
    const scholars = await this.scholarsService.findAll();
    return {
      message: `Found ${scholars.length} Scholars`,
      data: scholars,
    };
  }

  @Get(':id')
  public async findOne(@Param('id') id: string) {
    const scholar = await this.scholarsService.findOne(+id);
    return {
      message: 'scholars found',
      data: scholar,
    };
  }

  @Patch(':id')
  public async update(@Param('id') id: string, @Body() updateScholarDto: UpdateScholarDto) {
    return await this.scholarsService.update(+id, updateScholarDto);
  }

  @Delete(':id')
  public async remove(@Param('id') id: string) {
    return await this.scholarsService.remove(+id);
  }
}
