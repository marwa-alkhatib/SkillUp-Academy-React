import React from "react";
import { FiClock } from "react-icons/fi";
import { FiBookOpen } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";

import Course1 from "../assets/Container.svg";
import Course2 from "../assets/Image (Dynamic Websites with ACF).svg";
import Course3 from "../assets//Image (Frontend Development Fundamentals).svg";
import Ahmed from "../assets/Image (Ahmed Mohamed).svg";
import Sara from "../assets/Image (Sara Ali).svg";

export default function SectionThree() {
  return (
    <div className="w-full bg-white">
      <div className="container mx-auto md:px-15 lg:px-30 lg:py-20 p-4 py-12">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6">
          <div>
            <h2 className="text-[40px] font-bold text-[#111827]">
              Featured Courses
            </h2>
            <p className="text-[16px] text-[#64748B] pt-2">
              Explore practical courses designed to help you build real skills.
            </p>
          </div>

          <button className="flex items-center justify-center gap-3 border border-[#C7D2FE] text-[#4F35F5] rounded-xl px-5 py-3 text-[14px]">
            View All Courses
            <FiChevronRight />
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 pt-10">
          
          <div className="w-full lg:w-1/3 border border-[#E2E8F0] rounded-2xl overflow-hidden shadow-sm">
            <img src={Course1} className="w-full h-45 object-cover" />

            <div className="p-5">
              <div className="flex gap-2">
                <p className="bg-[#DFF2FE] text-[#0069A8] rounded-full px-3 py-1 text-[12px]">
                  WordPress
                </p>
                <p className="bg-[#DCFCE7] text-[#15803D] rounded-full px-3 py-1 text-[12px]">
                  Beginner
                </p>
              </div>

              <h3 className="font-bold text-[16px] text-[#111827] pt-4">
                WordPress Website Development
              </h3>

              <p className="text-[#64748B] text-[14px] leading-6 pt-2">
                Build complete, professional WordPress websites from scratch.
                Learn installation, theme
              </p>

              <div className="flex gap-4 items-center text-[#94A3B8] text-[12px] pt-4">
                <div className="flex items-center gap-1">
                  <FiClock />
                  <p>24 Hours</p>
                </div>
                <div className="flex items-center gap-1">
                  <FiBookOpen />
                  <p>8 sessions</p>
                </div>
              </div>

              <div className="border-t border-[#F1F5F9] mt-4 pt-4 flex justify-between items-center gap-2">
                <div className="flex items-center gap-2">
                  <img src={Ahmed} className="w-7 h-7 rounded-full" />
                  <p className="text-[12px] text-[#475569]">Ahmed Mohamed</p>
                </div>

                <div className="flex items-center gap-2">
                  <p className="font-bold">$120</p>
                  <button className="bg-[#4F35F5] text-white rounded-[9px] px-3 py-2 text-[12px]">
                    View Course
                  </button>
                </div>
              </div>
            </div>
          </div>

          
          <div className="w-full lg:w-1/3 border border-[#E2E8F0] rounded-2xl overflow-hidden shadow-sm">
            <img src={Course2} className="w-full h-45 object-cover" />

            <div className="p-5">
              <div className="flex gap-2">
                <p className="bg-[#DFF2FE] text-[#0069A8] rounded-full px-3 py-1 text-[12px]">
                  WordPress
                </p>
                <p className="bg-[#FEF3C6] text-[#BB4D00] rounded-full px-3 py-1 text-[12px]">
                  Intermediate
                </p>
              </div>

              <h3 className="font-bold text-[16px] text-[#111827] pt-4">
                Dynamic Websites with ACF
              </h3>

              <p className="text-[#64748B] text-[14px] leading-6 pt-2">
                Master Advanced Custom Fields to create flexible, data-driven
                WordPress sites. Build
              </p>

              <div className="flex gap-4 items-center text-[#94A3B8] text-[12px] pt-4">
                <div className="flex items-center gap-1">
                  <FiClock />
                  <p>18 Hours</p>
                </div>
                <div className="flex items-center gap-1">
                  <FiBookOpen />
                  <p>6 sessions</p>
                </div>
              </div>

              <div className="border-t border-[#F1F5F9] mt-4 pt-4 flex justify-between items-center gap-2">
                <div className="flex items-center gap-2">
                  <img src={Ahmed} className="w-7 h-7 rounded-full" />
                  <p className="text-[12px] text-[#475569]">Ahmed Mohamed</p>
                </div>

                <div className="flex items-center gap-2">
                  <p className="font-bold">$100</p>
                  <button className="bg-[#4F35F5] text-white rounded-[9px] px-3 py-2 text-[12px]">
                    View Course
                  </button>
                </div>
              </div>
            </div>
          </div>

          
          <div className="w-full lg:w-1/3 border border-[#E2E8F0] rounded-2xl overflow-hidden shadow-sm">
            <img src={Course3} className="w-full h-45 object-cover" />

            <div className="p-5">
              <div className="flex gap-2">
                <p className="bg-[#EDE9FE] text-[#7008E7] rounded-full px-3 py-1 text-[12px]">
                  Frontend
                </p>
                <p className="bg-[#DCFCE7] text-[#008236] rounded-full px-3 py-1 text-[12px]">
                  Beginner
                </p>
              </div>

              <h3 className="font-bold text-[16px] text-[#111827] pt-4">
                Frontend Development Fundamentals
              </h3>

              <p className="text-[#64748B] text-[14px] leading-6 pt-2">
                Start your web development journey with HTML, CSS, and
                JavaScript. Build real projects and
              </p>

              <div className="flex gap-4 items-center text-[#94A3B8] text-[12px] pt-4">
                <div className="flex items-center gap-1">
                  <FiClock />
                  <p>30 Hours</p>
                </div>
                <div className="flex items-center gap-1">
                  <FiBookOpen />
                  <p>10 sessions</p>
                </div>
              </div>

              <div className="border-t border-[#F1F5F9] mt-4 pt-4 flex justify-between items-center gap-2">
                <div className="flex items-center gap-2">
                  <img src={Sara} className="w-7 h-7 rounded-full" />
                  <p className="text-[12px] text-[#475569]">Sara Ali</p>
                </div>

                <div className="flex items-center gap-2">
                  <p className="font-bold">$140</p>
                  <button className="bg-[#4F35F5] text-white rounded-[9px] px-3 py-2 text-[12px]">
                    View Course
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
