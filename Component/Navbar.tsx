"use client";

import NavItem from "@/Component/NavItems";
import NavItemSm from "@/Component/NavItems.sm";
import { useState } from "react";
import { getwordSizes } from "@/Style/word";

type navbartag = {
  id: number;
  name: string;
  link?: string;
};

const navbartags: navbartag[] = [
  {
    id: 0,
    name: "About Us",
    link: "/AboutUs",
  },
  {
    id: 1,
    name: "CV",
    link: "/",
  },
  {
    id: 2,
    name: "My Product",
    link: "/MyProduct",
  },
  {
    id: 3,
    name: "Contact",
    link: "/Contact",
  },
];


export default function Navbar() {
  const [active, setActive] = useState(false);
  const ToggleEvent = () => {
    setActive(!active);
  };
  return (
    <section className="flex flex-row bg-[#0B132B] border-b border-white/5 sm:justify-center items-center relative">
      <div className="max-sm:hidden">
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
      </div>
      <div className="sm:hidden w-full">
        <div className="flex flex-row justify-start items-center w-full px-2">
          <button
            className="text-white/90 p-2 hover:text-cyan-400 active:scale-95 transition-all duration-200 cursor-pointer select-none "
            style={{ fontSize: getwordSizes({ key: "h3" }) }}
            onClick={ToggleEvent}
          >
            {active ? "\u2715" : "\u2630"}
          </button>
          {active && (
            <ul className="absolute z-40 top-full left-0 right-0 flex flex-col bg-[#0B132B]/95 backdrop-blur-xl text-white text-md shadow-[0_15px_30px_rgba(0,0,0,0.5)] border-b border-white/10 rounded-b-xl overflow-hidden">
              {navbartags.map((tag) => (
                <NavItemSm
                  key={tag.id}
                  id={tag.id}
                  label={tag.name}
                  link={tag.link || "#"}
                  onClick={ToggleEvent}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
