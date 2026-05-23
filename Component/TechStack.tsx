import { getwordSizes } from "@/Style/word";
import Carousel from "@/Component/Carousel";
import Image from "next/image";

export type Techs = {
  id: number;
  name: string;
  iconURL: string;
};

const tech: Techs[] = [
  {
    id: 0,
    name: "JavaScript",
    iconURL: "/img/javascript.svg",
  },
  {
    id: 1,
    name: "TypeScript",
    iconURL: "/img/typescript.svg",
  },
  {
    id: 2,
    name: "React",
    iconURL: "/img/react.svg",
  },
  {
    id: 3,
    name: "Next.js",
    iconURL: "/img/nextjs.svg",
  },
  {
    id: 4,
    name: "Tailwind CSS",
    iconURL: "/img/tailwind.svg",
  },
  {
    id: 5,
    name: "HTML",
    iconURL: "/img/html.svg",
  },
  {
    id: 6,
    name: "CSS",
    iconURL: "/img/css-3.svg",
  },
];

export default function TechStack() {
  return (
    <section className="flex flex-col flex-wrap gap-4 items-center justify-center w-full bg-white text-black md:py-8 py-4">
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
      </p>
      <div>
        <Carousel tech={tech} />
      </div>
      <p
        style={{ fontSize: getwordSizes({ key: "s" }) }}
        className="max-w-127.5 text-left"
      >
        Mình luôn sẵn sàng học hỏi và làm quen với các công nghệ mới để nâng cao
        kỹ năng và đáp ứng tốt hơn nhu cầu của dự án.
      </p>
    </section>
  );
}
