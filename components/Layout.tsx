import Link from "next/link";
import { useRouter } from "next/router";
import { ReactChildren } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { useTuples } from "../context/tuplesContext";
export default function Layout({ children }) {
  const router = useRouter();
  const { tuples } = useTuples();

  return (
    <div className="h-screen bg-gray-900 text-white">
      <header className=" flex items-center bg-gray-800 text-white px-28 py-5 ">
        <Link href={`/`} passHref>
          <h1 className="font-black text-lg cursor-pointer">
            Request Bienestar
          </h1>
        </Link>
        <span className="ml-2 text-gray-400 font-bold"> {tuples.length} </span>
        <div className="flex-grow text-right">
          <button
            className="bg-green-500 px-3 py-2 hover:bg-emerald-300 font-bold rounded-sm inline-flex items-center"
            onClick={() => router.push("/addtuple")}
          >
            <AiOutlinePlus className="mr-2" />
            Add request
          </button>
        </div>
      </header>
      <main className="px-28 ">{children}</main>
    </div>
  );
}
