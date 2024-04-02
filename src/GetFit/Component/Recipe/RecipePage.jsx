import RecipeMobile from "./RecipeMobile";
import RecipeWeb from "./RecipeWeb";

const RecipePage = () => {
  return (
    <div>
      <div className=" hidden lg:block">
        <RecipeWeb />
      </div>
      <div className="block lg:hidden">
        <RecipeMobile />
      </div>
    </div>
  );
};
export default RecipePage;
