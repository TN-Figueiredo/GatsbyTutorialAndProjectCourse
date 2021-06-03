import React from "react";
import Layout from "../components/layout";
import AllRecipes from "../components/AllRecipes";
import SEO from "../components/SEO";

const recipes = () => {
  return (
    <Layout>
      <SEO title="Recipes" />
      <main className="page">
        <AllRecipes />
      </main>
    </Layout>
  );
};

export default recipes;
