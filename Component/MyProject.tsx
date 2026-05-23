import { getwordSizes } from "@/Style/word";

export default function MyProject() {
  return (
    <section className="flex flex-col gap-4 items-center justify-center w-full bg-white text-black md:py-8 py-4">
      <h4
        style={{ fontSize: getwordSizes({ key: "h4" }) }}
        className=" font-bold"
      >
        My Projects
      </h4>
      <p
        style={{ fontSize: getwordSizes({ key: "s" }) }}
        className="max-w-127.5 text-left"
      >
        Dưới đây là một số dự án mà mình đã thực hiện, bao gồm cả dự án cá nhân
        và dự án nhóm. Mỗi dự án đều có những thách thức riêng và mình đã học
        được rất nhiều từ quá trình phát triển chúng.
      </p>
    </section>
  );
}
