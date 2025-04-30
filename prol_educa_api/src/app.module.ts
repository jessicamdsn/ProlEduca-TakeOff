import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InstitutionsModule } from './institutions/institutions.module';
import { CoursesModule } from './courses/courses.module';
import { ScholarsModule } from './scholars/scholars.module';
import { AdministratorsModule } from './administrators/administrators.module';
import { ClientsModule } from './clients/clients.module';
import { RegistrationsModule } from './registrations/registrations.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'eduPass',
      autoLoadEntities: true,
      synchronize: true, // usar false em produção
    }),
    InstitutionsModule,
    CoursesModule,
    ScholarsModule,
    AdministratorsModule,
    ClientsModule,
    RegistrationsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
