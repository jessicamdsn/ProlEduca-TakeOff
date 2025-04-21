import { Module } from '@nestjs/common';
import { AdministratorsService } from './administrators.service';
import { AdministratorsController } from './administrators.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Administrator } from './entities/administrator.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Administrator])],
  controllers: [AdministratorsController],
  providers: [AdministratorsService],
})
export class AdministratorsModule {}
