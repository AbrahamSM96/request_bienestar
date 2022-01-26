import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Table from "../components/Table";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      {/* <div className="flex items-center justify-center  bg-gray-900">
        <h1 className="text-3xl text-gray-500">Hello world!</h1>
      </div> */}
      <Table />
    </>
  );
};

export default Home;
