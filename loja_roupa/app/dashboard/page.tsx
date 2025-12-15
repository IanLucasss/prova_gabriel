import Navbar from "@/app/components/Navbar";

export default function Dashboard() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="p-10">
        <h1 className="text-yellow-500 text-3xl font-bold mb-4">
          Dashboard
        </h1>

        <p className="text-gray-400">
          Área administrativa da loja premium.
        </p>
      </section>
    </div>
  );
}
