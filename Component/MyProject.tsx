import { getwordSizes } from "@/Style/word";
import ProjectCard from "@/Component/ProjectCard";

export type projects = {
  id: number;
  name: string;
  imgURL?: string;
  link: string;
};

const projectlist: projects[] = [
  {
    id: 0,
    name: "Comic Showcase",
    link: "",
  },
];

export default function MyProject() {
  return (
    <section
      id="my-project"
      className="flex flex-col gap-4 items-center justify-center w-full bg-white text-black md:pt-8 md:pb-40 pt-4 pb-20"
    >
      <h4
        style={{ fontSize: getwordSizes({ key: "h4" }) }}
        className=" font-bold"
      >
        My Projects
      </h4>
      <div className="w-full max-w-127.5 h-px bg-gray-300"></div>
      <div className="w-full max-w-127.5 flex flex-row justify-center items-center gap-6">
        {projectlist.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))} 
      </div>
      <p
        style={{ fontSize: getwordSizes({ key: "s" }) }}
        className="max-w-127.5 text-left pt-8"
      >
        Dưới đây là một số dự án mà mình đã thực hiện, bao gồm cả dự án cá nhân
        và dự án nhóm. Mỗi dự án đều có những thách thức riêng và mình đã học
        được rất nhiều từ quá trình phát triển chúng.
      </p>
    </section>
  );
}
