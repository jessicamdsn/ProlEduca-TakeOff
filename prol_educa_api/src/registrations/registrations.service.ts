import { Injectable } from '@nestjs/common';
import { CreateRegistrationDto } from './dto/create-registration.dto';
import { UpdateRegistrationDto } from './dto/update-registration.dto';
import { Registration } from './entities/registration.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class RegistrationsService {

  constructor(
      @InjectRepository(Registration)
      private readonly repository: Repository<Registration>,
    ) {}

    public async create(createRegistrationDto: CreateRegistrationDto) {
    const newRegistration = await this.repository.save({
      registration_date: createRegistrationDto.registration_date,
      status: createRegistrationDto.status,
      scholar: createRegistrationDto.scholar,
      course: createRegistrationDto.course,
        });
        return newRegistration;
  }

  public async findAll() {
    return await this.repository.find();
  }

  public async findOne(id: number) {
    return await this.repository.findOneBy({ id });
  }

  public async update(id: number, updateRegistrationDto: UpdateRegistrationDto) {
   return await this.repository.update(id, updateRegistrationDto);
  }

  public async remove(id: number) {
    return await this.repository.delete(id);
  }
}
