import BlogHeader from "../AllHeader/BlogHeader";

const BlogPageLayout = ({ children }) => {
  return (
    <div>
      <div className="hidden lg:block sticky top-[58px] z-20">
        <BlogHeader />
      </div>

      <div className="mt-[30px] mb-[100px]">
        <main> {children}</main>
      </div>
    </div>
  );
};

export default BlogPageLayout;
