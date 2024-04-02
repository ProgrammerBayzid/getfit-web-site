import { Link, useLocation } from "@reach/router";
import { QuillDeltaToHtmlConverter } from "quill-delta-to-html";
import { useState } from "react";
import { useEffect } from "react";
import ReactHtmlParser from "react-html-parser";

const BlogDetails = () => {
  const location = useLocation();
  const { pathname } = location;
  const match = pathname.match(/\/([0-9a-fA-F]+)$/);
  const dynamicId = match ? match[1] : null;
  console.log(dynamicId);

  // get all blog

  const [blogs, setBlogs] = useState();
  const [sortOrder, setSortOrder] = useState("desc");
  const [sortBy, setSortBy] = useState("createdAt");
  const [limit, setLimit] = useState(1000);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [planId, setPlanId] = useState("");
  const [category, setCategory] = useState("");
  const [render, setRender] = useState(false);
  const [search, setSearch] = useState("");

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

      const blogList = await response.json();
      console.log(blogList);
      setBlogs(blogList);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching user profile:", error);
    }
  };

  useEffect(() => {
    getBlog();
  }, [render, sortOrder, sortBy, limit, page, planId, category]);

  // get single blog

  const [value, setSingleBlog] = useState();
  const [singleBlogloading, setSingleBlogLoading] = useState(true);
  const getSingleBlog = async () => {
    try {
      let url = `https://api.getfit.com.bd/blog/${dynamicId}`;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const singleBlog = await response.json();
      console.log(singleBlog);
      setSingleBlog(singleBlog);
      setSingleBlogLoading(false);
    } catch (error) {
      console.error("Error fetching user profile:", error);
    }
  };

  useEffect(() => {
    getSingleBlog();
  }, [dynamicId]);
  console.log(value);

  const [htmlContent, setHtmlContent] = useState("");

  useEffect(() => {
    if (value?.details !== undefined) {
      const jsonData = value?.details;
      const parsedData = JSON.parse(jsonData);
      const htmlContent = parsedData.map((item) => item.insert).join("");
      setHtmlContent(htmlContent);
    }
  }, [value?.details]);

  const date = new Date(value?.updatedAt);
  const day = date.getDate();
  const month = date.toLocaleDateString("en-US", {
    month: "short",
  });
  const year = date.getFullYear();
  const formattedDate = `${day} ${month} ${year}`;

  // social media shear

  const crrountPageLocation = window.location.href;

  const handleFacebookShare = (url) => {
    const shareUrl = url; // Replace with your URL
    const shareTitle = "Check out this awesome content!"; // Replace with your title
    const hashtags = "#GetfitPersonalizedNutritionService"; // Replace with your desired hashtags, separated by commas
    console.log(url);
    // Encode the URL, title, and hashtags
    const encodedUrl = encodeURIComponent(shareUrl);
    const encodedTitle = encodeURIComponent(shareTitle);
    const encodedHashtags = encodeURIComponent(hashtags);

    // Construct the Facebook share URL with title and hashtags
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&title=${encodedTitle}&hashtag=${encodedHashtags}`;

    // Open the Facebook share URL in a new tab/window
    window.open(facebookShareUrl, "_blank");
  };
  const handleTwiterShare = (url) => {
    const shareUrl = url; // Replace with your URL
    const shareTitle = "Check out this awesome content!"; // Replace with your title
    const hashtags = "#GetfitPersonalizedNutritionService"; // Replace with your desired hashtags, separated by commas
    console.log(url);
    // Encode the URL, title, and hashtags
    const encodedUrl = encodeURIComponent(shareUrl);
    const encodedTitle = encodeURIComponent(shareTitle);
    const encodedHashtags = encodeURIComponent(hashtags);

    // Construct the Facebook share URL with title and hashtags
    const facebookShareUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&title=${encodedTitle}&hashtag=${encodedHashtags}`;

    // Open the Facebook share URL in a new tab/window
    window.open(facebookShareUrl, "_blank");
  };

  const handleLinkedInShare = (url) => {
    const shareUrl = url; // Replace with your URL
    const shareTitle = "Check out this awesome content!"; // Replace with your title
    const hashtags = "#GetfitPersonalizedNutritionService"; // Replace with your desired hashtags, separated by commas
    console.log(shareUrl);
    // Encode the URL, title, and hashtags GetfitPersonalizedNutritionService
    const encodedUrl = encodeURIComponent(shareUrl);
    const encodedTitle = encodeURIComponent(shareTitle);
    const encodedHashtags = encodeURIComponent(hashtags);

    // Construct the LinkedIn share URL with hashtags
    const linkedInShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}&title=${encodedTitle}&summary_hashtags=${encodedHashtags}`;

    // Open the LinkedIn share URL in a new tab/window
    window.open(linkedInShareUrl, "_blank");
  };

  const handleInstagramShare = (url) => {
    const shareUrl = url; // Replace with your URL
    const shareTitle = "Check out this awesome content!"; // Replace with your title
    const hashtags = "#GetfitPersonalizedNutritionService"; // Replace with your desired hashtags, separated by commas

    // Encode the URL, title, and hashtags
    const encodedUrl = encodeURIComponent(shareUrl);
    const encodedTitle = encodeURIComponent(shareTitle);
    const encodedHashtags = encodeURIComponent(hashtags);

    // Construct the Instagram share URL with title and hashtags
    const instagramShareUrl = `https://www.instagram.com/share?url=${encodedUrl}&title=${encodedTitle}&hashtags=${encodedHashtags}`;

    // Open the Instagram share URL in a new tab/window
    window.open(instagramShareUrl, "_blank");
  };

  const handleWhatsAppShare = (url) => {
    const shareUrl = url; // Replace with your URL
    const shareTitle = "Check out this awesome content!"; // Replace with your title

    // Encode the URL and title
    const encodedUrl = encodeURIComponent(shareUrl);
    const encodedTitle = encodeURIComponent(shareTitle);

    // Construct the WhatsApp share URL with title
    const whatsAppShareUrl = `https://api.whatsapp.com/send?text=${encodedTitle} - ${encodedUrl}`;

    // Open the WhatsApp share URL in a new tab/window
    window.open(whatsAppShareUrl, "_blank");
  };

  if (singleBlogloading === true) {
    return <h1>loading</h1>;
  }

  return (
    <div className="w-full flex justify-center ">
      <div>
        <div className="h-[45px] bg-[#FFEDED] px-[45px] xl:w-[1366px] lg:w-[1280px] flex items-center ">
          <div className="flex items-center gap-x-[5px]">
            <p className="font-noto font-normal text-[16px] text-[#101011]">
              হোম
            </p>
            <img
              src="https://getfit-image-file.s3.ap-southeast-1.amazonaws.com/1711474906832Group%20%281%29.png"
              className="w-[6px] h-[6px]"
            />
            <p className="font-noto font-normal text-[16px] text-[#101011]">
              {value?.category}
            </p>
            <img
              src="https://getfit-image-file.s3.ap-southeast-1.amazonaws.com/1711474906832Group%20%281%29.png"
              className="w-[6px] h-[6px]"
            />
            <p className="font-noto font-normal text-[16px] text-[#101011]">
              {value?.plan?.title_bn}
            </p>
            <img
              src="https://getfit-image-file.s3.ap-southeast-1.amazonaws.com/1711474906832Group%20%281%29.png"
              className="w-[6px] h-[6px]"
            />
            <p className="font-noto font-normal text-[16px] text-[#101011]">
              {value?.title}
            </p>
          </div>
        </div>
        <div className="xl:w-[1366px] lg:w-[1280px] flex justify-center px-[45px] mb-[50px]">
          <div>
            <div className="flex gap-x-[70px]">
              <div className="w-[825px]">
                <div>
                  <p className="font-noto font-medium text-[#101011] text-[30px] mt-[17px]">
                    {value?.title}
                  </p>
                  <div className="flex gap-x-[7px] items-center">
                    <p className="font-inter font-normal text-[#101011] text-opacity-70 text-[14px] ">
                      Update on {formattedDate}
                    </p>
                    <img
                      className="h-[12px]"
                      src="https://getfit-image-file.s3.ap-southeast-1.amazonaws.com/1711474434099Line%2056.png"
                    />
                    <p className="font-inter font-normal text-[#101011] text-opacity-70 text-[14px] ">
                      By: {value?.authorName}
                    </p>
                    <img
                      className="h-[12px]"
                      src="https://getfit-image-file.s3.ap-southeast-1.amazonaws.com/1711474434099Line%2056.png"
                    />
                    <p className="font-inter font-normal text-[#101011] text-opacity-70 text-[14px] ">
                      Reviewed By: {value?.doctorId?.name_en}
                    </p>
                  </div>
                  <div>
                    <img
                      className="w-[671px] h-[361px] rounded-[3px] mt-[15px]"
                      src={value?.image}
                    />
                  </div>
                  <div className="flex gap-x-[13px] mt-[20px] mb-[30px]">
                    <img
                      onClick={() => handleFacebookShare(crrountPageLocation)}
                      src="https://getfit-image-file.s3.ap-southeast-1.amazonaws.com/1711518774575Facebook.png"
                      className="w-[29px] h-[29px] rounded-full cursor-pointer"
                    />
                    <img
                      onClick={() => handleWhatsAppShare(crrountPageLocation)}
                      src="https://getfit-image-file.s3.ap-southeast-1.amazonaws.com/1711518924304Group%20%282%29.png"
                      className="w-[29px] h-[29px] rounded-full cursor-pointer"
                    />
                    <img
                      onClick={() => handleInstagramShare(crrountPageLocation)}
                      src="https://getfit-image-file.s3.ap-southeast-1.amazonaws.com/1711518979754Group%20%283%29.png"
                      className="w-[29px] h-[29px] rounded-full cursor-pointer"
                    />
                    <img
                      onClick={() => handleLinkedInShare(crrountPageLocation)}
                      src="https://getfit-image-file.s3.ap-southeast-1.amazonaws.com/1711519041822LinkedIn.png"
                      className="w-[29px] h-[29px] rounded-full cursor-pointer"
                    />
                    <img
                      onClick={() => handleTwiterShare(crrountPageLocation)}
                      src="https://getfit-image-file.s3.ap-southeast-1.amazonaws.com/1711519096811Group%20%284%29.png"
                      className="w-[29px] h-[29px] rounded-full cursor-pointer"
                    />
                  </div>
                  <div className="mt-[7px]">{ReactHtmlParser(htmlContent)}</div>
                </div>
              </div>
              <div className="w-[373px]">
                <div className="mt-[24px]">
                  <div className="mb-[30px]">
                    <input
                      onChange={(e) => setSearch(e.target.value)}
                      type="text"
                      placeholder="সার্চ করুন......"
                      className="focus:outline-none xl:w-[373px] lg:w-[365px]  h-[45px] bg-[#F6F6F6] pl-5 rounded rounded-[5px]	placeholder:text-[14px] placeholder:font-normal placeholder:font-noto "
                    />
                  </div>
                  <div className="xl:w-[373px] lg:w-[365px]  pb-24   bg-[#F6F6F6] p-5 rounded rounded-[5px]">
                    <div>
                      <div className="border-b-[3px] w-[100px]  border-[#C61E72] ">
                        <p className="text-[16px] font-normal pb-[10px] font-noto whitespace-nowrap">
                          সাম্প্রতিক পোস্ট সমূহ
                        </p>
                      </div>

                      <div className="w-[333px] h-[0.5px] bg-[#C61E72] bg-opacity-70"></div>
                    </div>

                    {blogs?.length > 0 &&
                      blogs
                        .filter((re) => {
                          return search.toLocaleLowerCase() === ""
                            ? re
                            : re.title.toLocaleLowerCase().includes(search);
                        })
                        .map((re) => {
                          const { updatedAt } = re;
                          const date = new Date(updatedAt);
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
                            <div key={re._id} className="mt-[18px] flex gap-4">
                              <div className="">
                                <img
                                  src={re.image}
                                  className="object-cover w-[93px] h-[49px] rounded"
                                />
                              </div>
                              <div className="w-50%">
                                <Link to={`/blog/details/${re?._id}`}>
                                  <h1
                                    // onClick={() => handleReadMoreClick(re)}
                                    className="text-[13px] font-normal text-[#101011] cursor-pointer"
                                  >
                                    {re.title}
                                  </h1>
                                </Link>
                                <div className="flex gap-[6px] items-center">
                                  <img
                                    className="w-[9px] h-[8px]"
                                    src="https://getfit-image-file.s3.ap-southeast-1.amazonaws.com/1711475633763Group%2014929.png"
                                    alt="bringin image"
                                  />
                                  <p className="text-[10px] font-noto font-normal text-[#212427] mt-[5px]">
                                    {formattedDate}
                                  </p>
                                </div>{" "}
                              </div>
                            </div>
                          );
                        })}
                  </div>
                </div>
                <div className="mt-[25px]">
                  <img
                    className="w-[373px] h-[411px]"
                    src="https://getfit-image-file.s3.ap-southeast-1.amazonaws.com/1711476982232Ad.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogDetails;
