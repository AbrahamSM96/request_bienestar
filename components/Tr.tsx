import DropDown from "./DropDown";
import { VscTrash } from "react-icons/vsc";
import { AiOutlineEdit } from "react-icons/ai";
import { useRouter } from "next/router";
import { useTuples } from "../context/tuplesContext";
export default function Tr(props: any) {
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
        className="bg-gray-800 hover:bg-gray-700 cursor-pointer"
        onClick={() => handleClick(id_tuple)}
      >
        <td className="p-3">
          <span>{index}</span>
        </td>
        <td className="p-3">
          <div className="flex align-items-center">
            <div className="ml-3">
              {/* <div className="text-gray-500">mail@rgmail.com</div> */}
              <h2>{unities}</h2>
            </div>
          </div>
        </td>
        <td className="p-3">
          <p>{quantities}</p>
        </td>

        <td className="p-3 font-bold">
          <p>{classification}</p>
        </td>
        <td className="p-3">
          <p>{items}</p>
        </td>
        <td className="p-3 ">
          <p>{notes}</p>
        </td>
        <td className="p-3 ">
          <button
            className="bg-red-700 hover:bg-red-600 px-3 py-1 inline-flex items-center"
            onClick={(event) => {
              event.stopPropagation();
              deleteTuple(id_tuple);
            }}
          >
            Delete
            <VscTrash className="mr-2 " />
          </button>
        </td>
      </tr>
    </>
  );
}
