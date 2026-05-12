export default function Navbar() {
  return (

    <nav className="border-b border-purple-900 bg-black/60 backdrop-blur-xl sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        <h1 className="text-3xl font-bold text-purple-400">

          AI Spend Audit

        </h1>

        <div className="flex gap-8 text-gray-300 font-medium">

          <a
            href="/"
            className="hover:text-purple-400 transition"
          >
            Dashboard
          </a>

          <a
            href="/audit"
            className="hover:text-purple-400 transition"
          >
            AI Audit
          </a>

          <a
            href="/analytics"
            className="hover:text-purple-400 transition"
          >
            Analytics
          </a>

          <a
            href="/contact"
            className="hover:text-purple-400 transition"
          >
            Contact
          </a>

        </div>

      </div>

    </nav>
  );
}