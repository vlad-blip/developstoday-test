import PopulationChart from "./components/population-chart";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import BorderCountries from "./components/border-countries";
import { API } from "@/api/api";

export default async function CountryPage({
  params,
}: {
  params: Promise<{ countryCode: string }>;
}) {
  const countryCode = (await params).countryCode;

  const data = await API.getCountry(countryCode);

  if (!data) {
    notFound();
  }

  return (
    <div className="container mx-auto p-10 min-h-screen bg-gray-100">
      <Link
        href="/"
        className="inline-block mb-8 px-4 py-2 bg-white text-blue-600 shadow-md rounded-lg hover:bg-blue-50 transition-colors duration-200 font-medium"
      >
        ← Back to Countries
      </Link>

      <div className="bg-white shadow-lg rounded-xl p-6 space-y-8">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
          <Image
            src={data.flag || "/placeholder.svg"}
            alt={`Flag of ${data.officialName}`}
            width={120}
            height={80}
            className="rounded-lg shadow-md object-cover"
          />
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center sm:text-left">
            {data.officialName}
          </h1>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="bg-gray-50 rounded-lg p-4 shadow-inner">
            <BorderCountries countries={data.borders} />
          </div>
          <div className="bg-gray-50 rounded-lg p-4 shadow-inner">
            {data.populationCounts?.length ? (
              <PopulationChart population={data.populationCounts} />
            ) : (
              <p className="text-center text-gray-600 italic">
                There is no information about population
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
