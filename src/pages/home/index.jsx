import React, { useContext } from "react";
import { GlobleContext } from "../../context";
import RecipeItem from "../../components/recipe-item";

const Home = () => {
  const { recipeList, loading } = useContext(GlobleContext);

  if (loading) return <div>Loading...Please wait!</div>;

  return (
    <div  className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {recipeList && recipeList.length > 0 ? (
        recipeList.map((item) => <RecipeItem key={item.id} item={item} />)
      ) : (
        <div>
          <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
            Nothing to show. Please search somthing
          </p>
        </div>
      )}
    </div>
  );
};

export default Home;