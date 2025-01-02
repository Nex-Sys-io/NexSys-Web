"use client";
import { useEffect} from "react";
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Projects() {
    const [view, setView] = React.useState("products");
    return (
        <div className="min-h-screen bg-black text-white bg-gradient-to-l from-blue-500 via-black to-pink-500 dark:bg-gradient-to-l dark:from-blue-500 dark:to-pink-500">
      <section className="py-20 max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-10">Projects</h1>
        <div className="flex justify-center gap-4 mb-10">
          <button onClick={() => setView("products")} className={`px-6 py-3 rounded-lg ${view === "products" ? "bg-blue-500" : "bg-gray-700"} hover:bg-blue-600`}>Products</button>
          <button onClick={() => setView("services")} className={`px-6 py-3 rounded-lg ${view === "services" ? "bg-blue-500" : "bg-gray-700"} hover:bg-blue-600`}>Services</button>
        </div>

        {view === "products" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-4 rounded-lg hover:shadow-lg">
              <div className="h-48 bg-blue-300 rounded mb-4"></div>
              <h3 className="text-xl font-bold">Project Title</h3>
              <p className="mt-2">Short project description goes here.</p>
            </div>
          </div>
        )}
        {view === "services" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-4 rounded-lg hover:shadow-lg">
              <div className="h-48 bg-blue-300 rounded mb-4"></div>
              <h3 className="text-xl font-bold">Project Title 2</h3>
              <p className="mt-2">Another project description goes here.</p>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}