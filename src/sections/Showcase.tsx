import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

/** Must register plugin for gsap to know how to apply scroll related animation behaviour */
gsap.registerPlugin(ScrollTrigger);

const Showcase = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {
    const projects = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
    ];

    projects.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });

    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 3.0 }
    );
  }, []);

  return (
    <section id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/** LEFT */}
          <div className="first-project-wrapper" ref={project1Ref}>
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="Project 1" />
            </div>
            <div className="text-content">
              <h2>Project 1 - Small Description goes here!</h2>
              <p className="text-white-50 md:text-xl"></p>
            </div>
          </div>

          {/** RIGHT */}
          <div
            className="project-list-wrapper overflow-hidden"
            ref={project2Ref}
          >
            <div className="project">
              <div className="images-wrapper bg-[#ffefdb]">
                <img src="/images/project2.png" alt="Project 2" />
              </div>
              <div className="text-wrapper">
                <h2>Project 2 - Small Description</h2>
              </div>
            </div>

            <div className="project" ref={project3Ref}>
              <div className="images-wrapper bg-[#ffe7eb]">
                <img src="/images/project3.png" alt="Project 3" />
              </div>
              <div className="text-wrapper">
                <h2>Project 3 - Small Description</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
