import React, { useEffect, useState } from "react";
import { useTuples } from "../context/tuplesContext";
import { getMain } from "../services/index";
import Tr from "./Tr";

export default function Tbody() {
  const { tuples = [{}] } = useTuples();
  const lengthTuples = tuples.length === 0;
  return (
    <tbody>
      {tuples.map((tuple: any, index: Number) => {
        return (
          <Tr key={`tuple-${tuple.id}-${index}`} {...tuple} index={index} />
        );
      })}
    </tbody>
  );
}
