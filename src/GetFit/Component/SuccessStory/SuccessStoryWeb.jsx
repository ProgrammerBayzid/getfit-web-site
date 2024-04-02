const SuccessStoryWeb = () => {
  const blogs = [{}, {}, {}, {}, {}, {}, {}, {}];
  return (
    <div className="w-full flex justify-center ">
      <div>
        <div className="xl:w-[1366px] lg:w-[1280px] flex justify-center px-[45px]">
          <div>
            <div className="grid grid-cols-3 gap-[20px]">
              {blogs.map((blog, i) => {
                return (
                  <div key={i}>
                    <div className="w-[400px] h-[460px] border-[#101011] border-opacity-20 border-[0.5px] rounded-[9px] flex justify-center py-[17px]">
                      <div>
                        <div className="w-[370px]">
                          <img
                            className="w-[370px] h-[199px] rounded-[3px]"
                            src="https://getfit-image-file.s3.ap-southeast-1.amazonaws.com/1711270351906Frame%2012102%20%282%29.png"
                          />
                          <p className="font-noto font-medium text-[#101011] text-[22px] w-[350px] mt-[17px]">
                            তিশার ওজন কমানোর গল্প
                          </p>
                          <p className="font-noto font-normal text-[#101011] text-opacity-80 text-[16px]  mt-[6px]">
                            গেটফিটের পারসোনালাইজড অয়েট লস ডায়েট প্ল্যান আমার
                            জীবনে দারুণ পরিবর্তন এনেছে। মাত্র দুই মাসে আমি প্রায়
                            ৬ কেজি ওজন কমাতে সক্ষম হয়েছি। আমার অতিরিক্ত ওজন
                            কমানোর বিষয় নিয়ে আমি অনেকদিন ধরেই রিসার্চ করেছি।
                            একবার জিমেও ভর্তি হয়েছিলাম কিন্তু চাকুরী ও অন্যান্য
                            ব্যাস্ততার কারনে নিয়মিত যাওয়া হয়নি।
                          </p>
                          <div className="flex justify-between items-center">
                            <div>
                              <p className="font-noto font-normal text-[#101011] text-opacity-70 text-[14px] mt-[12px]">
                                18 January 2024
                              </p>
                            </div>
                            <div className="flex gap-x-[8px] items-center cursor-pointer">
                              <div>
                                <p className="font-noto font-normal text-[#004E9C] text-[14px] mt-[12px]">
                                  পড়ুন
                                </p>
                              </div>
                              <div>
                                <img
                                  src="https://getfit-image-file.s3.ap-southeast-1.amazonaws.com/1711267065158Group%20%281%29.png"
                                  className="w-[7px] h-[7px] mt-[10px] "
                                />
                              </div>
                            </div>
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
export default SuccessStoryWeb;
