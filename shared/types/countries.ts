interface Country {
  countryCode: string;
  name: string;
}

interface CountryInfo {
  commonName: string;
  officialName: string;
  countryCode: string;
  region: string;
  borders: CountryInfo[] | null;
}

export { type Country, type CountryInfo };
