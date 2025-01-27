"use client";
import React from "react";
import "../css/projects.css";


export default function Projects() {
    const [view, setView] = React.useState("products");
    return (
      <div
      className="min-h-screen text-white"
      style={{
        background:
          "radial-gradient(125% 125% at 50% 10%, #004d40 0%, #000 40%, #00695c 70%, #000 100%)",
      }}
    >
      <section className="py-20 max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-10">Projects</h1>
        <div className="flex justify-center gap-4 mb-10">
        <button
          onClick={() => setView("products")}
          className={`btn-custom2 ${view === "products" ? "" : "opacity-50"}`}
        >
          Products
        </button>
        <button
          onClick={() => setView("services")}
          className={`btn-custom2 ${view === "services" ? "" : "opacity-50"}`}
        >
          Services
        </button>
        </div>

        {view === "products" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-4 rounded-lg hover:shadow-lg">
            <div className="h-48 bg-green-100 rounded mb-4"></div>
            <h3 className="text-xl font-bold">Project Title</h3>
            <p className="mt-2">Short project description goes here.</p>
          </div>
          </div>
        )}
        {view === "services" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-4 rounded-lg hover:shadow-lg">
            <div className="h-48 bg-green-100 rounded mb-4"></div>
            <h3 className="text-xl font-bold">Project Title 2</h3>
            <p className="mt-2">Another project description goes here.</p>
          </div>
          </div>
        )}
      </section>
    </div>
  );
}