import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Hero Section */}
      <section className=" text-black py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Build Your Success Journey
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl mb-8">
          Success doesn’t happen overnight. It comes from daily consistency,
          strong perseverance, and unstoppable motivation.
        </p>

       
      </section>

      {/* Features Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">

          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">
              Consistency
            </h2>
            <p className="text-gray-600">
              Small efforts repeated daily create massive results over time.
              Stay disciplined and never skip your growth routine.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">
              Perseverance
            </h2>
            <p className="text-gray-600">
              Challenges are part of the journey. Keep moving forward even when
              the path feels difficult.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">
              Motivation
            </h2>
            <p className="text-gray-600">
              Motivation starts the journey, but discipline and habits finish
              it. Stay focused on your goals.
            </p>
          </div>

        </div>
      </section>

      {/* Quote Section */}
      <section className="bg-gray-200 py-12 text-center px-6">
        <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 max-w-3xl mx-auto">
          "Success is not final, failure is not fatal: 
          it is the courage to continue that counts."
        </h3>
      </section>

    </div>
  );
}

export default Home;
