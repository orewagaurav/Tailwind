import React from "react";

const Text: React.FC = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-100 p-8">
        <h1 className="text-4xl font-bold text-[red]">
          Vite + React + TS + Tailwind
        </h1>
        <p className="mt-4 text-lg text-gray-700">Everything works! 🚀</p>

        <img src="/vite.svg" alt="image" />
      </div>
      
    </>
  );
};
export default Text;
