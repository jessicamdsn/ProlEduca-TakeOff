import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './entities/course.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CoursesService {

  constructor(
    @InjectRepository(Course)
    private readonly repository: Repository<Course>,
  ) { }

  public async create(createCourseDto: CreateCourseDto) {
    const newCourse = await this.repository.save({
      name: createCourseDto.name,
      vacancies: createCourseDto.vacancies,
      scholarship_percentage: createCourseDto.scholarship_percentage,
      original_price: createCourseDto.original_price,
      discounted_price: createCourseDto.discounted_price,
      shift: createCourseDto.shift,
      image_url: createCourseDto.image_url,
      enrollment_discount: createCourseDto.enrollment_discount,
      is_active: createCourseDto.is_active,
      institution: createCourseDto.institution,
      registrations: createCourseDto.registrations,
    });
    return newCourse;
  }

  public async findAll() {
    return await this.repository.find();
  }

  public async findOne(id: number) {
    return await this.repository.findOneBy({ id });
  }

  public async update(id: number, updateCourseDto: UpdateCourseDto) {
    return await this.repository.update(id, updateCourseDto);
  }

  public async remove(id: number) {
    return await this.repository.delete(id);
  }
}
