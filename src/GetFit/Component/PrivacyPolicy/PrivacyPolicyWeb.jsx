import React from "react";
import { useToggleLanguage } from "../../Context/useToggleLanguage";

const PrivacyPolicyWeb = () => {
  const { isToggledLanguage } = useToggleLanguage();

  return (
    <div className="w-full pb-[300px] flex justify-center">
      <div className="xl:w-[1366px] lg:w-[1280px]  flex justify-center ">
        {isToggledLanguage === true ? (
          <div>
            <div className="w-full flex justify-center mt-[40px] mb-[20px]">
              <h1 className="text-[#1BF5B] font-bold font-noto text-[34px]">
                প্রাইভেসি পলিসি
              </h1>
            </div>
            <div className="px-[100px]">
              <div>
                <p className="text-[#1BF5B] text-opacity-90 font-normal font-noto text-[18px]">
                  গেটফিটের গোপনীয়তার নীতি আপনাকে বুঝতে সাহায্য করবে যে আমরা
                  কীভাবে আপনার ডেটা ব্যবহার করি এবং সুরক্ষিত করি।
                  <br /> গেটফিট আপনার ব্যাক্তিগত তথ্যের গোপনীয়তায়
                  প্রতিশ্রুতিবদ্ধ। এই গোপনীয়তার নীতি আপনি যখন ওয়েবসাইট,
                  অ্যাপ্লিকেশন অথবা সার্ভিস ব্যবহার করেন তখন আপনার তথ্য সংগ্রহ,
                  ব্যবহার, সঞ্চয়, প্রক্রিয়াকরণ, প্রকাশের ক্ষেত্রে প্রযোজ্য।
                </p>
              </div>
              <div className="mt-[20px]">
                <h2 className="text-[#1BF5B] font-bold font-noto text-[18px]">
                  ব্যক্তিগত তথ্য সংগ্রহ
                </h2>
                <p className="text-[#1BF5B] text-opacity-90 font-normal font-noto text-[18px]">
                  আপনাকে স্বাস্থ্য সেবা প্রদান করার জন্য আপনাকে স্বেচ্ছায়
                  আমাদের কিছু তথ্য প্রদান করতে হতে পারে, যা ব্যক্তিগতভাবে আপনাকে
                  বা আপনার সাথে সম্পর্কিত অন্যান্য ব্যবহারকারীদের পরিচয় সনাক্ত
                  করে।
                </p>
                <p className="text-[#1BF5B] text-opacity-90 font-normal font-noto text-[18px] mt-[18px]">
                  আপনার বা আপনার সাথে সম্পর্কিত অন্যান্য ব্যবহারকারীদের সম্পর্কে
                  আমরা আপনার কাছ থেকে যে তথ্য সংগ্রহ করতে পারি, তা নিম্নে উল্লেখ
                  করা হলো, তবে এগুলো ছাড়াও অন্যান্য তথ্য থাকতে পারে:
                </p>
              </div>
              <div className="mt-[20px]">
                <h2 className="text-[#101011] font-bold font-noto text-[18px]">
                  ক্লায়েন্ট ইনফরমেশন
                </h2>
                <div className="ml-[10px]">
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[6.5px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-noto text-[18px]">
                      ক্লায়েন্ট নাম,
                    </p>
                  </div>
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[6.5px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-noto text-[18px]">
                      জন্ম তারিখ/বয়স,
                    </p>
                  </div>
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[6.5px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-noto text-[18px]">
                      রক্তের গ্রুপ, বৈবাহিক অবস্থা,
                    </p>
                  </div>
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[6.5px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-noto text-[18px]">
                      লিঙ্গ,
                    </p>
                  </div>
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[6.5px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-noto text-[18px]">
                      ঠিকানা
                    </p>
                  </div>
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[6.5px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-noto text-[18px]">
                      ফোন নম্বর/মোবাইল নম্বর,
                    </p>
                  </div>
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[6.5px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-noto text-[18px]">
                      ইমেইল,
                    </p>
                  </div>
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[6.5px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-noto text-[18px]">
                      শারীরবৃত্তীয় স্বাস্থ্যের অবস্থা (ওজন, উচ্চতা ইত্যাদি)
                    </p>
                  </div>
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[6.5px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-noto text-[18px]">
                      ব্যক্তিগত মেডিকেল রেকর্ড এবং ইতিহাস,
                    </p>
                  </div>
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[6.5px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-noto text-[18px]">
                      সেবা গ্রহন অথবা অনলাইনে পেমেন্ট করার সময় বৈধ আর্থিক তথ্য,
                    </p>
                  </div>
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[6.5px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-noto text-[18px]">
                      রেজিস্ট্রেশনের সময় বা তার পরে দেওয়া ব্যবহারকারীর বিবরণ,
                    </p>
                  </div>
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[6.5px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-noto text-[18px]">
                      ইন্টারনেট প্রোটোকল ঠিকানা, ব্রাউজারের ধরন, ব্রাউজারের
                      ভাষা, রেফারিং ইউআরএল, ফাইল অ্যাক্সেস, সময়, অপারেটিং
                      সিস্টেম এবং আমাদের লগ ফাইলগুলিতে সংগৃহীত আপনার ভিজিটের
                      বিবরণ, আমাদের ওয়েবসাইট বা অ্যাপ্লিকেশনের পেইজগুলি যা আপনি
                      ভিজিট করেন এবং সেই পেইজগুলিতে ব্যয় করা সময় এবং অন্যান্য
                      পরিসংখ্যান ("লগ ডেটা"),
                    </p>
                  </div>
                  <div className="flex gap-x-[10px] mt-[1px]">
                    <div className="w-[5px] h-[5px] mt-[6.5px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>

                    <p className="text-[#101011] text-opacity-90 font-normal font-noto text-[18px]">
                      আপনার দ্বারা স্বেচ্ছায় প্রদান করা হয় এরকম অন্য যে কোনো
                      তথ্য (সম্মিলিতভাবে "ব্যক্তিগত তথ্য" হিসাবে উল্লেখ করা
                      হবে)।
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-[20px]">
                <h2 className="text-[#101011] font-bold font-noto text-[18px]">
                  ডাক্তার/নিউট্রিশনিস্টের ইনফরমেশন
                </h2>
                <div className="ml-[10px]">
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[6.5px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-noto text-[18px]">
                      ডাক্তার/নিউট্রিশনিস্টের নাম,
                    </p>
                  </div>
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[6.5px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-noto text-[18px]">
                      ঠিকানা,
                    </p>
                  </div>
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[6.5px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-noto text-[18px]">
                      শিক্ষাগত যোগ্যতা,
                    </p>
                  </div>
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[6.5px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-noto text-[18px]">
                      অভিজ্ঞতার তথ্য,
                    </p>
                  </div>
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[6.5px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-noto text-[18px]">
                      জাতীয় পরিচয়পত্র, পাসপোর্ট, ব্যাংক ইনফরমেশন মোবাইল নাম্বার,
                      ইমেইল ইত্যাদি (এই তথ্যগুলি শুধুমাত্র আমাদের অভ্যন্তরীণ
                      কর্মকর্তারা দেখতে পাবে)
                    </p>
                  </div>
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[6.5px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-noto text-[18px]">
                      বিভিন্ন স্পর্শকাতর তথ্য যেমনঃ পাসওয়ার্ড ইত্যাদি কেউ ই
                      দেখতে পাবে না।
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-[20px]">
                <h2 className="text-[#101011] font-bold font-noto text-[18px]">
                  আমরা কীভাবে ব্যক্তিগত তথ্য সংগ্রহ করি
                </h2>
                <div>
                  <p className="text-[#101011] text-opacity-90 font-normal font-noto text-[18px]">
                    যে পদ্ধতিগুলি দ্বারা আমরা আপনার ব্যক্তিগত তথ্য সংগ্রহ করি
                    সেগুলির তা নিম্নে উল্লেখ করা হলো, তবে এগুলো ছাড়াও অন্যান্য
                    উপায়ও থাকতে পারে:
                  </p>
                </div>
                <div className="ml-[10px]">
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[6.5px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-noto text-[18px]">
                      আপনি যখন আমাদের ওয়েবসাইট বা অ্যাপ্লিকেশনে নিবন্ধন করবেন,
                    </p>
                  </div>
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[6.5px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-noto text-[18px]">
                      আপনি যখন আমাদের কাছে আপনার ব্যক্তিগত তথ্য প্রদান করেন,
                    </p>
                  </div>
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[6.5px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-noto text-[18px]">
                      আমাদের দ্বারা আপনাকে প্রদত্ত সেবা/কনসাল্টেশন চলাকালীন,
                    </p>
                  </div>
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[6.5px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-noto text-[18px]">
                      আপনি যখন আমাদের ওয়েবসাইট বা অ্যাপ্লিকেশনের সেবাগুলি
                      ব্যবহার করেন,
                    </p>
                  </div>
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[6.5px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-noto text-[18px]">
                      আপনার ডিভাইসের মাধ্যমে যে সকল বিষয়ে আমাদের অ্যাক্সেস
                      অনুমতি দিয়েছেন (নীচে আলোচনা করা হয়েছে),
                    </p>
                  </div>
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[6.5px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-noto text-[18px]">
                      কুকিজ ব্যবহার করে (নিচেও আলোচনা করা হয়েছে),
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-[20px]">
                <h2 className="text-[#101011] font-bold font-noto text-[18px]">
                  ব্যক্তিগত তথ্যের ব্যবহার
                </h2>
                <div>
                  <p className="text-[#101011] text-opacity-90 font-normal font-noto text-[18px]">
                    আপনার ব্যক্তিগত তথ্যগুলি নিম্নলিখিত উদ্দেশ্যে ব্যবহার করা
                    যেতে পারে:
                  </p>
                </div>
                <div className="ml-[10px]">
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[6.5px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-noto text-[18px]">
                      কার্যকর সেবা প্রদান;
                    </p>
                  </div>
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[6.5px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-noto text-[18px]">
                      আপনি যখন আমাদের কাছে আপনার ব্যক্তিগত তথ্য প্রদান করেন,
                    </p>
                  </div>
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[6.5px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-noto text-[18px]">
                      গ্রাহক সেবা সম্পর্কিত সমস্যাগুলি চিহ্নিত করতে;
                    </p>
                  </div>
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[6.5px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-noto text-[18px]">
                      ওয়েবসাইট বা অ্যাপ্লিকেশন পরিচালনা এবং উন্নত করতে;
                    </p>
                  </div>
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[6.5px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-noto text-[18px]">
                      বিভিন্ন রকম সমস্যা যেমন অ্যাপয়েন্টমেন্ট, প্রযুক্তিগত
                      সমস্যা, পেমেন্ট, প্রতিক্রিয়া এবং অন্যান্য নিরাপত্তা
                      সম্পর্কিত তথ্য ঘোষণার জন্য ফোন, এসএমএস, ইমেল বা
                      হোয়াটসঅ্যাপ ইত্যাদির মাধ্যমে আপনার সাথে যোগাযোগ করতে;
                    </p>
                  </div>
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[6.5px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-noto text-[18px]">
                      এসএমএস, ইমেইল, বা তৃতীয় পক্ষের যোগাযোগ পরিষেবা যেমন
                      হোয়াটসঅ্যাপ, ফেসবুক ইত্যাদির মাধ্যমে আমাদের থেকে
                      প্রচারমূলক এবং বিপণন ইমেল পাঠাতে;
                    </p>
                  </div>
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[6.5px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-noto text-[18px]">
                      আমাদের সাথে আপনার যে কোনো চুক্তির বিষয়ে আমাদের
                      দায়িত্বগুলি পরিচালনা করা বা অন্যথায় পালন করা;
                    </p>
                  </div>
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[6.5px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-noto text-[18px]">
                      ওয়েবসাইট বা অ্যাপ্লিকেশনে আপনার প্রোফাইল তৈরি করতে;
                    </p>
                  </div>
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[6.5px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-noto text-[18px]">
                      আদালতের আদেশ, বা আইনি প্রক্রিয়ার প্রতিক্রিয়া জানাতে,
                      আমাদের আইনি অধিকার প্রতিষ্ঠা বা প্রয়োগ করতে এবং আইনি
                      দাবির বিরুদ্ধে রক্ষা করতে;
                    </p>
                  </div>
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[6.5px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-noto text-[18px]">
                      তদন্ত, অবৈধ কার্যকলাপ, জালিয়াতি, আমাদের ব্যবহারের
                      শর্তাবলী লঙ্ঘন, আপনার সাথে আমাদের চুক্তি লঙ্ঘনের ব্যাপারে
                      আইন দ্বারা প্রয়োজনীয় বিষয়ে পদক্ষেপ নিতে;
                    </p>
                  </div>
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[6.5px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-noto text-[18px]">
                      একাডেমিক/অধ্যয়ন, ক্লিনিকাল/ স্বাস্থ্য সম্পর্কিত বা
                      অন্যান্য গবেষণা, পরিসংখ্যান বিশ্লেষণ এবং গবেষণার জন্য;
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-[20px]">
                <h2 className="text-[#101011] font-bold font-noto text-[18px]">
                  অনুমতি প্রদান
                </h2>
                <div>
                  <p className="text-[#101011] text-opacity-90 font-normal font-noto text-[18px]">
                    একবার অ্যাপটি ডাউনলোড এবং ইনস্টল হয়ে গেলে, অ্যাপটিকে আপনার
                    ডিভাইসে ক্রিয়া সম্পাদন করার জন্য কিছু নির্দিষ্ট অনুমতি
                    দেওয়ার জন্য অনুরোধ করা হতে পারে। এই অনুমতি গুলো হলো:
                  </p>
                </div>
                <div>
                  <div>
                    <p className="my-[18px] text-[#101011] text-opacity-90 font-normal font-noto text-[18px]">
                      <span className="text-[#101011] font-semibold font-noto text-[18px]">
                        ক্যামেরা:
                      </span>{" "}
                      ডাক্তার/নিউট্রিশনিস্টের সাথে ভার্চুয়াল পরামর্শের জন্য এবং
                      আপনার নথির ছবি তোলার জন্য অনুমতি প্রয়োজন;
                    </p>
                  </div>
                  <div>
                    <p className="my-[18px] text-[#101011] text-opacity-90 font-normal font-noto text-[18px]">
                      <span className="text-[#101011] font-semibold font-noto text-[18px]">
                        ফটো/মিডিয়া/ফাইল/স্টোরেজ:
                      </span>{" "}
                      আপনার ডিভাইস স্টোরেজ থেকে ছবি/ডকুমেন্ট/ফাইল সহজে
                      আপলোড/ডাউনলোড করার জন্য অনুমতি প্রয়োজন;
                    </p>
                  </div>
                  <div>
                    <p className="my-[18px] text-[#101011] text-opacity-90 font-normal font-noto text-[18px]">
                      <span className="text-[#101011] font-semibold font-noto text-[18px]">
                        ফোন নম্বর:
                      </span>{" "}
                      গ্রাহক সহায়তা/ কেয়ার টিমের কাছে কল করার জন্য অনুমতি
                      প্রয়োজন;
                    </p>
                  </div>
                  <div>
                    <p className="my-[18px] text-[#101011] text-opacity-90 font-normal font-noto text-[18px]">
                      <span className="text-[#101011] font-semibold font-noto text-[18px]">
                        মাইক্রোফোন:
                      </span>{" "}
                      ডাক্তার এবং নিউট্রিশনিস্টের সাথে কথা বলা/কনসাল্টেশন নেয়ার
                      জন্য অনুমতি প্রয়োজন;
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-[20px]">
                <h2 className="text-[#101011] font-bold font-noto text-[18px]">
                  কুকিজের ব্যবহার
                </h2>
                <div>
                  <p className="text-[#101011] text-opacity-90 font-normal font-noto text-[18px]">
                    আমরা কিছু ডেটা (যেটি সংবেদনশীল ব্যক্তিগত ডেটা বা তথ্য নয়)
                    সংরক্ষণ করতে আপনার কম্পিউটার বা ডিভাইসে অস্থায়ী বা স্থায়ী
                    কুকিজ হিসেবে সংরক্ষণ করতে পারি। আপনি আপনার ডিভাইস থেকে এই
                    কুকিজ গুলি মুছে ফেলতে বা ব্লক করতে পারেন। আমরা কোন তৃতীয়
                    পক্ষের দ্বারা কুকিজ ব্যবহার নিয়ন্ত্রণ করি না।
                  </p>
                </div>
              </div>
              <div className="mt-[20px]">
                <h2 className="text-[#101011] font-bold font-noto text-[18px]">
                  আমরা কিভাবে আপনার তথ্য রক্ষা করি?
                </h2>
                <div>
                  <p className="text-[#101011] text-opacity-90 font-normal font-noto text-[18px]">
                    আপনার ব্যক্তিগত তথ্যের নিরাপত্তা আমাদের কাছে গুরুত্বপূর্ণ।
                    সংগৃহীত ব্যক্তিগত তথ্য (সুরক্ষিত স্বাস্থ্য তথ্য) নিরাপদ কিনা
                    তা নিশ্চিত করার জন্য আমরা যুক্তিসঙ্গত নিরাপত্তা পদ্ধতি গ্রহণ
                    করেছি। আমরা আমাদের এবং আমাদের সহযোগীদের কর্মচারী, এজেন্ট বা
                    তৃতীয় পক্ষের সেবা প্রদানকারী এবং এজেন্সিদের কাছে আপনার
                    ব্যক্তিগত তথ্যের অনুমতি প্রদান করি না।
                  </p>
                </div>
              </div>
              <div className="mt-[20px]">
                <h2 className="text-[#101011] font-bold font-noto text-[18px]">
                  গোপনীয়তা নীতিতে পরিবর্তন
                </h2>

                <div className="ml-[10px]">
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[6.5px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-noto text-[18px]">
                      আমরা আমাদের নিজস্ব বিবেচনার ভিত্তিতে যে কোন সময়ে এই
                      গোপনীয়তার নীতি আপডেট করার (পরিবর্তন, সংশোধন, যোগ এবং/অথবা
                      মুছে ফেলার) অধিকার সংরক্ষণ করি। গোপনীয়তা নীতির যে কোন
                      ধরনের পরিবর্তন নোটিফিকেশনের মাধ্যমে জানিয়ে দেওয়া হবে।
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-[15px]">
                <div>
                  <p className="text-[#101011] text-opacity-90 font-normal font-noto text-[18px]">
                    আমাদের গোপনীয়তার নীতি সম্পর্কে আপনার কোন প্রশ্ন থাকলে,
                    hello@getfit.com.bd এ আমাদের সাথে নির্দ্বিধায় যোগাযোগ করুন।
                    গেটফিটের সাথে থাকার জন্য আপনাকে অনেক ধন্যবাদ।
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="w-full flex justify-center mt-[40px] mb-[20px]">
              <h1 className="text-[#1BF5B] font-bold font-noto text-[34px]">
                Privacy Policy
              </h1>
            </div>
            <div className="px-[100px]">
              <div>
                <p className="text-[#1BF5B] text-opacity-90 font-normal font-inter text-[19px]">
                  Getfit's privacy policy will help you understand how we use
                  and protect your data. Getfit is committed to the privacy of
                  your personal information. When you use our website,
                  application, or service, this privacy policy applies to the
                  collection, use, storage, processing, and disclosure of your
                  information.
                </p>
              </div>
              <div className="mt-[20px]">
                <h2 className="text-[#1BF5B] font-bold font-inter text-[18px]">
                  Personal Information Collection
                </h2>
                <p className="text-[#1BF5B] text-opacity-90 font-normal font-inter text-[18px]">
                  To get health and nutrition services, you may provide us some
                  information that identifies you or other users associated with
                  your account.
                </p>
                <p className="text-[#1BF5B] text-opacity-90 font-normal font-inter text-[18px] mt-[18px]">
                  We may collect the following information from you or other
                  users associated with you, but this list is not exhaustive and
                  other information may also be needed.
                </p>
              </div>
              <div className="mt-[20px]">
                <h2 className="text-[#101011] font-bold font-inter text-[18px]">
                  Client’s Information
                </h2>
                <div className="ml-[10px]">
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[11.5px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-inter text-[18px]">
                      Client’s name,
                    </p>
                  </div>
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[11.5px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-inter text-[18px]">
                      Date of birth/age,
                    </p>
                  </div>
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[11.5px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-inter text-[18px]">
                      Blood group, marital status,
                    </p>
                  </div>
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[11.5px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-inter text-[18px]">
                      Gender,
                    </p>
                  </div>
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[11.5px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-inter text-[18px]">
                      Address,
                    </p>
                  </div>
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[11.5px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-inter text-[18px]">
                      Phone/mobile Number,
                    </p>
                  </div>
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[11.5px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-inter text-[18px]">
                      Email,
                    </p>
                  </div>
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[11.5px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-inter text-[18px]">
                      Physical & health information (weight, height etc.)
                    </p>
                  </div>
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[11.5px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-inter text-[18px]">
                      Personal medical records and history,
                    </p>
                  </div>
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[11.5px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-inter text-[18px]">
                      Valid financial information when receiving services or
                      making online payments,
                    </p>
                  </div>
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[11.5px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-inter text-[18px]">
                      User information provided during or after registration,
                    </p>
                  </div>
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[11.5px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-inter text-[18px]">
                      Internet protocol address, browser type, browser language,
                      referring URL, file access, time, operating system, and
                      information about your visits collected in our log files,
                      including the pages you visit on our website or
                      application and the time spent on those pages, and other
                      statistics ("log data").,
                    </p>
                  </div>
                  <div className="flex gap-x-[10px] mt-[1px]">
                    <div className="w-[5px] h-[5px] mt-[11.5px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>

                    <p className="text-[#101011] text-opacity-90 font-normal font-inter text-[18px]">
                      Any other information provided by you will be referred to
                      collectively as "personal information.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-[20px]">
                <h2 className="text-[#101011] font-bold font-noto text-[18px]">
                  Doctor/Nutritionist information
                </h2>
                <div className="ml-[10px]">
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[11px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-noto text-[18px]">
                      Name of doctor/nutritionist,
                    </p>
                  </div>
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[11px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-noto text-[18px]">
                      Address,
                    </p>
                  </div>
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[11px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-noto text-[18px]">
                      Educational qualifications,
                    </p>
                  </div>
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[11px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-noto text-[18px]">
                      Experience information,
                    </p>
                  </div>
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[11px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-noto text-[18px]">
                      National identity, passport, bank information, mobile
                      number, email, etc. (only internal employees will be able
                      to see this information)
                    </p>
                  </div>
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[11px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-noto text-[18px]">
                      Sensitive information such as passwords (No one will be
                      able to see).
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-[20px]">
                <h2 className="text-[#101011] font-bold font-inter text-[18px]">
                  How we Collect Personal Information
                </h2>
                <div>
                  <p className="text-[#101011] text-opacity-90 font-normal font-inter text-[18px]">
                    The methods by which we collect your personal information
                    are mentioned below, but there may also be other methods
                    besides these:
                  </p>
                </div>
                <div className="ml-[10px]">
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[11px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-inter text-[18px]">
                      When you register on our website or application,
                    </p>
                  </div>
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[11px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-inter text-[18px]">
                      When you provide us your personal information,
                    </p>
                  </div>
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[11px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-inter text-[18px]">
                      When you receive the service/consultation provided by
                      Getfit,
                    </p>
                  </div>
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[11px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-inter text-[18px]">
                      When you use our services via website or application,
                    </p>
                  </div>
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[11px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-inter text-[18px]">
                      Content that you have permitted us to access through your
                      device (discussed below).,
                    </p>
                  </div>
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[11px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-inter text-[18px]">
                      Using cookies (discussed below),
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-[20px]">
                <h2 className="text-[#101011] font-bold font-inter text-[18px]">
                  Use of Personal Information
                </h2>
                <div>
                  <p className="text-[#101011] text-opacity-90 font-normal font-inter text-[18px]">
                    Your personal information may be used for the following
                    purposes:
                  </p>
                </div>
                <div className="ml-[10px]">
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[11px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-inter text-[18px]">
                      Effective service delivery;
                    </p>
                  </div>
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[11px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-inter text-[18px]">
                      To identify customer service related issues;{" "}
                    </p>
                  </div>
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[11px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-inter text-[18px]">
                      To develop and improve websites/applications & services;{" "}
                    </p>
                  </div>
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[11px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-inter text-[18px]">
                      To communicate with you via phone, SMS, email, or WhatsApp
                      for announcements regarding various issues such as
                      appointments, technical problems, payments, feedback, and
                      other security-related information.;{" "}
                    </p>
                  </div>
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[11px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-inter text-[18px]">
                      To send promotional and advertising content from us via
                      SMS, email, or third-party communication channels such as
                      WhatsApp, Facebook, etc.;
                    </p>
                  </div>
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[11px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-inter text-[18px]">
                      To manage or uphold our responsibilities regarding any
                      agreement with us;
                    </p>
                  </div>
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[11px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-inter text-[18px]">
                      To create your profile on the website or application;
                    </p>
                  </div>
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[11px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-inter text-[18px]">
                      To inform about court orders or legal procedures, to
                      establish or enforce our legal rights, and to defend
                      against legal claims.;{" "}
                    </p>
                  </div>
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[11px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-inter text-[18px]">
                      To take necessary steps under the law regarding
                      investigation, illegal activities, fraud, breach of our
                      terms of use, and violation of our agreement with you;
                    </p>
                  </div>
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[11px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-inter text-[18px]">
                      For academic study, clinical/health-related, statistical
                      analysis or other research purposes;
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-[20px]">
                <h2 className="text-[#101011] font-bold font-inter text-[18px]">
                  Grant Permission{" "}
                </h2>
                <div>
                  <p className="text-[#101011] text-opacity-90 font-normal font-inter text-[18px]">
                    Once the app is downloaded and installed, you may be
                    requested to grant certain specific permissions to the app
                    to perform actions on your device. These permissions
                    include:
                  </p>
                </div>
                <div>
                  <div>
                    <p className="my-[18px] text-[#101011] text-opacity-90 font-normal font-inter text-[18px]">
                      <span className="text-[#101011] font-semibold font-inter text-[18px]">
                        Camera:
                      </span>{" "}
                      For video consultations with doctors/nutritionists and
                      taking pictures of your documents, we need camera
                      permission.
                    </p>
                  </div>
                  <div>
                    <p className="my-[18px] text-[#101011] text-opacity-90 font-normal font-inter text-[18px]">
                      <span className="text-[#101011] font-semibold font-inter text-[18px]">
                        Photos/Media/Files/Storage:
                      </span>{" "}
                      Permission is required to easily upload/download
                      photos/documents/files from your device storage;
                    </p>
                  </div>
                  <div>
                    <p className="my-[18px] text-[#101011] text-opacity-90 font-normal font-inter text-[18px]">
                      <span className="text-[#101011] font-semibold font-inter text-[18px]">
                        Phone Number:
                      </span>{" "}
                      Permission is required to call the customer support/care
                      team;
                    </p>
                  </div>
                  <div>
                    <p className="my-[18px] text-[#101011] text-opacity-90 font-normal font-inter text-[18px]">
                      <span className="text-[#101011] font-semibold font-inter text-[18px]">
                        Microphone:
                      </span>{" "}
                      Permission is required to get audio consultation with
                      doctors and nutritionists;
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-[20px]">
                <h2 className="text-[#101011] font-bold font-inter text-[18px]">
                  Use of cookies
                </h2>
                <div>
                  <p className="text-[#101011] text-opacity-90 font-normal font-inter text-[18px]">
                    We may store some data (which is not sensitive personal data
                    or information) on your computer or device as temporary or
                    permanent cookies. You can delete or block these cookies
                    from your device. We do not control the use of cookies by
                    third parties.
                  </p>
                </div>
              </div>
              <div className="mt-[20px]">
                <h2 className="text-[#101011] font-bold font-inter text-[18px]">
                  How we Protect your Information?
                </h2>
                <div>
                  <p className="text-[#101011] text-opacity-90 font-normal font-inter text-[18px]">
                    The security of your personal information is important to
                    us. To ensure the safety of collected personal data
                    (protected health information), we have adopted reasonable
                    security measures. We do not grant permission to our
                    employees, agents, or third-party service providers to
                    access your personal information.
                  </p>
                </div>
              </div>
              <div className="mt-[20px]">
                <h2 className="text-[#101011] font-bold font-inter text-[18px]">
                  Change of Privacy Policy
                </h2>

                <div className="ml-[10px]">
                  <div className="flex gap-x-[10px] ">
                    <div className="w-[5px] h-[5px] mt-[11px]">
                      <div className="w-[5px] h-[5px] bg-black rounded-full"></div>
                    </div>
                    <p className="text-[#101011] text-opacity-90 font-normal font-inter text-[18px]">
                      We reserve the right to update (change, modify, add,
                      and/or remove) this privacy policy at any time based on
                      our own discretion. Stay connected with our website or app
                      for any changes or additions to the privacy policy.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-[15px]">
                <div>
                  <p className="text-[#101011] text-opacity-90 font-normal font-inter text-[18px]">
                    If you have any questions regarding our privacy policy,
                    please contact us at hello@getfit.com.bd without any
                    hesitation. Thank you very much for being with Getfit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PrivacyPolicyWeb;
