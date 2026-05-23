"use client";

import { getwordSizes } from "@/Style/word";
import { useState } from "react";
import Image from "next/image";

export default function AboutUs() {
  const [active, setActive] = useState(false);
  const ToggleEvent = () => {
    setActive(!active);
  };
  return (
    <section id="about-us" className="flex flex-row flex-wrap md:gap-10 gap-4 items-center justify-center w-full bg-white text-black md:py-8 py-4">
      <div>
        <button
          className="group relative inline-block aspect-square w-50 cursor-pointer lg:brightness-50 hover:translate-y-2 hover:brightness-100 transition-all duration-500"
          onClick={ToggleEvent}
        >
          <div className="absolute z-0 rounded-full inset-0 bottom-0 left-0 right-0 top-30 bg-gray-500"></div>
          <div
            className={`bg-red-500 absolute z-0 rounded-b-3xl left-5 right-5 rounded-t-2xl inset-0 bottom-8 ${active ? "top-21" : "top-15"} group-hover:top-21`}
          ></div>
          <div
            className={`bg-[#ea6e6e] absolute z-0 rounded-full left-5 right-5 inset-0 ${active ? "top-20 bottom-20" : "top-15 bottom-25"} group-hover:top-20 group-hover:bottom-20`}
          ></div>
          <Image
            src="/img/pointer.svg"
            alt="Description"
            width={100}
            height={100}
            className={`absolute z-10 inset-15 top-20 opacity-0 translate-x-5 translate-y-5 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500`}
          />
        </button>
      </div>
      <div className="flex flex-col gap-2 flex-wrap justify-center">
        <h5
          style={{ fontSize: getwordSizes({ key: "h4" }) }}
          className="font-bold text-left"
        >
          Về bản thân mình,
          <div className="inline-block w-fit relative">
            <Image
              src="/img/light.svg"
              alt="Description"
              width={50}
              height={50}
              className={`relative z-20 inline-block`}
            />
            <div
              className={`absolute z-0 rounded-full aspect-square w-9 opacity-60 inset-1.75 -top-0.5 ${active ? "bg-yellow-300" : ""}`}
            ></div>
          </div>
        </h5>
        <p
          style={{ fontSize: getwordSizes({ key: "s" }) }}
          className="max-w-127.5 text-left"
        >
          Mình là Thái Hoằng Nam, mình học song hành THPT và đào tạo nghề CNTT
          từ sớm, và mình đã xây dựng được tư duy lập trình và bộ kỹ năng{" "}
          <span className={active ? `text-blue-500 underline` : ``}>
            chuyên về Front-End với React, Next.js và TypeScript.
          </span>{" "}
          Với tinh thần kỷ luật và tư duy hướng kết quả, mình luôn biến áp lực
          thành động lực khi có mục tiêu rõ ràng.{" "}
          <span className={active ? `text-blue-500 underline` : ``}>
            Sẵn sàng học hỏi, không ngại thử thách và mong muốn được đóng góp
            giá trị thực tế trong các dự án phần mềm chuyên nghiệp.
          </span>
        </p>
      </div>
    </section>
  );
}
