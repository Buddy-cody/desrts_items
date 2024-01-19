import React, { useContext } from "react";
import RecipeItem from "../../components/recipe-item";
import { GlobleContext } from "../../context";

const Favorites = () => {
  const { favoritesList } = useContext(GlobleContext);

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {favoritesList && favoritesList.length > 0 ? (
        favoritesList.map((item) => <RecipeItem key={item.id} item={item} />)
      ) : (
        <div>
          <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
            Nothing is Added in favorites
          </p>
        </div>
      )}
    </div>
  );
};

export default Favorites;
