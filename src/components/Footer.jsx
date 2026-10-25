
import React from "react";
import { FiMail } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiYoutube } from "react-icons/fi";
import { PiGraduationCap } from "react-icons/pi";

export default function Footer() {
  return (
    <div className="w-full bg-[#0F172A]">
      <div className="container mx-auto px-4 md:px-15 lg:px-30 py-14">

        <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap justify-between gap-10">

          <div className="w-full md:w-[45%] lg:w-1/4">
            <div className="flex items-center gap-2">
              <div className="bg-[#635BFF] w-8 h-8 rounded-[10px] flex justify-center items-center">
                <PiGraduationCap className="text-white text-[18px]" />
              </div>
              <h3 className="text-white text-[18px] font-bold">
                SkillUp Academy
              </h3>
            </div>

            <p className="text-[#94A3B8] text-[14px] leading-5.75 pt-4">
              Practical technology and business courses built around
              real-world projects, delivered by experienced instructors.
            </p>

            <div className="flex gap-3 pt-5">
              <a href="#" className="bg-[#1E293B] w-8 h-8 rounded-full flex justify-center items-center">
                <FiTwitter className="text-[#94A3B8]" />
              </a>
              <a href="#" className="bg-[#1E293B] w-8 h-8 rounded-full flex justify-center items-center">
                <FiFacebook className="text-[#94A3B8]" />
              </a>
              <a href="#" className="bg-[#1E293B] w-8 h-8 rounded-full flex justify-center items-center">
                <FiInstagram className="text-[#94A3B8]" />
              </a>
              <a href="#" className="bg-[#1E293B] w-8 h-8 rounded-full flex justify-center items-center">
                <FiYoutube className="text-[#94A3B8]" />
              </a>
            </div>
          </div>

          <div className="w-full md:w-[45%] lg:w-1/4">
            <h4 className="text-white text-[12px] font-semibold uppercase tracking-[1px]">
              Quick Links
            </h4>

            <div className="flex flex-col gap-4 pt-6 text-[#94A3B8] text-[14px]">
              <a href="#">Home</a>
              <a href="#">Courses</a>
              <a href="#">Instructors</a>
              <a href="#">About Us</a>
              <a href="#">Contact</a>
            </div>
          </div>

          <div className="w-full md:w-[45%] lg:w-1/4">
            <h4 className="text-white text-[12px] font-semibold uppercase tracking-[1px]">
              Categories
            </h4>

            <div className="flex flex-col gap-4 pt-6 text-[#94A3B8] text-[14px]">
              <a href="#">Frontend</a>
              <a href="#">WordPress</a>
              <a href="#">Backend</a>
              <a href="#">Leadership</a>
              <a href="#">Entrepreneurship</a>
            </div>
          </div>


          <div className="w-full md:w-[45%] lg:w-1/4">
            <h4 className="text-white text-[12px] font-semibold uppercase tracking-[1px]">
              Contact
            </h4>

            <div className="flex items-center gap-2 pt-6 text-[#94A3B8] text-[14px]">
              <FiMail />
              <p>info@skillupacademy.com</p>
            </div>

            <p className="text-[#64748B] text-[14px] pt-4">
              Available Sun - Thu, 9am - 5pm
            </p>
          </div>

        </div>

        <div className="border-t border-[#1E293B] mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-[#475569] text-[12px]">
            © 2026 SkillUp Academy. All rights reserved.
          </p>

          <div className="flex gap-6 text-[#475569] text-[12px]">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
          </div>

        </div>
      </div>
    </div>
  );
}
