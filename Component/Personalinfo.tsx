import { getwordSizes } from "@/Style/word";
import Link from "next/link";
import Image from "next/image";
import SocialMedia from "@/Component/SocialMedia";

export default function Personalinfo() {
  return (
    <section id="personal-info" className="flex flex-row flex-wrap md:gap-10 gap-4 items-center justify-center w-full bg-white text-black md:py-8 py-4">
      <Image
        src="/img/Profile.png"
        alt="Profile Picture"
        width={190}
        height={190}
        className="aspect-square rounded-full border-4 flex flex-col items-center shadow-xl justify-center overflow-hidden object-cover hover:scale-105 hover:shadow-xl transition-all duration-300"
      />
      <div className="flex flex-col gap-2 flex-wrap  justify-center">
        <h1
          style={{ fontSize: getwordSizes({ key: "h4" }) }}
          className="font-bold group"
        >
          Xin chào, mình tên{" "}
          <span className="transition-all duration-500 max-lg:text-blue-500 max-lg:underline group-hover:text-blue-500 group-hover:underline">
            Nam!
          </span>
        </h1>
        <div className="max-w-127.5 grid grid-cols-2 max-sm:grid-cols-1 md:gap-4 gap-2">
          <p style={{ fontSize: getwordSizes({ key: "s" }) }} className="">
            Họ và tên: Thái Hoằng Nam
          </p>
          <p
            style={{ fontSize: getwordSizes({ key: "s" }) }}
            className="flex flex-row gap-1 flex-nowrap"
          >
            Email:
            <Link
              href="mailto:thaihoangnam13@gmail.com"
              className="text-blue-500 hover:underline"
            >
              thaihoangnam13@gmail.com
            </Link>
          </p>
          <p style={{ fontSize: getwordSizes({ key: "s" }) }}>
            Số điện thoại: 036 284 0690
          </p>
          <p style={{ fontSize: getwordSizes({ key: "s" }) }}>
            Địa chỉ: Đ.Phạm Thế Hiển, P.Bình Đông, Tp.HCM
          </p>
          <p style={{ fontSize: getwordSizes({ key: "s" }) }}>
            Ngày tháng năm sinh: 02/11/2004
          </p>
          <p style={{ fontSize: getwordSizes({ key: "s" }) }}>
            Nghề nghiệp: Học Sinh THPT
          </p>
          {/* Thêm các thông tin khác vd: Github, Gmail*/}
          <SocialMedia />
        </div>
      </div>
    </section>
  );
}
