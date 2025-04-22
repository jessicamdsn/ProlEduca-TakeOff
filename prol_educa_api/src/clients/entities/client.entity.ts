// client.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Scholar } from '../../scholars/entities/scholar.entity';

@Entity('clients')
export class Client {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  full_name: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column({ unique: true })
  cpf: string;

  @Column()
  birth_date: Date;

  @Column({ default: true })
  is_active: boolean;

  // @OneToMany(() => Scholar, scholar => scholar.client)
  // scholars: Scholar[];
}
