import Navbar from "./components/Navbar";
export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* NAVBAR */}

      <Navbar />
      

      {/* HERO */}

      <section className="text-center py-28 px-6">

        <h1 className="text-7xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-8">

          AI Spend Intelligence

        </h1>

        <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">

          Analyze and optimize your organization’s AI spending using intelligent audit insights.

        </p>

        <div className="flex justify-center gap-5 mt-10">

          <a
            href="/audit"
            className="bg-gradient-to-r from-purple-600 to-pink-500 px-8 py-4 rounded-2xl text-lg font-semibold"
          >
            Start AI Audit
          </a>

          <a
            href="/analytics"
            className="border border-purple-700 px-8 py-4 rounded-2xl text-lg"
          >
            View Analytics
          </a>

        </div>

      </section>

      {/* STATS */}

      <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6 pb-24">

        <div className="bg-zinc-900 border border-purple-900 rounded-3xl p-8">

          <h2 className="text-5xl font-bold text-purple-400 mb-4">
            13K+
          </h2>

          <p className="text-gray-400">
            Average yearly savings identified.
          </p>

        </div>

        <div className="bg-zinc-900 border border-purple-900 rounded-3xl p-8">

          <h2 className="text-5xl font-bold text-pink-400 mb-4">
            8+
          </h2>

          <p className="text-gray-400">
            AI platforms analyzed.
          </p>

        </div>

        <div className="bg-zinc-900 border border-purple-900 rounded-3xl p-8">

          <h2 className="text-5xl font-bold text-purple-400 mb-4">
            2 Min
          </h2>

          <p className="text-gray-400">
            Fast audit generation.
          </p>

        </div>

      </section>

    </main>
  );
}