import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Client } from './entities/client.entity';

@Injectable()
export class ClientsService {

  constructor(
      @InjectRepository(Client)
      private readonly repository: Repository<Client>,
    ) {}
    
    public async create(createClientDto: CreateClientDto) {
    const newClient = await this.repository.save({
      full_name: createClientDto.full_name,
      email: createClientDto.email,
      phone: createClientDto.phone,
      cpf: createClientDto.cpf,
      birth_date: createClientDto.birth_date,
      is_active: createClientDto.is_active,
      // scholars: createClientDto.scholars,
    });
    return newClient;
  }

  public async findAll() {
    return await this.repository.find();
  }

  public async findOne(id: number) {
    return await this.repository.findOneBy({ id });
  }

  public async update(id: number, updateClientDto: UpdateClientDto) {
    return await this.repository.update(id, updateClientDto);
  }

  public async remove(id: number) {
    return await this.repository.delete(id);
  }
}
