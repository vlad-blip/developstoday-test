import {
  type Country,
  type Exception,
  type CountryInfo,
} from "../../../shared/types/index";

export class API {
  private static baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  public static async getCountries(): Promise<Country[] | Exception> {
    const response = await fetch(`${API.baseUrl}/countries`);

    return await response.json();
  }

  public static async getCountry(
    countryCode: string
  ): Promise<CountryInfo | Exception> {
    if (!countryCode) {
      throw new Error("Country code should be provided");
    }

    const response = await fetch(`${API.baseUrl}/countries/${countryCode}`);

    return await response.json();
  }
}
