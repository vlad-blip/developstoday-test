import { Module } from '@nestjs/common';
import { CountriesService } from './countries.service';
import { CountriesController } from './countries.controller';
import { ExternalCountriesService } from 'src/external-countries/external-countries.service';

@Module({
  controllers: [CountriesController],
  providers: [CountriesService, ExternalCountriesService],
})
export class CountriesModule {}
