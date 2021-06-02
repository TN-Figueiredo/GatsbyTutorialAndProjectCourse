import React from "react";
import Layout from "../components/layout";
import AllRecipes from "../components/AllRecipes";

const recipes = () => {
  return (
    <Layout>
      <main className="page">
        <AllRecipes />
      </main>
    </Layout>
  );
};

export default recipes;
