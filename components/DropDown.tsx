import { useEffect, useState } from "react";
import { getCategories, getUnities } from "../services/index";
import ArrowDropdown from "../svg/ArrowDropdown";
import { useDropdownRenders } from "../hooks/useDropdownRenders";

interface Props {
  tup: [
    cantidad: number,
    unidad: string,
    clasificacion: string,
    item: string,
    nota: string,
  ];
  setTup: (pro: object) => object;
  handleChange: () => object;
}

export default function DropDown(props: Props) {
  const { tup, setTup } = props;
  const [unity, setUnity] = useState([]);
  const [category, setCategory] = useState([]);
  const [errorr, setError] = useState<Error | null>(null);

  const handleChange = (event: { target: HTMLInputElement }) => {
    const { name, value } = event.target;
    setTup({ ...tup, [name]: value });
  };

  useEffect(() => {
    fetch("/api/unidades")
      .then((response) => response.json())
      .then((data) => setUnity(data));

    // getUnities().then(([error, data]) => {
    //   if (error) return setError(error);
    //   setUnity(data);
    // });
    fetch("/api/categorias")
      .then((response) => response.json())
      .then((data) => setCategory(data));
    // getCategories().then(([error, data]) => {
    //   if (error) return setError(error);
    //   setCategory(data);
    // });
  }, []);

  const categories = category.map((cate) => (
    <option key={`categories-${cate.id}`}>{cate.name}</option>
  ));

  const unities = unity.map((unit) => (
    <option key={`unit-${unit.id}`}>{unit.name}</option>
  ));

  const { renameTables } = useDropdownRenders();
  return (
    <div>
      <div className="p-4 relative inline-flex">
        <ArrowDropdown />
        <select
          name="unidad"
          className="border border-gray-300 rounded-full cursor-pointer text-gray-500 h-10 pl-5 pr-10 bg-pantone468cream hover:border-gray-400 focus:outline-none appearance-none"
          onChange={handleChange}
          value={tup.unidad}
        >
          <option>Elige una opción</option>
          {unities}
        </select>
      </div>
      <div className="p-4 relative inline-flex">
        <ArrowDropdown />
        <select
          name="clasificacion"
          className="border border-gray-300 rounded-full cursor-pointer text-gray-500 h-10 pl-5 pr-10 bg-pantone468cream hover:border-gray-400 focus:outline-none appearance-none"
          onChange={handleChange}
          value={tup.clasificacion}
        >
          <option>Elige una opción</option>
          {categories}
        </select>
      </div>
      <div className="p-4 relative inline-flex">
        <ArrowDropdown />
        <select
          name="item"
          className="border border-gray-300 rounded-full cursor-pointer text-gray-500 h-10 pl-5 pr-10 bg-pantone468cream hover:border-gray-400 focus:outline-none appearance-none"
          onChange={handleChange}
          value={tup.item}
        >
          <option>Elige una opción</option>
          {renameTables[tup.clasificacion]}
        </select>
      </div>
    </div>
  );
}
