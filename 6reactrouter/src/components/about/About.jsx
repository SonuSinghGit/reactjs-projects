import React from "react";

function About() {
  return (
    <div className="min-h-screen bg-white px-8 py-12">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
        About Success
      </h1>

      <div className="max-w-3xl mx-auto space-y-6 text-gray-700 text-lg">
        <p>
          <strong>Consistency</strong> is the key to mastery. Small daily efforts
          lead to big achievements over time. When you show up every day,
          even on difficult days, you build discipline and confidence.
        </p>

        <p>
          <strong>Perseverance</strong> means not giving up when things get tough.
          Challenges are part of the journey. Every failure teaches a lesson
          that moves you one step closer to success.
        </p>

        <p>
          <strong>Motivation</strong> gives you the initial push, but habits
          and discipline keep you moving forward. Stay focused on your goals
          and remind yourself why you started.
        </p>

        <p className="font-semibold text-blue-500">
          "Success is the result of consistent effort, strong perseverance,
          and unstoppable motivation."
        </p>
      </div>
    </div>
  );
}

export default About;
