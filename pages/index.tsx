import type { NextPage } from "next";
import Table from "../components/Table";
import { useTuples } from "../context/tuplesContext";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import Spinner from "../components/Spinner/Spinner";

const Home: NextPage = () => {
  const { tuples } = useTuples();
  return (
    <>
      <Layout>
        {tuples.length === 0 ? (
          <Spinner />
        ) : (
          <>
            <Table />
          </>
        )}
      </Layout>
    </>
  );
};

export default Home;
