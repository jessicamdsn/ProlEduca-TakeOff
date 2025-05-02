import { Client } from "src/clients/entities/client.entity";
import { Registration } from "src/registrations/entities/registration.entity";

export class CreateScholarDto {
  full_name: string;
  birth_date: Date;
  has_disabilities: boolean;
  cpf: string;
  ethnicity: string;
  client: Client;
  registrations: Registration[];
}
