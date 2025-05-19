import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InstitutionsModule } from './institutions/institutions.module';
import { CoursesModule } from './courses/courses.module';
import { ScholarsModule } from './scholars/scholars.module';
import { AdministratorsModule } from './administrators/administrators.module';
import { ClientsModule } from './clients/clients.module';
import { RegistrationsModule } from './registrations/registrations.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [    
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: "postgres",
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT || '5432'),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      autoLoadEntities: true,
      synchronize: process.env.DB_SYNCHRONIZE === 'true', // Configuração dinâmica com base na variável
    }),
    InstitutionsModule,
    CoursesModule,
    ScholarsModule,
    AdministratorsModule,
    ClientsModule,
    RegistrationsModule,
    AuthModule,

  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
