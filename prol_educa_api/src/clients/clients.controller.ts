import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';

@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Post()
  public async create(@Body() createClientDto: CreateClientDto) {
    const newClient = await this.clientsService.create(createClientDto);
    return {
      message: 'Client created successfully',
      data: newClient,
    };
  }

  @Get()
  public async findAll() {
    const clients = await this.clientsService.findAll();
    return {
      message: `Found ${clients.length} clients`,
      data: clients,
    };
  }

  @Get(':id')
  public async findOne(@Param('id') id: string) {
    const client = await this.clientsService.findOne(+id);
    return {
      message: 'Client found',
      data: client,
    };
  }

  @Patch(':id')
  public async update(@Param('id') id: string, @Body() updateClientDto: UpdateClientDto) {
    return this.clientsService.update(+id, updateClientDto);
  }

  @Delete(':id')
  public async remove(@Param('id') id: string) {
    return this.clientsService.remove(+id);
  }
}
