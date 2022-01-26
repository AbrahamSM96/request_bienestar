import React from "react";
import Tbody from "./Tbody";
import Thead from "./Thead";

export default function Table() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <h1 className="text-3xl text-gray-500">Tabla de adquicisiones</h1>
      <div className="col-span-12">
        <div className="overflow-auto lg:overflow-visible ">
          <table className="table text-gray-400 border-separate space-y-6 text-sm">
            <Thead />
            <Tbody />
          </table>
        </div>
      </div>
    </div>
  );
}
