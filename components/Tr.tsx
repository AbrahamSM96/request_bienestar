import DropDown from "./DropDown";
import { VscTrash } from "react-icons/vsc";
import { AiOutlineEdit } from "react-icons/ai";
import { useRouter } from "next/router";
import { useTuples } from "../context/tuplesContext";

interface Prop {
  quantities: number;
  items: string;
  notes: string;
  classification: string;
  unities: string;
  index: string;
  id_tuple: string;
}

export default function Tr(props: Prop) {
  const { quantities, items, notes, classification, unities, index, id_tuple } =
    props;
  const { push } = useRouter();
  const { deleteTuple } = useTuples();

  const handleClick = (id_tuple: String) => {
    push(`/edit/${id_tuple}`);
  };
  return (
    <>
      <tr
        className="bg-morenaLigth hover:bg-pantone626green cursor-pointer "
        onClick={() => handleClick(id_tuple)}
      >
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          <span>{index}</span>
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          <div className="flex align-items-center">
            <div className="ml-3">
              {/* <div className="text-gray-500">mail@rgmail.com</div> */}
              <h2>{unities}</h2>
            </div>
          </div>
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          <p>{quantities}</p>
        </td>

        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          <p>{classification}</p>
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          <p>{items}</p>
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
          <p>{notes}</p>
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
          <button
            className=" hover:bg-red-600 px-3 py-1 inline-flex items-center text-white"
            onClick={(event) => {
              event.stopPropagation();
              deleteTuple(id_tuple);
            }}
          >
            Eliminar
            <VscTrash className="ml-2" />
          </button>
        </td>
      </tr>
    </>
  );
}
