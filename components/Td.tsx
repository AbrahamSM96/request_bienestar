import React from "react";

export default function Td() {
  return (
    <>
      <td className="p-3">
        <div className="flex align-items-center">
          <img
            className="rounded-full h-12 w-12  object-cover"
            src="https://images.unsplash.com/photo-1613588718956-c2e80305bf61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80"
            alt="unsplash image"
          />
          <div className="ml-3">
            <div className="">Appple</div>
            <div className="text-gray-500">mail@rgmail.com</div>
          </div>
        </div>
      </td>
    </>
  );
}
