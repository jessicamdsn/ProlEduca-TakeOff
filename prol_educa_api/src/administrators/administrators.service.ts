import { Inject, Injectable } from '@nestjs/common';
import { CreateAdministratorDto } from './dto/create-administrator.dto';
import { UpdateAdministratorDto } from './dto/update-administrator.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Administrator } from './entities/administrator.entity';
import { Repository } from 'typeorm';
import { createHash } from 'crypto';

@Injectable()
export class AdministratorsService {

  constructor(
    @InjectRepository(Administrator)
    private readonly repository: Repository<Administrator>,
  ) {}

  public async create(createAdministratorDto: CreateAdministratorDto) {
    const newAdmin = await this.repository.save({
      name: createAdministratorDto.name,
      email: createAdministratorDto.email,
      password: createHash('sha256').update(createAdministratorDto.password).digest('hex'),
    });
    return newAdmin;
  }

  public async findAll() {
    return await this.repository.find();
  }

  public async findOne(id: number) {
    return await this.repository.findOneBy({ id });
  }

  public async update(id: number, updateAdministratorDto: UpdateAdministratorDto) {
    return await this.repository.update(id, updateAdministratorDto);
  }

  public async remove(id: number) {
    return await this.repository.delete(id);
  }
}
