import { Module } from '@nestjs/common';
import { CountriesModule } from './countries/countries.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [CountriesModule, ConfigModule.forRoot()],
})
export class AppModule {}
