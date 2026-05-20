import NavItem from "@/Component/NavItems";
import { useState } from "react";


type navbartag = {
  id: number;
  name: string;
  link?: string;
};

const navbartags: navbartag[] = [
  {
    id: 0,
    name: "About Us",
    link: "",
  },
  {
    id: 1,
    name: "CV",
    link: "",
  },
  {
    id: 2,
    name: "My Product",
    link: "",
  },
  {
    id: 3,
    name: "Contact",
    link: "",
  },
];

export default function Navbar() {
    const [active, setActive] = useState(false);
    const ToggleEvent = () => {
        setActive(!active);
    };
  return (
    <section className="flex flex-row bg-cyan-700 justify-center items-center overflow-hidden">
        <ul className="flex flex-row text-white text-md justify-between min-w-[40%]">
          {navbartags.map((tag) => (
            <NavItem
              key={tag.id}
              id={tag.id}
              label={tag.name}
              link={tag.link || "#"}
            />
          ))}
        </ul>
    </section>
  );
}
