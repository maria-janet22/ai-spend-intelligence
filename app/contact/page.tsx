import Navbar from "../components/Navbar";
export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white p-10">
     <Navbar />
      <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-14">

        Contact Us

      </h1>

      <div className="grid md:grid-cols-2 gap-10">

        {/* LEFT */}

        <div className="bg-zinc-900 border border-purple-900 rounded-3xl p-10">

          <h2 className="text-3xl font-bold mb-6">
            Get In Touch
          </h2>

          <div className="space-y-6">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full bg-black border border-purple-800 rounded-xl p-4"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-black border border-purple-800 rounded-xl p-4"
            />

            <textarea
              placeholder="Your Message"
              className="w-full bg-black border border-purple-800 rounded-xl p-4 h-40"
            />

            <button className="w-full bg-gradient-to-r from-purple-600 to-pink-500 py-4 rounded-2xl font-semibold">

              Send Message

            </button>

          </div>

        </div>

        {/* RIGHT */}

        <div className="bg-zinc-900 border border-purple-900 rounded-3xl p-10">

          <h2 className="text-3xl font-bold mb-8">
            Company Information
          </h2>

          <div className="space-y-5">

            <div className="bg-black border border-purple-800 rounded-2xl p-6">

              <h3 className="text-purple-400 text-xl font-bold mb-2">
                Email
              </h3>

              <p className="text-gray-300">
                support@aispendaudit.com
              </p>

            </div>

            <div className="bg-black border border-purple-800 rounded-2xl p-6">

              <h3 className="text-pink-400 text-xl font-bold mb-2">
                Phone
              </h3>

              <p className="text-gray-300">
                +91 9876543210
              </p>

            </div>

            <div className="bg-black border border-purple-800 rounded-2xl p-6">

              <h3 className="text-purple-400 text-xl font-bold mb-2">
                Location
              </h3>

              <p className="text-gray-300">
                Bangalore, India
              </p>

            </div>

            <div className="bg-black border border-purple-800 rounded-2xl p-6">

              <h3 className="text-pink-400 text-xl font-bold mb-2">
                Working Hours
              </h3>

              <p className="text-gray-300">
                Mon - Fri : 9AM - 6PM
              </p>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}