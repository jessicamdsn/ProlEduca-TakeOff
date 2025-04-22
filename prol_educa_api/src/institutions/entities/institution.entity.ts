import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Institution {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  trade_name: string;

  @Column()
  street: string;

  @Column()
  number: string;

  @Column({ nullable: true })
  complement: string;

  @Column()
  district: string;

  @Column()
  city: string;

  @Column({ length: 2 })
  state: string;

  @Column()
  postal_code: string;

  @Column()
  manager_name: string;

  @Column()
  manager_phone: string;

  @Column()
  manager_email: string;

  @Column()
  type: string;

  @Column({ nullable: true })
  image_url: string;

  @Column()
  password: string;

  @Column({ default: true })
  is_active: boolean;
  courses: any;
}
