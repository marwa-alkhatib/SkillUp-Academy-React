
import React from "react";
import { FiArrowRight } from "react-icons/fi";

export default function SectionSix() {
  return (
    <div className="w-full bg-[#4F35F5]">
      <div className="container mx-auto md:px-15 flex flex-col justify-center items-center text-center px-4 py-20 lg:py-24">

        <h2 className="text-white text-[28px] lg:text-[42px] font-bold">
          Ready to Start Learning?
        </h2>

        <p className="text-[#E0DBFF] text-[15px] lg:text-[20px] lg:leading-8.5 max-w-170 pt-5">
          Explore our available courses and choose the learning path that fits your goals.
        </p>

        <button className="bg-white text-[#4F35F5] flex justify-center items-center gap-3 rounded-xl lg:px-8 lg:py-4 px-6 py-3 mt-10 text-[18px] font-semibold">
          Browse All Courses
          <FiArrowRight />
        </button>

      </div>
    </div>
  );
}
