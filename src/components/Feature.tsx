import React from "react";

export default function Feature() {
  return (
    <div>
      <section className="py-12 bg-gray-100 mb-30 ">
        <h2 className="text-center text-3xl font-bold md:text-4xl animate-fade-in-up transition-all duration-500 ease-in-out transform hover:translate-y-[-5px] hover:text-black text-blue-700">
          Explore the Highlights of What Makes Our Blog Your Go-To Platform
        </h2>

        <p className="text-center font-bold mt-4 m-4 text-sm text-gray-800 sm:text-base md:mb-12 lg:mb-16 animate-fade-in-up delay-100">
          Welcome to a space where your curiosity meets expertly crafted
          content. Our blog is more than just a collection of articles; it's a
          thoughtfully designed platform that caters to your need for
          information, inspiration, and engagement. With meticulously curated
          content, we bring you the latest trends, insights, and stories that
          matter most. Our user-friendly design ensures seamless navigation,
          making it easy for you to dive into topics that pique your interest.
        </p>

        <div className="mx-auto max-w-7xl px-5">
          <h1 className="text-3xl font-bold text-center my-8 text-blue-800 animate-color-change">
            Explore Our Top Features
          </h1>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 animate-fade-in-up delay-100">
            {[
              "Artificial Intelligence Insights",
              " Future of Technology",
              "AI in Creative Arts",
              "Tech News & Updates",
              " AI-Powered Innovations",
              " Natural Language Processing (NLP)",
            ].map((category, index) => (
              <div
                key={index}
                className="relative group p-6 bg-gray-400 rounded-lg shadow-lg hover:bg-white hover:text-black transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer flex items-center justify-center text-gray-800"
              >
                <p className="text-center text-lg font-semibold">{category}</p>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-white rounded-lg transition duration-300 ease-in-out"></div>
              </div>
            ))}
          </div>
        </div>
        <p className="text-sm md:text-base text-gray-800 font-bold mb-6 px-4 animate-fade-in-up delay-100 mt-10">
          AI is no longer a futuristic concept; it’s a part of our daily lives.
          From voice assistants like Alexa to personalized recommendations on
          streaming platforms, AI is everywhere. In this section, explore how AI
          is seamlessly integrated into the tools and services we use daily,
          making life more convenient, efficient, and connected.
        </p>
      </section>
    </div>
  );
}
