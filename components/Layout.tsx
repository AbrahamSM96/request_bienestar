import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlinePlus } from "react-icons/ai";
import { useTuples } from "../context/tuplesContext";
import Bienestar from "../public/images/Bienestar.js";
export default function Layout({ children }) {
  const router = useRouter();
  const { tuples } = useTuples();

  return (
    <div className="bg-morenaBold text-white">
      <header className=" flex flex-col items-center sm:flex-row bg-morenaBold text-white px-28 py-5  border-solid border-gray-500 border-b-2 ">
        <Link href={`/`} passHref>
          <picture className="cursor-pointer border-b-8 sm:border-b-0 border-solid border-transparent">
            <Bienestar heigth={"29px"} width={"170px"} alt="bienestar" />
          </picture>
        </Link>
        <span className="ml-2 text-gray-400 font-bold text-xs border-b-8 sm:border-b-0 border-solid border-transparent">
          No. de requisiciónes {tuples.length}
        </span>
        <div className="flex-grow text-right text-md border-b-8 sm:border-b-0 border-solid border-transparent">
          <button
            className="bg-pantone465cream text-sm px-3 py-2 hover:bg-pantone468cream font-bold rounded-sm inline-flex items-center"
            onClick={() => router.push("/addtuple")}
          >
            <AiOutlinePlus className="mr-2 " />
            Agregar
          </button>
        </div>
      </header>
      <main className="md:px-12 xl:px-28 ">{children}</main>
    </div>
  );
}
