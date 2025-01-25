import Countries from "./components/countries/countries";

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Country List</h1>
      <Countries />
    </main>
  );
}
