import { projects } from "@/Component/MyProject";
import Link from "next/link";
import { getwordSizes } from "@/Style/word";
import Image from "next/image";

export default function ProjectCard({ project }: { project: projects }) {
  return (
    <div className="w-50 aspect-square bg-gray-100 rounded-lg flex flex-col items-center justify-center group overflow-hidden shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
      <Link
        href={project.link}
        target="_blank"
        className="w-full h-full flex flex-col items-center justify-between"
      >
        <Image
          src={project.imgURL || "/img/project-placeholder.png"}
          alt={project.name}
          width={1}
          height={1}
          className="w-full h-[50%] flex items-center justify-center bg-gray-200 object-cover"
        />
        <div className="w-full h-[50%] flex flex-col items-center justify-center p-4">
          <h6
            className="text-lg font-semibold"
            style={{ fontSize: getwordSizes({ key: "h6" }) }}
          >
            {project.name}
          </h6>
          <p
            style={{ fontSize: getwordSizes({ key: "s" }) }}
            className="text-gray-600 pt-2 group-hover:text-blue-500 group-hover:underline transition-all duration-500"
          >
            View Project
          </p>
        </div>
      </Link>
    </div>
  );
}
