import { useSearch } from "../hooks/useSearch";
import Tbody from "./Tbody";
import Thead from "./Thead";

export default function Table() {
  const { refButton, search, setSearch, resultSearcher } = useSearch();

  const handleClick = (event) => {
    event.preventDefault();
    const transSearch = refButton.current.value.toLowerCase().trim();
    setSearch(transSearch);
  };

  return (
    <div className="h-auto">
      <div className="flex flex-col items-center bg-morenaBold">
        <div className="items-center text-center text-gray-200 my-6">
          <h1 className="text-3xl ">Delegación Hidalgo</h1>
          <h1 className="text-3xl ">Subdelegación de Administración</h1>
          <h1 className="text-3xl ">Tabla de adquicisiones</h1>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="mb-3 xl:w-96">
          <div className="input-group relative flex items-stretch w-full mb-4">
            <input
              type="search"
              className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon2"
              onChange={handleClick}
              ref={refButton}
            />
            <button
              className="btn inline-block px-6 py-2.5 bg-pantone465cream text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-pantone468cream hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center"
              type="submit"
              id="button-addon2"
              aria-valuetext="hola"
              onClick={handleClick}
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="search"
                className="w-4"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className=" w-full xl:w-12/12 xl:mb-0 px-4 mx-auto">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded">
          <div className="block w-full overflow-x-auto">
            <table className="w-full flex-row flex-no-wrap overflow-hidden sm:shadow-lg table text-gray-400 border-separate space-y-6 text-sm">
              <Thead />
              <Tbody resultSearcher={resultSearcher} />
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
