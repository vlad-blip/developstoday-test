import { Controller, Get, Param } from '@nestjs/common';
import { CountriesService } from './countries.service';

@Controller('countries')
export class CountriesController {
  constructor(private readonly countriesService: CountriesService) {}

  @Get()
  findAll() {
    return this.countriesService.findAll();
  }

  @Get(':countryCode')
  findOne(@Param('countryCode') countryCode: string) {
    return this.countriesService.findOne(countryCode);
  }
}
