import { Scholar } from "src/scholars/entities/scholar.entity";

export class CreateClientDto {
  full_name: string;
  email: string;
  phone: string;
  cpf: string;
  birth_date: Date;
  is_active: boolean;
  // scholars: Scholar[];
}
