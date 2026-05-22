"use client";

import Link from "next/link";
import React from "react";

type SocialMediaLink = {
  name: string;
  url: string;
  mobileBgClass: string; // Màu nền hiện sẵn trên mobile
  desktopHoverBgClass: string; // Hiệu ứng màu nền khi hover trên desktop
  mobileIconClass: string; // Màu icon hiện sẵn trên mobile
  desktopHoverIconClass: string; // Hiệu ứng màu icon khi hover trên desktop
  svgIcon: React.ReactNode;
};

const socialMediaLinks: SocialMediaLink[] = [
  {
    name: "GitHub",
    url: "https://github.com",
    mobileBgClass: "bg-slate-800 border-slate-700",
    desktopHoverBgClass:
      "md:bg-white/5 md:border-white/10 md:hover:bg-slate-800 md:hover:border-slate-700",
    mobileIconClass: "text-white stroke-white",
    desktopHoverIconClass:
      "md:text-slate-400/80 md:group-hover:text-white md:group-hover:stroke-white",
    svgIcon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-full h-full"
      >
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
      </svg>
    ),
  },
  {
    name: "Gmail",
    url: "https://gmail.com",
    mobileBgClass: "bg-red-950/40 border-red-500/30",
    desktopHoverBgClass:
      "md:bg-white/5 md:border-white/10 md:hover:bg-red-950/40 md:hover:border-red-500/30",
    mobileIconClass: "text-[#EA4335] stroke-[#EA4335]",
    desktopHoverIconClass:
      "md:text-slate-400/80 md:group-hover:text-[#EA4335] md:group-hover:stroke-[#EA4335]",
    svgIcon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-full h-full"
      >
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
      </svg>
    ),
  },
  {
    name: "Zalo",
    url: "https://zalo.me",
    mobileBgClass: "bg-blue-950/40 border-blue-500/30",
    desktopHoverBgClass:
      "md:bg-white/5 md:border-white/10 md:hover:bg-blue-950/40 md:hover:border-blue-500/30",
    mobileIconClass: "text-[#0068FF] stroke-[#0068FF]",
    desktopHoverIconClass:
      "md:text-slate-400/80 md:group-hover:text-[#0068FF] md:group-hover:stroke-[#0068FF]",
    svgIcon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-full h-full"
      >
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
      </svg>
    ),
  },
];

export default function SocialMedia() {
  return (
    <div className="flex flex-row gap-6 justify-left items-center">
      {socialMediaLinks.map((link) => (
        <Link
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          /* 
            - Mặc định (Mobile): Hiện sẵn màu nền riêng biệt tương ứng từng icon (link.mobileBgClass)
            - Từ màn hình md trở lên: Reset về nền tối mờ ban đầu và bật lại hiệu ứng hover (link.desktopHoverBgClass)
          */
          className={`group relative flex items-center justify-center w-12 h-12 rounded-xl 
                     transition-all duration-300 ease-out
                     md:hover:-translate-y-1 md:hover:shadow-[0_8px_20px_rgba(11,19,43,0.4)]
                     ${link.mobileBgClass} ${link.desktopHoverBgClass}`}
        >
          {/* KHUNG CHỨA SVG: Trên mobile hiện sẵn màu thương hiệu, trên desktop giữ màu xám và đổi khi hover */}
          <div
            className={`w-5 h-5 stroke-current transition-all duration-300 md:group-hover:scale-110 
                       ${link.mobileIconClass} ${link.desktopHoverIconClass}`}
          >
            {link.svgIcon}
          </div>

          {/* TOOLTIP HIỂN THỊ TÊN KHI HOVER (Chỉ kích hoạt mượt mà trên desktop thông qua group-hover) */}
          <span
            className="absolute bottom-full mb-3 px-2.5 py-1 rounded-md text-xs font-semibold tracking-wider
                       bg-slate-900 border border-white/10 text-cyan-400 whitespace-nowrap shadow-md
                       pointer-events-none select-none
                       opacity-0 translate-y-1 scale-95
                       md:group-hover:opacity-100 md:group-hover:translate-y-0 md:group-hover:scale-100 
                       transition-all duration-200 ease-out"
          >
            {link.name}
            <span
              className="absolute top-full left-1/2 -translate-x-1/2 -mt-1.25 
                         border-4 border-transparent border-t-slate-900 content-empty"
            />
          </span>
        </Link>
      ))}
    </div>
  );
}
