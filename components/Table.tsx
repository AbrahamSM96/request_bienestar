import React from "react";
import Tbody from "./Tbody";
import Thead from "./Thead";

export default function Table() {
  return (
    <div className="flex flex-col items-center bg-morenaBold h-auto">
      <div className="items-center text-center text-gray-200 my-6">
        <h1 className="text-3xl ">Delegación Hidalgo</h1>
        <h1 className="text-3xl ">Subdelegación de Administración</h1>
        <h1 className="text-3xl ">Tabla de adquicisiones</h1>
      </div>
      <div className=" w-full xl:w-12/12 xl:mb-0 px-4 mx-auto">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded">
          <div className="block w-full overflow-x-auto">
            <table className="w-full flex-row flex-no-wrap overflow-hidden sm:shadow-lg table text-gray-400 border-separate space-y-6 text-sm">
              <Thead />
              <Tbody />
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
