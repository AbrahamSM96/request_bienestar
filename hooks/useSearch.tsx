import { useState, useEffect, useRef } from "react";
import { useTuples } from "../context/tuplesContext";
interface Tuples {
  id: number;
  area: string;
  cantidad: number;
  clasificacion: string;
  item: string;
  nota: string;
  unidad: string;
}
export const useSearch = () => {
  const { tuples = [{}] } = useTuples();
  const refButton = useRef<HTMLSelectElement>(null);
  const [search, setSearch] = useState<string>("");
  const resultSearcher: [] = tuples.filter((item: Tuples) =>
    item.area
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .includes(search.toLocaleLowerCase()),
  );

  // console.log(newTuplesSearch, "new");

  return {
    setSearch,
    search,
    refButton,
    resultSearcher,
  };
};
