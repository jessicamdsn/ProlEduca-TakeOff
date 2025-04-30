import { Module } from '@nestjs/common';
import { ScholarsService } from './scholars.service';
import { ScholarsController } from './scholars.controller';
import { Scholar } from './entities/scholar.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Scholar])],
  controllers: [ScholarsController],
  providers: [ScholarsService],
})
export class ScholarsModule {}
