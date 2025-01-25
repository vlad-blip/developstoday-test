import { type Country } from "./types";
import Link from "next/link";

export default function CountryItem({ country }: { country: Country }) {
  return (
    <Link href={`/country/${country?.countryCode}`}>
      <div className="bg-white shadow rounded-lg p-3 flex justify-between items-center">
        <h2 className="text-black font-bold">{country?.name}</h2>
        <p className="text-black text-sm">{country?.countryCode}</p>
      </div>
    </Link>
  );
}
