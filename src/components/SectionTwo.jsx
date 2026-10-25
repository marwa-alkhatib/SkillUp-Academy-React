import React from "react";
import { FiCode } from "react-icons/fi";
import { FiGlobe } from "react-icons/fi";
import { FiUsers } from "react-icons/fi";
import { FiBriefcase } from "react-icons/fi";
import { FiZap } from "react-icons/fi";

export default function () {
  return (
    <div className="w-full bg-baby-gray">
      <div className="container justify-center items-center md:px-15 lg:px-30 flex flex-col lg:py-12 p-4 py-12">
        <p className="text-[11px] leading-[16.5px] tracking-[1.1px] text-blue-plus-gray font-bold uppercase">
          Browse by Category
        </p>
        <div className="flex flex-row flex-wrap gap-3 pt-6 justify-center items-center">
          <button className="bg-baby-purple text-purple flex gap-2 justify-center items-center  border rounded-[14px] px-4 py-2.5 border-[#EDE9FE]">
            <FiCode />
            <p className="text-[14px] leading-5">Frontend</p>
            <p className="opacity-50 text-[10px]">2</p>
          </button>
          <button className="bg-baby-blue text-bleu flex gap-2 justify-center items-center border rounded-[14px] px-4 py-2.5 border-[#DFF2FE]">
            <FiGlobe />
            <p className="text-[14px] leading-5">WordPress</p>
            <p className="opacity-50 text-[10px]">2</p>
          </button>
          <button className="bg-baby-orange text-orange flex gap-2 justify-center items-center border rounded-[14px] px-4 py-2.5 border-[#FFEDD4]">
            <FiUsers />
            <p className="text-[14px] leading-5">Leadership</p>
            <p className="opacity-50 text-[10px]">1</p>
          </button>
          <button className="bg-baby-green text-green flex gap-2 justify-center items-center border rounded-[14px] px-4 py-2.5 border-[#DFF2FE]">
            <FiBriefcase />
            <p className="text-[14px] leading-5">Entrepreneurship</p>
            <p className="opacity-50 text-[10px]">1</p>
          </button>
          <button className="bg-dark-baby-purple text-dark-purple flex gap-2 justify-center items-center border rounded-[14px] px-4 py-2.5 border-[#E0E7FF]">
            <FiZap />
            <p className="text-[14px] leading-5">Backend</p>
            <p className="opacity-50 text-[10px]">0</p>
          </button>
        </div>
      </div>
    </div>
  );
}
