import { useState, useEffect, useRef } from "react";
import { useTuples } from "../context/tuplesContext";

export const useSearch = () => {
  const { tuples = [{}] } = useTuples();
  const refButton = useRef(null);
  const [search, setSearch] = useState("");
  // let reg = new RegExp(search);
  // const newTuplesSearch = tuples.filter((element) => {
  //   console.log(element, 'ELEMENT')
  //   console.log(element.area.toLowerCase().trim().match(reg))
  //   return element.area.match(reg)
  // });
  const resultSearcher = tuples.filter((item) =>
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
