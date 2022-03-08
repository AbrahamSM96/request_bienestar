import { useEffect, useState, Dispatch, SetStateAction } from "react";
import { getCategories, getUnities } from "../services/index";
import ArrowDropdown from "../svg/ArrowDropdown";
import { useDropdownRenders } from "../hooks/useDropdownRenders";

interface Props {
  tup: {
    area: string;
    cantidad: number;
    clasificacion: string;
    item: string;
    nota: string;
    unidad: string;
  };
  setTup: React.Dispatch<React.SetStateAction<object>>;
  handleChange: () => void;
}

export default function DropDown(props: Props) {
  const { tup, setTup } = props;
  const [unity, setUnity] = useState([]);
  const [category, setCategory] = useState([]);
  const [area, setArea] = useState([]);
  const [errorr, setError] = useState<Error | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
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
    fetch("/api/areas")
      .then((response) => response.json())
      .then((data) => setArea(data));
  }, []);

  interface propsDrop {
    id: string;
    name: string;
  }

  const categories = category.map((cate: propsDrop) => (
    <option key={`categories-${cate.id}`}>{cate.name}</option>
  ));

  const unities = unity.map((unit: propsDrop) => (
    <option key={`unit-${unit.id}`}>{unit.name}</option>
  ));

  const areas = area.map((ar: propsDrop) => (
    <option key={`area-${ar.id}`}>{ar.name}</option>
  ));

  type tplotOptions = {
    [key: string]: any;
  };
  const { renameTables }: tplotOptions = useDropdownRenders();
  return (
    <>
      <div className="p-4">
        <select
          name="area"
          className="w-64 lg:w-auto border border-gray-300 rounded-full cursor-pointer text-gray-500 h-10 pl-5 pr-10 bg-pantone468cream hover:border-gray-400 focus:outline-none appearance-none"
          onChange={(event) => handleChange(event)}
          value={tup.area}
        >
          <option>¿Área del requerimiento?</option>

          {areas}
        </select>
      </div>
      <div className="p-4 relative inline-flex">
        <ArrowDropdown />
        <select
          name="unidad"
          className="border border-gray-300 rounded-full cursor-pointer text-gray-500 h-10 pl-5 pr-10 bg-pantone468cream hover:border-gray-400 focus:outline-none appearance-none"
          onChange={handleChange}
          value={tup.unidad}
        >
          <option>¿Cuántas unidades?</option>
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
          <option>¿Clasificación?</option>
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
    </>
  );
}
