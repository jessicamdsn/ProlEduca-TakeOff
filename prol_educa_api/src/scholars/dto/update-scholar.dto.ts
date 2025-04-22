import { PartialType } from '@nestjs/mapped-types';
import { CreateScholarDto } from './create-scholar.dto';

export class UpdateScholarDto extends PartialType(CreateScholarDto) {}
