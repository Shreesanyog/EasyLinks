import Image from "next/image";
import Link from "next/link";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export default function Home() {
  return (
    
    <main className="bg-gradient-to-r from-gray-100 to-gray-300  min-h-screen text-gray-600">
      {/* Hero Section */}
      <section className="py-12 px-4 sm:px-8 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center items-center md:items-start space-y-6">
            <h1 className={`text-4xl sm:text-4xl font-bold ${poppins.className} text-center md:text-justify`}>
              Easily shorten and track links with the best URL shortener of EasyLinks.
            </h1>
            <p className="text-lg sm:text-xl opacity-80 text-center md:text-justify px-4 py-3">
              Turn long URLs into shareable, trackable links using EasyLinks instant custom URL generator for smooth integration.
            </p>
            <div className="flex gap-6 justify-center md:justify-start">
              <Link href="/shorten">
                <button className="bg-gradient-to-r from-teal-500 to-green-400 rounded-lg shadow-xl px-14 py-4 font-bold justify-center items-center text-white hover:scale-105 transition duration-300">
                  Try Now
                </button>
              </Link>
              
            </div>
          </div>
          <div className="relative h-[300px] sm:h-[400px] md:h-[400px]">
            <Image className="object-cover rounded-xl shadow-2xl " alt="url" src={"/home_3.jpg"} layout="fill" />
          </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="py-16 px-4 sm:px-8 bg-gray-150 rounded-xl shadow-lg">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-12">Why Choose EasyLinks?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-r from-blue-400 to-blue-500 rounded-2xl p-6 shadow-xl  text-white space-y-4 hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-semibold ">Instant Shortening</h3>
            <p className="text-justify">Quickly shorten any URL with just a click, saving you time and effort.</p>
          </div>
          <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl p-6 shadow-xl  text-white space-y-4 hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-semibold text-center">Simple and User-Friendly Interface</h3>
            <p className="text-justify">Our platform is designed with simplicity in mind. Whether you are a beginner or a pro, you can shorten and manage URLs with just a few clicks. No complicated processes—just fast results.</p>
          </div>
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-6 shadow-xl  text-white space-y-4 hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-semibold text-center">Unlimited Links</h3>
            <p className="text-justify">Unlike many competitors, EasyLink offers unlimited URL shortening. Whether you are managing thousands of links or just a handful, our platform scales to meet your needs</p>
          </div>
        </div>
      </section>

      {/* See It in Action Section */}
      <section className="py-16 px-4 sm:px-8 bg-gray-200 rounded-xl shadow-lg">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-8">See It in Action</h2>
        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-8">
          <div className="space-y-6 text-gray-600 px-4 sm:px-8 md:w-1/2">
            <p className="text-lg sm:text-xl opacity-90">
              <b>EasyLinks</b> is designed to be simple, efficient, and user-friendly. Whether you are a business, blogger, or marketer, our tool helps you share your content in a smarter way.
            </p>
            <div className="flex justify-center">
              <Link href="/shorten">
                <button className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg shadow-xl p-4 font-bold text-white hover:scale-105 transition duration-300">
                  Start Shortening Now
                </button>
              </Link>
            </div>
          </div>
          <div className="relative w-full md:w-1/2 h-[300px] sm:h-[400px] md:h-[400px]">
            <Image className="object-cover rounded-xl shadow-2xl" alt="url_two_google" src={"/home_1.jpg"} layout="fill" />
          </div>
        </div>
      </section>
    </main>
  );
}
