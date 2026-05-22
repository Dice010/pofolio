import Link from "next/link";
import { getwordSizes } from "@/Style/word";

type props = {
  id: number;
  label: string;
  link: string;
};

export default function NavItem(props: props) {
  return (
    <li className="w-fit h-full">
      <Link
        href={props.link}
        aria-label={props.label}
        style={{ fontSize: getwordSizes({ key: "h5" }) }}
        className="inline-block px-4 h-full hover:bg-linear-to-t hover:from-[#0B132B] hover:to-[#1b2e68] transition-all duration-300"
      >
        {props.label}
      </Link>
    </li>
  );
}
