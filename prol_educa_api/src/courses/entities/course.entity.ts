// course.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Institution } from '../../institutions/entities/institution.entity';
import { Registration } from '../../registrations/entities/registration.entity';

@Entity('courses')
export class Course {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Institution, institution => institution.courses, { onDelete: 'CASCADE' })
  institution: Institution;

  @Column()
  name: string;

  @Column()
  vacancies: number;

  @Column('numeric', { precision: 5, scale: 2 })
  scholarship_percentage: number;

  @Column('numeric', { precision: 10, scale: 2 })
  original_price: number;

  @Column('numeric', { precision: 10, scale: 2 })
  discounted_price: number;

  @Column()
  shift: 'Morning' | 'Afternoon' | 'Evening' | 'Full';

  @Column({ nullable: true })
  image_url: string;

  @Column('numeric', { precision: 10, scale: 2, nullable: true })
  enrollment_discount: number;

  @Column({ default: true })
  is_active: boolean;

  @OneToMany(() => Registration, registration => registration.course)
  registrations: Registration[];
}
