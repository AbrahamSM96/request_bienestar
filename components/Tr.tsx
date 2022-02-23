import DropDown from "./DropDown";
import { VscTrash } from "react-icons/vsc";
import { AiOutlineEdit } from "react-icons/ai";
import { useRouter } from "next/router";
import { useTuples } from "../context/tuplesContext";

interface Prop {
  unidad: number;
  item: string;
  area: string;
  nota: string;
  clasificacion: string;
  cantidad: number;
  index: string;
  id: string;
  created_at: string;
}

export default function Tr(props: Prop) {
  const { unidad, item, nota, clasificacion, cantidad, id, created_at, area } =
    props;
  const parseDate = new Date(created_at).toLocaleDateString("es", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  });

  const { push } = useRouter();
  const { deleteTuple } = useTuples();

  const handleClick = (id: String) => {
    push(`/edit/${id}`);
  };
  return (
    <>
      <tr
        className="bg-morenaLigth hover:bg-pantone626green cursor-pointer "
        onClick={() => handleClick(id)}
      >
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          <span>{parseDate}</span>
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          <div className="flex align-item-center">
            <div className="ml-3">
              {/* <div className="text-gray-500">mail@rgmail.com</div> */}
              <h2>{cantidad}</h2>
            </div>
          </div>
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          <p>{unidad}</p>
        </td>

        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          <p>{clasificacion}</p>
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          <p>{item}</p>
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
          <p>{nota}</p>
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
          <p>{area}</p>
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
          <button
            className="px-3 py-1 inline-flex item-center"
            onClick={(event) => {
              event.stopPropagation();
              deleteTuple(id);
            }}
          >
            <VscTrash size={"18px"} className="text-white hover:text-red-600" />
          </button>
        </td>
      </tr>
    </>
  );
}
