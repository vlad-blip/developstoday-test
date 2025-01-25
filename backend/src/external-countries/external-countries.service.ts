import { Injectable } from '@nestjs/common';

@Injectable()
export class ExternalCountriesService {
  async getCountries() {
    const response = await fetch(
      'https://date.nager.at/api/v3/AvailableCountries',
    );

    return await response.json();
  }

  async getCountry(countryCode: string) {
    const response = await fetch(
      `https://date.nager.at/api/v3/CountryInfo/${countryCode}`,
    );

    return response.json();
  }

  async getPopulation() {
    const response = await fetch(
      'https://countriesnow.space/api/v0.1/countries/population',
    );

    return response.json();
  }

  async getFlags() {
    const response = await fetch(
      'https://countriesnow.space/api/v0.1/countries/flag/images',
    );

    return response.json();
  }
}
