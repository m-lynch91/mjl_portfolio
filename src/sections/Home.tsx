import { words } from "../constants";
import { Word } from "../types/Word";

import Button from "../components/Button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Home = () => {
  /**
   * GSAP animation for the hero section
   * y: change in why position gives the effect of moving in from the bottom
   * opacity: 0 to 1 gives the effect of fading in
   * stagger: delay between each element in the animation
   */
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duraction: 0.5, ease: "power2.inOut" }
    );
  });

  return (
    <section id="home" className="w-full h-screen items-center">
      <div className="w-full h-full mx-auto flex justify-center items-center">
        <header>
          <div className="flex flex-col gap-7">
            <div className="flex flex-col justify-center md:text-[60px] text-[30px] font-semibold relative z-10 pointer-events-none">
              <h1>
                Shaping
                <span className="absolute pt-0 px-2 md:px-5 py-[30px] h-[48px] md:h-[78px] md:translate-y-1 translate-y-0 overflow-hidden">
                  <span className="wrapper">
                    {words.map((word: Word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real Projects</h1>
            </div>
            <Button
              text="See my work"
              className="md:w-80 md:h-16 w-60 h-12"
              id="projects"
            />
          </div>
        </header>
      </div>
    </section>
  );
};

export default Home;
