
import React from "react";
import { FiChevronRight } from "react-icons/fi";
import { FiBookOpen } from "react-icons/fi";
import { FiAward } from "react-icons/fi";

import Ahmed from "../assets/Image (Ahmed Mohamed).svg";
import Sara from "../assets/Image (Sara Ali).svg";
import Omar from "../assets/OmarPhoto.jpg";

export default function SectionFive() {
  return (
    <div className="w-full bg-white">
      <div className="container mx-auto md:px-15 lg:px-30 lg:py-20 p-4 py-12">

        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-5">
          <h2 className="lg:text-[40px] text-[29px] md:text-center font-bold text-[#0F172A] leading-[37.5px]">
            Learn From Experienced Instructors
          </h2>

          <button className="flex items-center justify-center  gap-3 border border-[#C7D2FE] text-[#4F39F6] font-semibold rounded-xl px-6 py-3 text-[14px]">
            All Instructors
            <FiChevronRight />
          </button>
        </div>

        <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap gap-6 pt-10">

          <div className="w-full md:w-full lg:w-1/3 bg-white border border-[#E2E8F0] rounded-2xl overflow-hidden shadow-sm">

            <div className="bg-dark-baby-purple flex flex-col items-center text-center py-9 px-4">
              <img
                src={Ahmed}
                className="w-22.5 h-22.5 rounded-full object-cover border-4 border-white"
              />
              <h3 className="text-[18px] font-bold text-[#0F172A] pt-4">
                Ahmed Mohamed
              </h3>
              <p className="text-[16px] text-[#4F35F5] font-semibold">
                WordPress Developer & Instructor
              </p>
            </div>

            <div className="p-7">
              <p className="text-[16px] text-[#64748B] leading-6.75">
                Ahmed is a WordPress developer and instructor with seven years
                of experience building dynamic websites and teaching practical web
              </p>

              <div className="flex flex-wrap gap-2 pt-4">
                <span className="bg-[#F1F5F9] border border-[#E2E8F0] text-[#475569] text-[14px] px-3 py-1 rounded-[9px]">
                  WordPress
                </span>
                <span className="bg-[#F1F5F9] border border-[#E2E8F0] text-[#475569] text-[14px] px-3 py-1 rounded-[9px]">
                  Elementor
                </span>
                <span className="bg-[#F1F5F9] border border-[#E2E8F0] text-[#475569] text-[14px] px-3 py-1 rounded-[9px]">
                  ACF
                </span>
              </div>

              <div className="flex justify-between items-center text-[#94A3B8] text-[13px] pt-5">
                <div className="flex items-center gap-2">
                  <FiBookOpen />
                  <p>3 courses</p>
                </div>
                <div className="flex items-center gap-2">
                  <FiAward />
                  <p>7 yrs exp.</p>
                </div>
              </div>

              <button className="w-full border border-[#C7D2FE] text-[#4F39F6] font-semibold rounded-[11px] py-3 mt-5">
                View Profile
              </button>
            </div>
          </div>

          
          <div className="w-full md:w-full lg:w-1/3 bg-white border border-[#E2E8F0] rounded-2xl overflow-hidden shadow-sm">

            <div className="bg-dark-baby-purple flex flex-col items-center text-center py-9 px-4">
              <img
                src={Sara}
                className="w-22.5 h-22.5 rounded-full object-cover border-4 border-white"
              />
              <h3 className="text-[18px] font-bold text-[#0F172A] pt-4">
                Sara Ali
              </h3>
              <p className="text-[16px] text-[#4F39F6] font-semibold">
                Senior Frontend Developer
              </p>
            </div>

            <div className="p-7">
              <p className="text-[16px] text-[#64748B] leading-6.75">
                Sara is a senior frontend developer with six years of experience
                in modern web technologies. She specializes in building
              </p>

              <div className="flex flex-wrap gap-2 pt-4">
                <span className="bg-[#F1F5F9] border border-[#E2E8F0] text-[#475569] text-[14px] px-3 py-1 rounded-[9px]">
                  HTML
                </span>
                <span className="bg-[#F1F5F9] border border-[#E2E8F0] text-[#475569] text-[14px] px-3 py-1 rounded-[9px]">
                  CSS
                </span>
                <span className="bg-[#F1F5F9] border border-[#E2E8F0] text-[#475569] text-[14px] px-3 py-1 rounded-[9px]">
                  JavaScript
                </span>
                <span className="bg-[#F1F5F9] border border-[#E2E8F0] text-[#475569] text-[14px] px-3 py-1 rounded-[9px]">
                  React
                </span>
              </div>

              <div className="flex justify-between items-center text-[#94A3B8] text-[13px] pt-5">
                <div className="flex items-center gap-2">
                  <FiBookOpen />
                  <p>2 courses</p>
                </div>
                <div className="flex items-center gap-2">
                  <FiAward />
                  <p>6 yrs exp.</p>
                </div>
              </div>

              <button className="w-full border border-[#C7D2FE] text-[#4F39F6] font-semibold rounded-[11px] py-3 mt-5">
                View Profile
              </button>
            </div>
          </div>

          
          <div className="w-full md:w-full lg:w-1/3 bg-white border border-[#E2E8F0] rounded-2xl overflow-hidden shadow-sm">

            <div className="bg-dark-baby-purple flex flex-col items-center text-center py-9 px-4">
              <img
                src={Omar}
                className="w-22.5 h-22.5 rounded-full object-cover border-4 border-white"
              />
              <h3 className="text-[18px] font-bold text-[#0F172A] pt-4">
                Omar Hassan
              </h3>
              <p className="text-[16px] text-[#4F39F6] font-semibold">
                Business & Leadership Trainer
              </p>
            </div>

            <div className="p-7">
              <p className="text-[16px] text-[#64748B] leading-6.75">
                Omar is a certified business and leadership trainer with nine
                years of experience working with teams and organizations across
                the region.
              </p>

              <div className="flex flex-wrap gap-2 pt-4">
                <span className="bg-[#F1F5F9] border border-[#E2E8F0] text-[#475569] text-[14px] px-3 py-1 rounded-[9px]">
                  Leadership
                </span>
                <span className="bg-[#F1F5F9] border border-[#E2E8F0] text-[#475569] text-[14px] px-3 py-1 rounded-[9px]">
                  Communication
                </span>
                <span className="bg-[#F1F5F9] border border-[#E2E8F0] text-[#475569] text-[14px] px-3 py-1 rounded-[9px]">
                  Entrepreneurship
                </span>
              </div>

              <div className="flex justify-between items-center text-[#94A3B8] text-[13px] pt-5">
                <div className="flex items-center gap-2">
                  <FiBookOpen />
                  <p>2 courses</p>
                </div>
                <div className="flex items-center gap-2">
                  <FiAward />
                  <p>9 yrs exp.</p>
                </div>
              </div>

              <button className="w-full border border-[#C7D2FE] text-[#4F39F6] font-semibold rounded-[11px] py-3 mt-5">
                View Profile
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
