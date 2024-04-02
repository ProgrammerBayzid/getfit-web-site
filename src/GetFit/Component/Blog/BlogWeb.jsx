import { Link, navigate } from "@reach/router";
import axios from "axios";
import { useEffect, useState } from "react";

const BlogWeb = () => {
  const [blogs, setBlogs] = useState();
  const [sortOrder, setSortOrder] = useState("desc");
  const [sortBy, setSortBy] = useState("createdAt");
  const [limit, setLimit] = useState(1000);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [planId, setPlanId] = useState("");
  const [category, setCategory] = useState("ব্লগ");
  const [render, setRender] = useState(false);
  console.log(blogs);
  const getBlog = async () => {
    try {
      let url = "https://api.getfit.com.bd/blog?";
      // Constructing the URL with query parameters based on state variables
      url += `sortBy=${sortBy}&`;
      url += `sortOrder=${sortOrder}&`;
      url += `page=${page}&`;
      url += `limit=${limit}`;

      // Add other query parameters conditionally based on state variables
      if (planId !== "") url += `&planId=${planId}`;
      if (category !== "") url += `&category=${category}`;
      // if (type !== "") url += `&type=${type}`;
      // if (planId !== "") url += `&planId=${planId}`;
      // if (packageId !== "") url += `&packageId=${packageId}`;
      // if (userId !== "") url += `&userId=${userId}`;
      // if (doctorId !== "") url += `&doctorId=${doctorId}`;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const doctorList = await response.json();
      setBlogs(doctorList);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching user profile:", error);
    }
  };

  useEffect(() => {
    getBlog();
  }, [render, sortOrder, sortBy, limit, page, planId, category]);
  return (
    <div className="w-full flex justify-center ">
      <div>
        <div className="xl:w-[1366px] lg:w-[1280px] flex justify-center px-[45px]">
          <div>
            <div className="grid grid-cols-3 gap-[20px]">
              {blogs?.length > 0 &&
                blogs?.map((blog, i) => {
                  const date = new Date(blog?.createdAt);
                  const day = date.getDate();
                  const month = date.toLocaleDateString("en-US", {
                    month: "short",
                  });
                  const year = date.getFullYear();
                  const formattedDate = `${day} ${month} ${year}`;
                  const handleReadMoreClick = (value) => {
                    navigate(`/blog/details/${value?._id}`, {
                      state: { value },
                    });
                  };
                  return (
                    <div key={i}>
                      <div className="w-[400px] h-[349px] border-[#101011] border-opacity-20 border-[0.5px] rounded-[9px] flex justify-center py-[17px]">
                        <div>
                          <div className="w-[370px]">
                            <img
                              className="w-[370px] h-[199px] rounded-[3px]"
                              src={blog?.image}
                            />
                            <p className="font-noto font-medium text-[#101011] text-[22px] w-[350px] mt-[17px]">
                              {blog?.title}
                            </p>
                            <div className="flex justify-between items-center">
                              <div>
                                <p className="font-noto font-normal text-[#101011] text-opacity-70 text-[14px] mt-[12px]">
                                  {formattedDate}
                                </p>
                              </div>
                              <Link to={`/blog/details/${blog?._id}`}>
                                <div
                                  // onClick={() => handleReadMoreClick(blog)}
                                  className="flex gap-x-[8px] items-center cursor-pointer"
                                >
                                  <div>
                                    {/* <Link
                                    to={{
                                      pathname: `/blog/details/${blog?._id}`,
                                      state: { blog },
                                    }}
                                  > */}
                                    <p className="font-noto font-normal text-[#004E9C] text-[14px] mt-[12px]">
                                      পড়ুন
                                    </p>
                                    {/* </Link> */}
                                  </div>
                                  <div>
                                    <img
                                      src="https://getfit-image-file.s3.ap-southeast-1.amazonaws.com/1711267065158Group%20%281%29.png"
                                      className="w-[7px] h-[7px] mt-[10px] "
                                    />
                                  </div>
                                </div>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogWeb;
