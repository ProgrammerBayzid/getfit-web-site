import BlogMobile from "./BlogMobile";
import BlogWeb from "./BlogWeb";

const BlogPage = () => {
  return (
    <div>
      <div className=" hidden lg:block">
        <BlogWeb />
      </div>
      <div className="block lg:hidden">
        <BlogMobile />
      </div>
    </div>
  );
};

export default BlogPage;
