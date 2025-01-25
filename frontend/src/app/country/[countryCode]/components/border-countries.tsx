import Link from "next/link";

interface Country {
  commonName: string;
  officialName: string;
  countryCode: string;
  region: string;
  borders: null;
}

export default function BorderCountries({
  countries,
}: {
  countries: Country[];
}) {
  return (
    <ul className="flex flex-wrap gap-2">
      {countries.map((country) => (
        <li key={country.countryCode}>
          <Link
            href={`/country/${country.countryCode}`}
            className="bg-white shadow rounded-lg p-3 flex justify-between items-center"
          >
            {country.officialName}
          </Link>
        </li>
      ))}
    </ul>
  );
}
