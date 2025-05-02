// scholar.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Client } from '../../clients/entities/client.entity';
import { Registration } from '../../registrations/entities/registration.entity';

@Entity('scholars')
export class Scholar {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Client, client => client.scholars, { onDelete: 'CASCADE' })
  client: Client;

  @Column()
  full_name: string;

  @Column()
  birth_date: Date;

  @Column()
  has_disabilities: boolean;

  @Column({ nullable: true })
  cpf: string;

  @Column({ nullable: true })
  ethnicity: string;

  @OneToMany(() => Registration, registration => registration.scholar)
  registrations: Registration[];
}
