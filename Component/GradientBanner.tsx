import { getwordSizes } from "@/Style/word";
import { ReactNode } from "react";

type GradientBannerProps = {
  children?: ReactNode;
};

export default function GradientBanner({ children }: GradientBannerProps) {
  return (
    <div className="w-full aspect-video flex items-center justify-center overflow-hidden relative group">
      {/* Thẻ STYLE nhúng trực tiếp để xử lý keyframes chuyển động gradient mượt mà */}
      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animated-gradient {
          background: linear-gradient(45deg, #0B132B, #1C2541, #3A506B, #5BC0BE, #6FFFE9);
          background-size: 400% 400%;
          animation: gradientShift 20s ease infinite;
        }
      `}</style>

      {/* Lớp nền Gradient động */}
      <div className="absolute inset-0 animated-gradient" />

      {/* Vòng tròn decor ẩn hiện phía sau để tạo chiều sâu không gian */}
      <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-cyan-400/20 rounded-full blur-3xl content-empty pointer-events-none transition-transform duration-1000 group-hover:scale-125" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl content-empty pointer-events-none transition-transform duration-1000 group-hover:-translate-x-10" />

      <div
        className="relative text-center p-8 md:p-12 rounded-2xl max-w-2xl mx-4
                      transition-all duration-500 ease-out
                      hover:-translate-y-1"
      >
        <div
          className="relative font-extrabold tracking-wide drop-shadow-sm select-none
                    bg-clip-text text-white/75"
          style={{ fontSize: getwordSizes({ key: "h2" }) }}
        >
          {children || "Welcome to My Portfolio"}
        </div>
      </div>
    </div>
  );
}
