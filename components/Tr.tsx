import React from "react";
import DropDown from "./DropDown";

export default function Tr() {
  return (
    <>
      <tr className="bg-gray-800">
        <td className="p-3">
          <div className="flex align-items-center">
            <div className="ml-3">
              {/* <div className="text-gray-500">mail@rgmail.com</div> */}
              <input
                type="number"
                placeholder="Cantidad"
                className="px-3 py-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
              />
            </div>
          </div>
        </td>
        <td className="p-3">
          <DropDown />
        </td>

        <td className="p-3 font-bold">
          <DropDown />
        </td>
        <td className="p-3">
          <DropDown />
        </td>
        <td className="p-3 ">
          <input
            type="text"
            placeholder="Comments"
            className="px-3 py-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          />
        </td>
      </tr>
      <tr className="bg-gray-800">
        <td className="p-3">
          <div className="flex align-items-center">
            <div className="ml-3">
              <input
                type="number"
                placeholder="Cantidad"
                className="px-3 py-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
              />
              {/* <div className="text-gray-500">mail@rgmail.com</div> */}
            </div>
          </div>
        </td>
        <td className="p-3">
          <DropDown />
        </td>

        <td className="p-3 font-bold">
          <DropDown />
        </td>
        <td className="p-3">
          <DropDown />
        </td>
        <td className="p-3">
          <input
            type="text"
            placeholder="Comments"
            className="px-3 py-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          />
        </td>
      </tr>
      <tr className="bg-gray-800">
        <td className="p-3">
          <div className="flex align-items-center">
            <div className="ml-3">
              <input
                type="number"
                placeholder="Cantidad"
                className="px-3 py-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
              />
              {/* <div className="text-gray-500">mail@rgmail.com</div> */}
            </div>
          </div>
        </td>
        <td className="p-3">
          <DropDown />
        </td>

        <td className="p-3 font-bold">
          <DropDown />
        </td>
        <td className="p-3">
          <DropDown />
        </td>
        <td className="p-3">
          <input
            type="text"
            placeholder="Comments"
            className="px-3 py-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          />
        </td>
      </tr>
    </>
  );
}
