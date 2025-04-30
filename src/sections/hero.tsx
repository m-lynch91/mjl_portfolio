import { words } from "../constants";
import { Word } from "../types/Word";

import Button from "../components/Button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import AnimmatedCounter from "../components/AnimatedCounter";

const Hero = () => {
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
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="background"></img>
      </div>

      <div className="hero-layout">
        {/* LEFT SIDE: hero content */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Shaping
                <span className="slide">
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
              <h1>that Deliver Results</h1>
            </div>

            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
              Hey! I'm Mike, a software developer based in Toronto, with a
              passion for web development!
            </p>

            <Button
              className="md:w-80 md:h-16 w-60 h-12"
              id="button"
              text="See my work"
            />
          </div>
        </header>

        {/* RIGHT SIDE: */}

      </div>
      
      <AnimmatedCounter />

    </section>
  );
};

export default Hero;
