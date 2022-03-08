import type { NextPage } from "next";
import Table from "../components/Table";
import { useTuples } from "../context/tuplesContext";
import Layout from "../components/Layout";
import Spinner from "../components/Spinner/Spinner";

const Home: NextPage = () => {
  const { load } = useTuples();
  return (
    <>
      <Layout>
        {load ? (
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
