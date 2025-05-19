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
    <section id="experience">
      <div >
        {/* <TitleHeader title="My Experience" sub="Career Path" /> */}
        
        <div className="mt-16 grid grid-rows-3 gap-10 p-10">
          {expCards.map((card) => (
            <div key={card.title} className="card-border rounded-xl p-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-24 w-16">
                  <img src={card.logoPath} alt="logo" className="w-full" />
                </div>
                <div className="flex-1">
                  <h1 className="font-semibold text-2xl md:text-4xl">{card.title}</h1>
                  <p className="text-xl md:text-2xl text-white-50 mt-2">{card.date}</p>
                  <p className="text-[#839cb5] mt-6 mb-4">Responsibilities</p>
                  <ul className="list-disc ms-5 flex flex-col gap-4">
                    {card.responsibilities.map((responsibility) => (
                      <li key={responsibility} className="text-white-50 text-base md:text-lg">
                        {responsibility}
                      </li>
                    ))}
                  </ul>
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
