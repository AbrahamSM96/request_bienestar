import type { NextPage } from "next";
import Table from "../components/Table";
import { useTuples } from "../context/tuplesContext";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  const { tuples } = useTuples();
  return (
    <>
      <Layout>
        {tuples.length === 0 ? (
          <h2>There are no request</h2>
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
