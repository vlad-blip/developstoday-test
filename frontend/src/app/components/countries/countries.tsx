import CountryItem from "./country-item";
import { API } from "@/api/api";

export default async function Countries() {
  const data = await API.getCountries();

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {data.map((country) => (
        <li key={country?.countryCode}>
          <CountryItem country={country} />
        </li>
      ))}
    </ul>
  );
}
