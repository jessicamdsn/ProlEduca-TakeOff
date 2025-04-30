import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Post()
  public async create(@Body() createCourseDto: CreateCourseDto) {
    const newCourse = await this.coursesService.create(createCourseDto);
    return {
      message: 'Course created successfully',
      data: newCourse,
    };  }

  @Get()
  public async findAll() {
    const courses = await this.coursesService.findAll();
    return {
      message: `Found ${courses.length} courses`,
      data: courses,
    };  }

  @Get(':id')
  public async findOne(@Param('id') id: string) {
    const course = await this.coursesService.findOne(+id);
    return {
      message: 'course found',
      data: course,
    };
  }

  @Patch(':id')
  public async update(@Param('id') id: string, @Body() updateCourseDto: UpdateCourseDto) {
    return await this.coursesService.update(+id, updateCourseDto);
  }

  @Delete(':id')
  public async remove(@Param('id') id: string) {
    return await this.coursesService.remove(+id);
  }
}
