import { getwordSizes } from "@/Style/word";
import GradientBanner from "@/Component/GradientBanner";
import PersonalInfo from "@/Component/Personalinfo";
import AboutUs from "@/Component/AboutUs";
import TechStack from "@/Component/TechStack";
import MyProject from "@/Component/MyProject";

export default function Home() {
  return (
    <section className="flex flex-col items-center w-dvw bg-white ">
      <GradientBanner>
        <h3 className="text-left" style={{ fontSize: getwordSizes({ key: "h3" }) }}>Mình là <span className="text-blue-500 underline">Nam</span>,</h3>
        <h4 className="text-left" style={{ fontSize: getwordSizes({ key: "h4" }) }}>
          Mình rất vui khi bạn đã ghé thăm Portfolio của mình!
        </h4>
      </GradientBanner>
      <div className="w-full max-w-204.75 overflow-hidden px-2">
        <PersonalInfo />
        <AboutUs />
        <TechStack />
        <MyProject />
       </div>
    </section>
  );
}
