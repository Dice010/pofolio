import { getwordSizes } from "@/Style/word";
import Image from "next/image";

export default function TechStack() {
  return (
    <section
      id="about-us"
      className="flex flex-col flex-wrap gap-4 items-center justify-center w-full bg-white text-black md:py-8 py-4"
    >
      <h4
        style={{ fontSize: getwordSizes({ key: "h4" }) }}
        className=" font-bold"
      >
        Tech Stack
      </h4>
      <p
        style={{ fontSize: getwordSizes({ key: "s" }) }}
        className="max-w-127.5 text-left"
      >
        Mình đã có kinh nghiệm làm việc với một số công nghệ và ngôn ngữ lập
        trình, bao gồm:
        <div>

        </div>
        Mình luôn sẵn sàng học hỏi và làm quen với các công nghệ mới để nâng cao
        kỹ năng và đáp ứng tốt hơn nhu cầu của dự án.
      </p>
    </section>
  );
}
