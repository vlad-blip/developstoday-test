import { HttpException, Injectable, HttpStatus } from '@nestjs/common';

import { ExternalCountriesService } from '../external-countries/external-countries.service';

@Injectable()
export class CountriesService {
  constructor(
    private readonly externalCountriesService: ExternalCountriesService,
  ) {}

  async findAll() {
    try {
      return await this.externalCountriesService.getCountries();
    } catch (error) {
      console.error('[CountriesService.findAll]', error);

      throw new HttpException(
        'An error occurred while fetching country data',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findOne(countryCode: string) {
    try {
      const [countryData, populationData, flagData] = await Promise.all([
        this.externalCountriesService.getCountry(countryCode),
        this.externalCountriesService.getPopulation(),
        this.externalCountriesService.getFlags(),
      ]);

      const populationDataForCountry = populationData.data?.find(
        (data) => data.country === countryData.commonName,
      );

      const flagForCountry = flagData.data?.find(
        (data) => data.iso2 === countryCode,
      );

      return {
        ...countryData,
        flag: flagForCountry?.flag,
        populationCounts: populationDataForCountry?.populationCounts,
      };
    } catch (error) {
      console.error('[CountriesService.findOne]', error);

      throw new HttpException(
        'An error occurred while fetching country details',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
