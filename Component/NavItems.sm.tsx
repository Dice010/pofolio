import Link from "next/link";
import { getwordSizes } from "@/Style/word";

type props = {
  id: number;
  label: string;
  link: string;
  onClick?: () => void;
};

export default function NavItem(props: props) {
  const isEven = props.id % 2 === 0;
  
  return (
    <li className="w-full h-full text-center">
      <Link
        href={props.link}
        aria-label={props.label}
        style={{ fontSize: getwordSizes({ key: "h5" }) }}
        className={`inline-block px-4 py-2 w-full ${isEven ? "bg-[#0e1939]" : "bg-[#131e42]"}`}
        onClick={props.onClick}
      >
        {props.label}
      </Link>
    </li>
  );
}
