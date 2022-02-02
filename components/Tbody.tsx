import React, { useEffect, useState } from "react";
import { useTuples } from "../context/tuplesContext";
import { getMain } from "../services/index";
import Tr from "./Tr";

export default function Tbody() {
  const { tuples } = useTuples();
  tuples.sort((tupA, tupB) =>
    tupA.id > tupB.id ? 1 : tupA.id < tupB.id ? -1 : 0,
  );

  return (
    <tbody>
      {tuples.map((tuple: any, index: Number) => {
        return (
          <Tr
            key={`tuple-${tuple.id_tuple}-${index}`}
            {...tuple}
            index={index}
          />
        );
      })}
    </tbody>
  );
}
