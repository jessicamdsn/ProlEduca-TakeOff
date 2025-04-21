import { Injectable } from '@nestjs/common';
import { CreateInstitutionDto } from './dto/create-institution.dto';
import { UpdateInstitutionDto } from './dto/update-institution.dto';
import { Institution } from './entities/institution.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class InstitutionsService {

  constructor(
      @InjectRepository(Institution)
      private readonly repository: Repository<Institution>,
    ) {}

    public async create(createInstitutionDto: CreateInstitutionDto) {
    const newInstitution = await this.repository.save({
      trade_name: createInstitutionDto.trade_name,
      street: createInstitutionDto.street,
      number: createInstitutionDto.number,
      complement: createInstitutionDto.complement,
      district: createInstitutionDto.district,
      city: createInstitutionDto.city,
      state: createInstitutionDto.state,
      postal_code: createInstitutionDto.postal_code,
      manager_name: createInstitutionDto.manager_name,
      manager_phone: createInstitutionDto.manager_phone,
      manager_email: createInstitutionDto.manager_email,
      type: createInstitutionDto.type,
      image_url: createInstitutionDto.image_url,
      password: createInstitutionDto.password,
      is_active: createInstitutionDto.is_active,
      courses: createInstitutionDto.courses,
        });
        return newInstitution;
  }

  public async findAll() {
    return await this.repository.find();
  }

  public async findOne(id: number) {
    return await this.repository.findOneBy({ id });
  }

  public async update(id: number, updateInstitutionDto: UpdateInstitutionDto) {
    return await this.repository.update(id, updateInstitutionDto);
  }

  public async remove(id: number) {
    return await this.repository.delete(id);
  }
}
