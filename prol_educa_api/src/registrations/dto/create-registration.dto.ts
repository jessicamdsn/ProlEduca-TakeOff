import { Course } from "src/courses/entities/course.entity";
import { Scholar } from "src/scholars/entities/scholar.entity";

export class CreateRegistrationDto {
    registration_date: Date;
    status: 'Pending' | 'Confirmed' | 'Canceled';
      scholar: Scholar;
      course: Course;
}
