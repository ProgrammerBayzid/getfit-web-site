import SuccessStoryMobile from "./SuccessStoryMobile";
import SuccessStoryWeb from "./SuccessStoryWeb";

const SuccessStoryPage = () => {
  return (
    <div>
      <div className=" hidden lg:block">
        <SuccessStoryWeb />
      </div>
      <div className="block lg:hidden">
        <SuccessStoryMobile />
      </div>
    </div>
  );
};
export default SuccessStoryPage;
