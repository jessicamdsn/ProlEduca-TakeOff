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
    TypeOrmModule.forRootAsync({
      useFactory: () => {
        const dbUrl = new URL(process.env.DATABASE_URL!);
        return {
          type: 'postgres',
          host: dbUrl.hostname,
          port: parseInt(dbUrl.port),
          username: dbUrl.username,
          password: dbUrl.password,
          database: dbUrl.pathname.slice(1),
          autoLoadEntities: true,
          synchronize: process.env.DB_SYNCHRONIZE === 'true',
        };
      },
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
export class AppModule { }
