// registration.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Scholar } from '../../scholars/entities/scholar.entity';
import { Course } from '../../courses/entities/course.entity';

@Entity('registrations')
export class Registration {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Scholar, scholar => scholar.registrations, { onDelete: 'CASCADE' })
  scholar: Scholar;

  @ManyToOne(() => Course, course => course.registrations, { onDelete: 'CASCADE' })
  course: Course;

  @Column({ type: 'date', default: () => 'CURRENT_DATE' })
  registration_date: Date;

  @Column()
  status: 'Pending' | 'Confirmed' | 'Canceled';
}
