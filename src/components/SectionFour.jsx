
import React from "react";
import { FiLayers } from "react-icons/fi";
import { FiAward } from "react-icons/fi";
import { FiTrendingUp } from "react-icons/fi";
import { FiTarget } from "react-icons/fi";

export default function SectionFour() {
  return (
    <div className="w-full bg-baby-gray">
      <div className="container mx-auto md:px-15 lg:px-30 lg:py-20 p-4 py-12">

        <div className="text-center">
          <h2 className="lg:text-[40px] text-[30px] font-bold text-[#0F172A]">
            Why Learn With Us
          </h2>
          <p className="text-[18px] text-[#64748B] leading-7.5 pt-3 max-w-162.5 mx-auto">
            Everything we build is designed around one goal — helping you get results you can use.
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap gap-5 pt-12">

          <div className="w-full md:w-[48%] lg:w-1/4 bg-white border border-[#E2E8F0] rounded-2xl shadow-sm p-7 flex flex-col items-center text-center">
            <div className="w-13.5 h-13.5 bg-dark-baby-purple rounded-2xl flex justify-center items-center">
              <FiLayers className="text-[#4F35F5] text-[24px]" />
            </div>

            <h3 className="text-[18px] font-bold text-[#0F172A] pt-5">
              Practical Projects
            </h3>

            <p className="text-[16px] leading-6.5 text-[#64748B] pt-3">
              Every course includes real-world projects you can add directly to your portfolio.
            </p>
          </div>

          <div className="w-full md:w-[48%] lg:w-1/4 bg-white border border-[#E2E8F0] rounded-2xl shadow-sm p-7 flex flex-col items-center text-center">
            <div className="w-13.5 h-13.5 bg-dark-baby-purple rounded-2xl flex justify-center items-center">
              <FiAward className="text-[#4F35F5] text-[24px]" />
            </div>

            <h3 className="text-[18px] font-bold text-[#0F172A] pt-5">
              Expert Instructors
            </h3>

            <p className="text-[16px] leading-6.5 text-[#64748B] pt-3">
              Learn from professionals with years of industry and teaching experience.
            </p>
          </div>

          <div className="w-full md:w-[48%] lg:w-1/4 bg-white border border-[#E2E8F0] rounded-2xl shadow-sm p-7 flex flex-col items-center text-center">
            <div className="w-13.5 h-13.5 bg-dark-baby-purple rounded-2xl flex justify-center items-center">
              <FiTrendingUp className="text-[#4F35F5] text-[24px]" />
            </div>

            <h3 className="text-[18px] font-bold text-[#0F172A] pt-5">
              Career-Focused Content
            </h3>

            <p className="text-[16px] leading-6.5 text-[#64748B] pt-3">
              Curriculum designed around the skills that employers and clients actually need.
            </p>
          </div>

          <div className="w-full md:w-[48%] lg:w-1/4 bg-white border border-[#E2E8F0] rounded-2xl shadow-sm p-7 flex flex-col items-center text-center">
            <div className="w-13.5 h-13.5 bg-dark-baby-purple rounded-2xl flex justify-center items-center">
              <FiTarget className="text-[#4F35F5] text-[24px]" />
            </div>

            <h3 className="text-[18px] font-bold text-[#0F172A] pt-5">
              Flexible Learning
            </h3>

            <p className="text-[16px] leading-6.5 text-[#64748B] pt-3">
              Study at your own pace with structured sessions and clear learning objectives.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
