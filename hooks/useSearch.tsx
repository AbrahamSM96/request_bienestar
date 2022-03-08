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
  // let reg = new RegExp(search);
  // const newTuplesSearch = tuples.filter((element) => {
  //   console.log(element, 'ELEMENT')
  //   console.log(element.area.toLowerCase().trim().match(reg))
  //   return element.area.match(reg)
  // });
  const resultSearcher = tuples.filter((item: Tuples) =>
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
