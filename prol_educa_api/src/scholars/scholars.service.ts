import { Injectable } from '@nestjs/common';
import { CreateScholarDto } from './dto/create-scholar.dto';
import { UpdateScholarDto } from './dto/update-scholar.dto';
import { Scholar } from './entities/scholar.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ScholarsService {

  constructor(
    @InjectRepository(Scholar)
    private readonly repository: Repository<Scholar>,
  ) { }

  public async create(createScholarDto: CreateScholarDto) {
    const newScholar = await this.repository.save({
      full_name: createScholarDto.full_name,
      birth_date: createScholarDto.birth_date,
      has_disabilities: createScholarDto.has_disabilities,
      cpf: createScholarDto.cpf,
      ethnicity: createScholarDto.ethnicity,
    });
    return newScholar;
  }

  public async findAll() {
    return await this.repository.find();
  }

  public async findOne(id: number) {
    return await this.repository.findOneBy({ id });
  }

  public async update(id: number, updateScholarDto: UpdateScholarDto) {
    return await this.repository.update(id, updateScholarDto);
  }

  public async remove(id: number) {
    return await this.repository.delete(id);
  }
}
