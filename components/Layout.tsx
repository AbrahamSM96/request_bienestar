import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlinePlus } from "react-icons/ai";
import { useTuples } from "../context/tuplesContext";
import Bienestar from "../public/images/Bienestar.js";

interface Prop {
  children?: React.ReactChild | React.ReactChild[];
}

export default function Layout({ children }: Prop) {
  const router = useRouter();
  const { tuples } = useTuples();

  return (
    <div className="bg-morenaBold text-white">
      <header className="flex flex-col items-center sm:flex-row bg-morenaBold text-white px-28 py-5  border-solid border-gray-500 border-b-2 ">
        <Link href={`/`} passHref>
          <picture className="cursor-pointer pb-4 sm:pb-0 ">
            <Bienestar heigth={"29px"} width={"170px"} alt="bienestar" />
          </picture>
        </Link>
        <span className="sm:ml-2 ml-0 text-gray-400 font-bold text-xs pb-4 sm:p-0 ">
          No. de requisiciónes {tuples.length}
        </span>
        <div className="flex-grow text-right text-md pb-1 sm:pb-0">
          <button
            className="bg-pantone465cream text-sm px-1 py-1 sm:px-3 sm:py-2 hover:bg-pantone468cream font-bold rounded-sm inline-flex items-center"
            onClick={() => router.push("/addtuple")}
          >
            <AiOutlinePlus className="mr-1 sm:mr-2" />
            Agregar
          </button>
        </div>
      </header>
      <main className="md:px-12 xl:px-28 ">{children}</main>
    </div>
  );
}
