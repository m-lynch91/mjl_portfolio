import GlowCard from "../components/GlowCard";
import TitleHeader from "../components/TitleHeader";
import { expCards } from "../constants";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  useGSAP(() => {
    // fade the experience text in
    gsap.utils.toArray<HTMLElement>(".expText").forEach((text) => {
      gsap.from(text, {
        xPercent: 0,
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: text,
          start: "top 60%",
        },
      });
    });
  }, []);

  return (
    <section id="experience" className="full-section">
      <div className="section-container">
        <div>
          <TitleHeader
            title="Professional Work Experience"
            sub="My Career Overview"
          />
          {expCards.map((card, index) => (
            <div key={card.title} className="p-10">
              <div className="flex items-start">
                <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                  <div className="timeline-logo">
                    <img src={card.logoPath} alt="logo" />
                  </div>
                  <div>
                    <h1 className="font-semibold text-4xl">{card.title}</h1>
                    <p className="my-5 text-2xl text-white-50">{card.date}</p>
                    <p className="text-[#839cb5]">Responsibilities</p>
                    <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
                      {card.responsibilities.map((responsibility) => (
                        <li key={responsibility} className="text-lg">
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
