import React from "react";
import { useToggleLanguage } from "../../Context/useToggleLanguage";

const TermsAndConditionsWeb = () => {
  const { isToggledLanguage } = useToggleLanguage();

  return (
    <div className="w-full pb-[300px] flex justify-center">
      <div className="xl:w-[1366px] lg:w-[1280px]  flex justify-center ">
        {isToggledLanguage === true ? (
          <div>
            <div className="w-full flex justify-center mt-[40px] mb-[20px]">
              <h1 className="text-[#1BF5B] font-bold font-noto text-[34px]">
                শর্তাবলী
              </h1>
            </div>
            <div className="px-[100px]">
              <div className="my-[10px]">
                <div>
                  <p className="text-[#101011] text-opacity-90 font-normal font-noto text-[18px]">
                    অনুগ্রহ করে এই শর্তাবলী গুলো সাবধানে পড়ুন। এই
                    অ্যাপ্লিকেশানটির অ্যাক্সেস এবং ব্যবহার চালিয়ে যাওয়ার
                    মাধ্যমে আপনি নিশ্চিত করছেন যে আপনি এখানে বর্ণিত আমাদের
                    শর্তাবলী স্বীকার করছেন৷
                  </p>
                  <p className="text-[#101011] text-opacity-90 font-normal font-noto text-[18px]">
                    আপনি ব্যবহারের শর্তাবলীতে সম্মত না হলে, এই অ্যাপ্লিকেশনটি
                    ব্যবহার করবেন না।
                  </p>
                  <p className="text-[#101011] text-opacity-90 font-normal font-noto text-[18px]">
                    চুক্তিটি আপনার সাথে যোগাযোগ করা সমস্ত পূর্ববর্তী মৌখিক এবং
                    লিখিত শর্তাবলী (যদি থাকে) বাতিল করে।
                  </p>
                  <p className="text-[#101011] text-opacity-90 font-normal font-noto text-[18px] mt-[18px]">
                    গেটফিট স্বাস্থ্য সেবায় স্বাগতম। এই সার্ভিস এবং অ্যাপটি
                    Bringin Technologies Limited দ্বারা পরিচালিত হয়, যার
                    নিবন্ধিত অফিস রয়েছে (ঠিকানা:ফ্ল্যাট 2B, বাড়ি 254, রোড 09,
                    ব্লক সি, বসুন্ধরা R/A, ঢাকা)।
                  </p>
                </div>
              </div>
              <div className="mt-[20px]">
                <h2 className="text-[#101011] font-bold font-noto text-[18px]">
                  আমাদের সার্ভিস
                </h2>

                <div className="ml-[10px]">
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[6.5px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-noto text-[18px]">
                      গেটফিট যোগ্য এবং অভিজ্ঞ নিউট্রিশনিস্টদের মাধ্যমে
                      বাংলাদেশের মানুষদের জন্য পুষ্টি ও স্বাস্থ্যসেবা প্রদান
                      করে। তবে এটা মনে রাখবেন আমাদের অ্যাপ কোন জরুরি বা শারীরিক
                      রোগের চিকিৎসা সেবা প্রদান করে না। নিবন্ধিত নিউট্রিশনিস্টরা
                      শুধুমাত্র ডায়েট প্ল্যান এবং খাদ্যাভ্যাস পরিবর্তনের মাধ্যমে
                      জীবন দ্বারা উন্নত করার ব্যাপারে পরামর্শ প্রদান করে।
                    </p>
                  </div>
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[6.5px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-noto text-[18px]">
                      ব্যবহারকারীরা আমাদের অ্যাপ থেকে ওজন কমানো, ওজন বাড়ানো,
                      থাইরয়েড এবং ডায়াবেটিস, পিসিওএস/পিসিওডি, শিশুর পুষ্টি বা
                      গর্ভবতী মায়ের ডায়েট, লিভারের রোগ, কিডনির রোগ এবং উচ্চ
                      রক্তচাপের জন্য ব্যক্তিগত ডায়েট প্ল্যান নিতে পারবেন। এই
                      প্ল্যানগুলি ব্যবহারকারীর দেওয়া তথ্যের উপর ভিত্তি করে তৈরি
                      করা হয় এবং এর ফলাফল ব্যক্তিভেদে পরিবর্তিত হতে পারে। একজন
                      নিবন্ধিত নিউট্রিশনিস্টের তত্ত্বাবধানে এই প্ল্যান পরিচালনা
                      করা হয়।
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-[20px]">
                <h2 className="text-[#101011] font-bold font-noto text-[18px]">
                  শর্তাবলী গ্রহণ
                </h2>

                <div className="ml-[10px]">
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[6.5px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-noto text-[18px]">
                      আপনি যখন আমাদের সার্ভিসটি ব্যবহার করার সময় বাংলাদেশের সকল
                      আইন এবং বিধান মানতে সম্মত হন।
                    </p>
                  </div>
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[6.5px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-noto text-[18px]">
                      এই প্লাটফর্ম ব্যবহার করার মধ্য দিয়ে একজন দক্ষ
                      নিউট্রিশনিস্টের সাথে যোগাযোগ করতে পারে। কোন ব্যবহারকারী
                      এটিকে বাণিজ্যিক উদ্দেশ্যে ব্যবহার করতে পারবে না।
                    </p>
                  </div>
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[6.5px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-noto text-[18px]">
                      কনসাল্টেশনের পর ডায়েট চার্ট বা অন্য যে কোন উপদেশের জন্য
                      নিউট্রিশনিস্ট সম্পূর্ণভাবে দায়ী এবং দায়বদ্ধ। গেটফিট এর
                      কোন দায়ভার বহন করে না।
                    </p>
                  </div>
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[6.5px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-noto text-[18px]">
                      কোন ব্যবহারকারী যদি প্ল্যাটফর্মের বাইরে কোন মাধ্যমে
                      নিউট্রিশনিস্টদের থেকে কনসাল্টেশন নেয় বা ক্ষতিগ্রস্ত হয়
                      তার জন্য গেটফিট দায়ী থাকবে না। নিউট্রিশনিস্টদের সাথে সকল
                      প্রকার যোগাযোগের জন্য গেটফিটকেই মাধ্যম হিসেবে ব্যবহার করার
                      জন্য উৎসাহিত করা হয়।
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-[20px]">
                <h2 className="text-[#101011] font-bold font-noto text-[18px]">
                  ইউজার একাউন্ট
                </h2>

                <div className="ml-[10px]">
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[6.5px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-noto text-[18px]">
                      আমাদের প্ল্যাটফর্মটি ব্যবহার করতে আপনার বয়স কমপক্ষে ১৮
                      বছর বা তার বেশি হতে হবে, একটি সুস্থ মন থাকতে হবে এবং
                      প্রাথমিক ব্যবহারকারী হিসাবে সেবাগুলি ব্যবহার করার জন্য
                      কোনও আইন দ্বারা চুক্তিতে বাধা দেওয়া হবে না। যদি
                      ব্যবহারকারী একটি অপ্রাপ্তবয়স্ক (অর্থাৎ ১৮ বছরের কম বয়সী
                      ব্যক্তি) হয়, তবে কেবলমাত্র সেই ব্যক্তির আইনি
                      অভিভাবক/প্রতিনিধি নিজেকে প্রাথমিক ব্যবহারকারী হিসাবে
                      নিবন্ধন করতে হবে এবং সেকেন্ডারি ইউজার হিসেবে নাবালকের
                      প্রোফাইল তৈরি/সংযোজন করতে হবে।
                    </p>
                  </div>
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[6.5px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-noto text-[18px]">
                      সমস্ত সেবা শুধুমাত্র প্রাথমিক ব্যবহারকারীর জন্য প্রদান করা
                      হবে। একজন সেকেন্ডারি ব্যবহারকারী শুধুমাত্র একজন
                      সেবাগ্রহীতা হিসেবে প্রাথমিক ব্যবহারকারীর মাধ্যমে সেবা পেতে
                      পারেন। প্রাথমিক ব্যবহারকারী অ্যাপ্লিকেশনটিতে সেকেন্ডারি
                      ব্যবহারকারীর কার্যকলাপের জন্য সম্পূর্ণরূপে দায়ী এবং
                      দায়বদ্ধ হবেন।
                    </p>
                  </div>
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[6.5px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-noto text-[18px]">
                      আপনি কোনো বেআইনি, অনৈতিক, আপত্তিকর উদ্দেশ্যে বা অন্য কোনো
                      উদ্দেশ্যে যা প্রযোজ্য আইন ও বিধান লঙ্ঘন করতে পারে সেই জন্য
                      প্ল্যাটফর্মটি ব্যবহার করবেন না।
                    </p>
                  </div>
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[6.5px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-noto text-[18px]">
                      আপনি আপনার ইউজার একাউন্ট ইনফরমেশন কারো সাথে শেয়ার করবেন
                      না। আপনার অ্যাকাউন্টের তথ্য এবং পাসওয়ার্ডের গোপনীয়তা
                      বজায় রাখার জন্য আপনি দায়ী৷ আপনি আপনার অ্যাকাউন্ট এবং
                      পাসওয়ার্ডের সমস্ত ব্যবহারের জন্য দায়ী থাকবেন, সেটি আপনার
                      দ্বারা অনুমোদিত হোক বা না হোক।
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-[20px]">
                <h2 className="text-[#101011] font-bold font-noto text-[18px]">
                  ডিসক্লেমার
                </h2>
                <p className="text-[#101011] text-opacity-90 font-normal font-noto text-[18px]">
                  আপনি বুঝতে পেরেছেন যে একটি মোবাইল/কম্পিউটার প্ল্যাটফর্মের
                  মাধ্যমে নিউট্রিশন সেবা গ্রহণের ক্ষেত্রে কিছু অসুবিধা হতে পারে,
                  যার মধ্যে রয়েছে:
                </p>
                <div className="ml-[10px]">
                  <div className="flex gap-x-[10px] mb-[1px]">
                    <div className="w-[5px] h-[5px] mt-[6.5px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-noto text-[18px]">
                      যদি আপনার বয়স ৩৫ (পঁয়ত্রিশ) বছরের বেশি হয়, অথবা আপনি
                      যদি ১ (এক) বছরের বেশি সময় ধরে শারীরিকভাবে সক্রিয় না
                      থাকেন, বা আপনার যদি এমন কোনো চিকিৎসা ইতিহাস থাকে যা আপনাকে
                      ডায়েটের কারণে স্বাস্থ্য ঝুঁকিতে ফেলতে পারে, সেক্ষেত্রে এক
                      বা একাধিক শর্তে, আপনি সম্মত হন যে আপনি সেবাগুলি ব্যবহার
                      করার আগে একজন যোগ্য ডাক্তারের কাছ থেকে অনুমোদন নিয়েছেন
                      এবং ডায়েট গ্রহণের সময় কোনও স্বাস্থ্যের পরিণতি বা ওষুধের
                      মিথস্ক্রিয়ার জন্য গেটফিট দায়ী থাকবে না।
                    </p>
                  </div>
                  <div>
                    <div className="flex gap-x-[10px] ">
                      <div className="w-[5px] h-[5px] mt-[6.5px]">
                        <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                      </div>
                      <p className="text-[#101011] text-opacity-90 font-semibold font-noto text-[18px]">
                        গেটফিট শুধুমাত্র নিম্নলিখিত ক্ষেত্র গুলোতে সেবা প্রদান
                        করে থাকে:
                      </p>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-noto text-[18px] ml-[17px]">
                      ১। অয়েট লস <br /> ২। অয়েট গেইন <br /> ৩। থাইরয়েড <br /> ৪।
                      PCOS/PCOD <br />
                      ৫। ডায়াবেটিস <br />
                      ৬। বেবী নিউট্রিশন
                      <br /> ৭। প্রেগন্যন্সি ডায়েট <br />
                      ৮। হাইপ্রেশার ডায়েট <br />
                      ৯। লিভার রোগ ডায়েট
                      <br />
                      ১০। কিডনি রোগ ডায়েট
                      <br />
                      ১১। কিডনি রোগ ডায়েট
                    </p>
                  </div>
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[6.5px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-noto text-[18px]">
                      অনুগ্রহ করে মনে রাখবেন যে কোম্পানী কোন অবস্থাতেই টাকা ফেরত
                      প্রদান করে না। আপনি প্যাকেজ কনসাল্টেশন শুরু করার পরে
                      সর্বাধিক ৩০ দিনের জন্য কনসাল্টেশনটি বন্ধ রাখতে পারবেন৷
                      ইনস্ট্যান্ট কনসাল্টেশনের ক্ষেত্রে পেমেন্ট প্রদানের পর
                      কনসাল্টেশন নেওয়া সম্ভব না হলে অন্য কোন সময়ে সেবা গ্রহণ
                      করতে পারবেন।
                    </p>
                  </div>
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[6.5px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-noto text-[18px]">
                      যেহেতু আমরা কোন চিকিৎসা সেবা প্রদান করি না তাই ডায়েট
                      চলাকালীন সময়ে যে কোনো চিকিৎসা অবস্থার জন্য গেটফিট দায়ী
                      হবে না। আপনি নিশ্চিত করেন যে ডায়েট চালানোর সময় যে কোনও
                      মেডিকেল সমস্যাগুলি ডায়েটের সাথে সম্পর্কিত হবে না।
                    </p>
                  </div>
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[6.5px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-noto text-[18px]">
                      যদি একজন ব্যবহারকারী যদি প্যাকেজ কনসাল্টেশন কিছু দিনের
                      জন্য বন্ধ রাখতে চান তাহলে সেটি সর্বোচ্চ ১ মাসের জন্য বন্ধ
                      রাখতে পারবেন।
                    </p>
                  </div>
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[6.5px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-noto text-[18px]">
                      গেটফিট শুধুমাত্র সেবা প্রদান করার বিপরীতে চার্জ গ্রহণ করে।
                      আপনি সেবার ধরণ অনুযায়ী অবশ্যই চার্জ প্রদান করতে পেমেন্ট
                      শর্তাবলীতে সম্মত হন। গেটফিট যে কোন নতুন অথবা পুরাতন সেবার
                      জন্য অতিরিক্ত ফি যুক্ত, সংশোধন অথবা হ্রাস করতে পারে।
                    </p>
                  </div>
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[6.5px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-noto text-[18px]">
                      আপনার প্রোফাইলের পেমেন্ট হিস্টোরিতে চার্জগুলি প্রথম
                      প্রদর্শিত হওয়ার ৩০ (ত্রিশ) দিনের মধ্যে যেকোন পেমেন্ট
                      সংক্রান্ত সমস্যা বা অসঙ্গতি সম্পর্কে আপনাকে অবশ্যই
                      গেটফিটকে অবহিত করতে হবে অন্যথায় এই ধরনের সমস্যা বা অসঙ্গতি
                      নিয়ে বিতর্ক করার অধিকার পরিত্যাগ করতে সম্মত হন।
                    </p>
                  </div>
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[6.5px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-noto text-[18px]">
                      সকল ধরনের চার্জ গেটফিটের পেমেন্ট গেটওয়ের মাধ্যমে গ্রহণ করা
                      হবে। অন্য কোন মাধ্যমে পেমেন্ট করে প্রতারিত হলে গেটফিট দায়ী
                      থাকবে না।
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-[20px]">
                <h2 className="text-[#101011] font-bold font-noto text-[18px]">
                  অর্থ ফেরত, সেবা এবং বাতিলকরন
                </h2>

                <div className="ml-[10px]">
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[6.5px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-noto text-[18px]">
                      যদি একজন ব্যবহারকারী প্যাকেজ ক্রয়ের জন্য গেটফিট এ অর্থ
                      প্রদান করে থাকেন, তাহলে ব্যবহারকারী টাকা ফেরত পাবে না। তবে
                      বিশেষ বিবেচনায় টাকা ফেরত পেতে পারে। সেই জন্য সরাসরি আমাদের
                      সাপোর্ট টিমে (refund@getfit.com.bd) যোগাযোগ করার জন্য
                      অনুরোধ করা হলো।
                    </p>
                  </div>
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[6.5px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-noto text-[18px]">
                      প্যাকেজ ক্রয়ের পর ৩০ দিন অতিবাহিত হলে ব্যবহারকারীর অর্থ
                      ফেরতের আবেদন আর গ্রহন করা হবে না।
                    </p>
                  </div>
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[6.5px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-noto text-[18px]">
                      ইনস্ট্যান্ট কনসাল্টেশনের ক্ষেত্রে পেমেন্ট করার পরবর্তী ৩০
                      মিনিটের মধ্য কনসাল্টেশন বাতিলের জন্য আবেদন করলে সেটি
                      বিবেচিত হবে। অন্যথায় সেটি বাতিল ও অর্থ ফেরতের অযোগ্য বলে
                      বিবেচিত হবে।
                    </p>
                  </div>
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[6.5px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-noto text-[18px]">
                      অর্থ ফেরতের ধরনের উপর নির্ভর করে ট্যাক্স/ভ্যাট বা অন্যান্য
                      ফি কেটে রাখা হতে পারে।
                    </p>
                  </div>
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[6.5px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-noto text-[18px]">
                      ফেরত প্রক্রিয়া সম্পন্ন করতে ১৫ দিন পর্যন্ত সময় লাগতে পারে।
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-[20px]">
                <h2 className="text-[#101011] font-bold font-inter text-[18px]">
                  একাউন্ট বাতিলকরন
                </h2>

                <div className="ml-[10px]">
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[6.5px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-inter text-[18px]">
                      গেটফিট চাইলে আপনার একাউন্ট বন্ধ বা স্থগিত রাখতে পারে এবং
                      একজন ব্যবহারকারীও যে কোন সময় তার একাউন্ট বন্ধ করে দেয়ার
                      ক্ষমতা রাখেন।
                    </p>
                  </div>
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[6.5px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-inter text-[18px]">
                      কোন ব্যবহারকারী যদি তার একাউন্টটি স্থায়ী ভাবে বন্ধ করতে
                      চায় তাহলে তাকে সরাসরি আমাদের আমাদের একাউন্ট সাপোর্ট টিমে
                      যোগাযোগ করতে হবে।
                    </p>
                  </div>
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[6.5px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-inter text-[18px]">
                      একাউন্ট সাপোর্ট টিমে যোগাযোগ করার জন্য ইমেইল করুন
                      (account@getfit.com.bd) অথবা কল করুন +8801635401965
                      নম্বরে।
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-[20px]">
                <h2 className="text-[#101011] font-bold font-inter text-[18px]">
                  বুদ্ধিবৃত্তিক সম্পত্তির অধিকার
                </h2>

                <div className="ml-[10px]">
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[6.5px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-inter text-[18px]">
                      এই সাইটে বিভিন্ন বৈশিষ্ট্য এবং উপাদান রয়েছে যেমন
                      গ্রাফিক্স,কন্টেন্ট, ছবি, বিষয়বস্তু ইত্যাদি, গেটফিট সেই
                      জিনিসগুলির মালিক। সেবাগুলো কপিরাইট, ট্রেডমার্ক এবং
                      বাংলাদেশের অন্যান্য আইন দ্বারা সুরক্ষিত। আমাদের কোনো সম্পদ
                      বা সেবা আমাদের পূর্ব অনুমতি ছাড়া অন্য কোথাও ব্যবহার করা
                      যাবে না।
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-[20px]">
                <h2 className="text-[#101011] font-bold font-inter text-[18px]">
                  শর্তাবলীর পরিবর্তন{" "}
                </h2>

                <div className="ml-[10px]">
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[6.5px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-inter text-[18px]">
                      গেটফিট তার ব্যবহারের শর্তাবলী যে কোন সময় পরিবর্তন করতে
                      পারে।
                    </p>
                  </div>
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[6.5px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-inter text-[18px]">
                      ব্যবহারের শর্তাবলীর যে কোন ধরনের পরিবর্তন বা সংযোজন জানার
                      জন্য আমাদের ওয়েবসাইট অথবা অ্যাপের সাথে থাকুন।
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-[20px]">
                <h2 className="text-[#101011] font-bold font-inter text-[18px]">
                  গভর্নিং আইন{" "}
                </h2>

                <div className="ml-[10px]">
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[6.5px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-inter text-[18px]">
                      এই ব্যবহারের শর্তাবলী শুধুমাত্র বাংলাদেশের আইন অনুযায়ী
                      গঠিত ও বাস্তবায়িত। শর্তাবলীর ব্যাখ্যা এবং যে কোন বিরোধ
                      নিষ্পত্তির ক্ষেত্রে বাংলাদেশী আইন প্রযোজ্য হবে। যে কোন
                      ধরনের সেবা বা আমাদের সাথে কোন চুক্তি সম্পর্কিত বিরোধ
                      নিষ্পত্তির ক্ষেত্রে বাংলাদেশের আদালতের একচেটিয়া এখতিয়ার
                      থাকবে।
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-[20px]">
                <h2 className="text-[#101011] text-opacity-90 font-normal font-inter text-[18px]">
                  আমাদের শর্তাবলী সম্পর্কে আপনার কোন প্রশ্ন থাকলে,
                  hello@getfit.com.bd এ আমাদের সাথে নির্দ্বিধায় যোগাযোগ করুন।
                  গেটফিটের সাথে থাকার জন্য আপনাকে অনেক ধন্যবাদ।
                </h2>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="w-full flex justify-center mt-[40px] mb-[20px]">
              <h1 className="text-[#1BF5B] font-bold font-inter text-[34px]">
                Terms & Conditions
              </h1>
            </div>
            <div className="px-[100px]">
              <div className="my-[10px]">
                <div>
                  <p className="text-[#101011] text-opacity-90 font-normal font-inter text-[18px]">
                  Please carefully read these terms and conditions. By accessing and using this application, you are ensuring that you accept the terms and conditions described here.
                  </p>
                  <p className="text-[#101011] text-opacity-90 font-normal font-inter text-[18px]">
                  If you do not agree to the use of terms and conditions, do not use this application or services. This agreement supersedes all prior verbal or written agreements (if any) with you.
                  </p>
                  <p className="text-[#101011] text-opacity-90 font-normal font-inter text-[18px] mt-[18px]">
                  Welcome to Getfit health services. This service and app are operated by Bringin Technologies Limited, registered office at Flat 2B, House 254, Road 09, Block C, Bashundhara R/A, Dhaka. 
                  </p>
                </div>
              </div>
              <div className="mt-[20px]">
                <h2 className="text-[#101011] font-bold font-inter text-[18px]">
                  Our Services
                </h2>

                <div className="ml-[10px]">
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[11px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-inter text-[18px]">
                    Getfit provides nutrition and health services for the people of Bangladesh through qualified and experienced nutritionists. However, please note that Getfit does not provide any emergency or medical treatment/services. Registered nutritionists only offer advice on improving life through diet plans and dietary changes.
                    </p>
                  </div>
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[11px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-inter text-[18px]">
                    Users can obtain personalized diet/nutrition plans from our app for Weight Loss, Weight Gain, Thyroid and Diabetes, PCOS/PCOD, Baby Nutrition or Pregnancy Diet, Pet/Animal Nutrition, Liver Disease, Kidney Disease, and High Pressure Diet. These plans are created based on the information provided by the user and their results may vary individually. These plans are managed under the supervision of registered nutritionists.

                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-[20px]">
                <h2 className="text-[#101011] font-bold font-inter text-[18px]">
                Acceptance of Terms & Conditions
                </h2>

                <div className="ml-[10px]">
              
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[11px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-inter text-[18px]">
                    You agree to comply with all laws and regulations of Bangladesh when using our service.
                    </p>
                  </div>
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[11px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-inter text-[18px]">
                    Through this platform, you can communicate with a experienced nutritionist. No user can use it for commercial purposes.
                    </p>
                  </div>
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[11px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-inter text-[18px]">
                    Only nutrition-related services are provided through this platform. We do not provide any general medical services.
                    </p>
                  </div>
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[11px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-inter text-[18px]">
                    After consultation, the nutritionist is fully responsible for providing diet chart or any other advice. Getfit does not carry any liability for the nutritionist's conduct.
                    </p>
                  </div>
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[11px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-inter text-[18px]">
                    Getfit will not be responsible if any user consults with nutritionists outside of the platform or incurs any losses. Users are encouraged to use Getfit as the medium for all communication with nutritionists.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-[20px]">
                <h2 className="text-[#101011] font-bold font-inter text-[18px]">
                User Account
                </h2>

                <div className="ml-[10px]">
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[11px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-inter text-[18px]">
                    Our platform is to be used by individuals who are at least 18 years of age or older, must have a sound mind, and there will be no legal restriction to use the services as a primary user. If a user is a minor (i.e. under 18 years of age) then only the legal guardian/representative of that person must register themselves as the primary user, and create/add the profile of the minor as a secondary user.
                    </p>
                  </div>
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[11px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-inter text-[18px]">
                    All services will be provided only for primary users. A secondary user can only avail services through a primary user as the beneficiary. The primary user will be fully responsible and accountable for the actions of the secondary user within the application.
                    </p>
                  </div>
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[11px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-inter text-[18px]">
                    You may not use this platform for any illegal, unethical, objectionable or any inappropriate purposes that may violate applicable laws and regulations.
                    </p>
                  </div>
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[11px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-inter text-[18px]">
                    You will not share your account information with anyone. You are responsible for maintaining the privacy of your account information and password. You will be solely responsible for all use of your account and password, whether authorized by you or not.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-[20px]">
                <h2 className="text-[#101011] font-bold font-inter text-[18px]">
                Disclaimer
                </h2>
                <p className="text-[#101011] text-opacity-90 font-normal font-inter text-[18px]">
                You may have understood that there could be some inconvenience in receiving nutrition services through a mobile/computer including:
                </p>
                <div className="ml-[10px]">
                  <div className="flex gap-x-[10px] mb-[1px]">
                    <div className="w-[5px] h-[5px] mt-[11px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-inter text-[18px]">
                    If you are over 35 (thirty-five) years of age or if you have been physically inactive for more than 1(one) year or if you have any medical history that may cause health risks due to dietary reasons then in one or more conditions you agree that you have obtained approval from a registered doctor before using the services and Getfit will not be responsible for any health deterioration or medication misconception during dietary intake.
                    </p>
                  </div>
                  <div>
                    <div className="flex gap-x-[10px] ">
                      <div className="w-[5px] h-[5px] mt-[11px]">
                        <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                      </div>
                      <p className="text-[#101011] text-opacity-90 font-semibold font-inter text-[18px]">
                      Getfit only provides services in the following areas:
                      </p>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-inter text-[18px] ml-[17px]">
                      1. Weight Loss
                      <br />
                      2. Weight Gain <br />
                      3. Thyroid
                      <br />
                      4. PCOS/PCOD <br />
                      5. Diabetes <br />
                      6. Baby Nutrition
                      <br />
                      7. Pregnancy Diet <br />
                      8. Pet/Animal Nutrition <br />
                      9. High Pressure Diet
                      <br />
                      10. Liver Diseases Diet
                      <br />
                      11. Kidney Diseases Diet
                    </p>
                  </div>
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[11px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-inter text-[18px]">
                    Please note that the company does not provide refunds under any circumstances. After initiating a package consultation you may hold the consultation for maximum 30 days. In the case of instant consultations, if consultation cannot be obtained after payment, services can be availed at any other time.
                    </p>
                  </div>
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[11px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-inter text-[18px]">
                    Since we do not provide general medical services, Getfit will not be responsible for any medical conditions during the course of the diet. You ensure that any medical issues during the dieting period will not be related to the diet.
                    </p>
                  </div>
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[11px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-inter text-[18px]">
                    If a user wants to hold package consultation for a few days, they can hold it for maximum duration of 1 (one) month.
                    </p>
                  </div>
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[11px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-inter text-[18px]">
                      Getfit only charges for the services it provides. You
                      agree to pay charges according to the payment terms
                      depending on the type of service. Getfit may add, modify
                      or waive additional fees for any new or existing services.
                    </p>
                  </div>
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[11px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-inter text-[18px]">
                      You must inform to our support team within 30 (thirty)
                      days of any issues or discrepancies related to any
                      payments first displayed in your payment history on your
                      profile. Otherwise you agree to waive the right to dispute
                      such issues or discrepancies.
                    </p>
                  </div>
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[11px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-inter text-[18px]">
                      All types of charges will be accepted through Getfit's
                      payment gateway. Getfit will not be responsible if payment
                      is made through any other method and results in
                      harassment.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-[20px]">
                <h2 className="text-[#101011] font-bold font-inter text-[18px]">
                Refunds, Services and Cancellations
                </h2>

                <div className="ml-[10px]">
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[11px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-inter text-[18px]">
                      If a user has made payment for a package purchase on
                      Getfit, they will not be eligible for refund. However,
                      under special consideration, they may be eligible for
                      refund. For this, they are requested to contact our
                      support team directly at refund@getfit.com.bd.
                    </p>
                  </div>
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[11px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-inter text-[18px]">
                      If 30 days have passed after purchasing the package, the
                      user will not be able to apply for or receive a refund.
                    </p>
                  </div>
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[11px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-inter text-[18px]">
                      If an application is submitted to cancel an instant
                      consultation within 30 minutes of payment, it will be
                      considered. Otherwise, it will be considered ineligible
                      for cancellation and refund.
                    </p>
                  </div>
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[11px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-inter text-[18px]">
                      We may deduct taxes/VAT or other fees, it may depend on
                      the type of refund requested.
                    </p>
                  </div>
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[11px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-inter text-[18px]">
                      The refund process may take up to 15 days to complete.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-[20px]">
                <h2 className="text-[#101011] font-bold font-inter text-[18px]">
                  Account Cancellation
                </h2>

                <div className="ml-[10px]">
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[11px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-inter text-[18px]">
                      Getfit can close or deactivate your account and a user
                      also has the ability to close their account at any time.
                    </p>
                  </div>
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[11px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-inter text-[18px]">
                      If any user wishes to permanently close their account,
                      they must directly contact our account support team.
                    </p>
                  </div>
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[11px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-inter text-[18px]">
                      To contact the account support team, please email us at
                      account@getfit.com.bd or call us at +8801635401965.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-[20px]">
                <h2 className="text-[#101011] font-bold font-inter text-[18px]">
                  Intellectual Property Rights
                </h2>

                <div className="ml-[10px]">
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[11px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-inter text-[18px]">
                      The site contains various features and elements such as
                      graphics, content, images, and materials and Getfit owns
                      these items. The services are protected by copyright,
                      trademarks and other laws of Bangladesh. Without our prior
                      permission, none of our property or services can be used
                      elsewhere.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-[20px]">
                <h2 className="text-[#101011] font-bold font-inter text-[18px]">
                  Modification of Terms & Conditions
                </h2>

                <div className="ml-[10px]">
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[11px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-inter text-[18px]">
                      Getfit reserves the right to change its terms of use at
                      any time.
                    </p>
                  </div>
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[11px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-inter text-[18px]">
                      Stay connected with our website or app to be informed
                      about any changes or additions to the terms and conditions
                      of use.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-[20px]">
                <h2 className="text-[#101011] font-bold font-inter text-[18px]">
                  Governing Law{" "}
                </h2>

                <div className="ml-[10px]">
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[11px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-inter text-[18px]">
                      This terms of use is solely formulated and enforced
                      according to the laws of Bangladesh. In the event of any
                      explanation of the terms or resolution of any disputes,
                      Bangladeshi law shall apply. Exclusive jurisdiction of the
                      courts of Bangladesh shall prevail in any disputes related
                      to any services or agreements with us.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-[20px]">
                <h2 className="text-[#101011] text-opacity-90 font-normal font-inter text-[18px]">
                  If you have any questions about our terms and conditions,
                  please contact us at hello@getfit.com.bd. Thank you very much
                  for being with Getfit.{" "}
                </h2>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TermsAndConditionsWeb;
