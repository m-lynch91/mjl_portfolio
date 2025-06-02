import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TitleHeader from "../components/TitleHeader";

/** Must register plugin for gsap to know how to apply scroll related animation behaviour */
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 3.0 }
    );

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
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="w-full min-h-screen py-20 md:p-20"
    >
      <TitleHeader title="Projects"/>
      <div className="md:grid md:grid-cols-2 p-10">
        <div ref={project1Ref} className="p-10">
          <div>
            <h2 className="text-xl font-semibold pb-2">Project 1 - My Homelab</h2>
          </div>
          <div className="w-full aspect-full overflow-hidden rounded-lg">
            <img 
              src="/images/server.png" 
              alt="Project 1" 
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
        <div ref={project2Ref} className="p-10">
          <div>
            <h2 className="text-xl font-semibold pb-2">Project 2 - My Portfolio</h2>
          </div>
          <div className="w-full aspect-full overflow-hidden rounded-lg">
            <img 
              src="/images/project-portfolio.png" 
              alt="Project 2" 
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
        <div ref={project3Ref} className="p-10">
          <div>
            <h2 className="text-xl font-semibold pb-2">Project 3 - BiteLog API</h2>
          </div>
          <div className="w-full aspect-full overflow-hidden rounded-lg">
            <img 
              src="/images/bitelog-api.png" 
              alt="Project 3" 
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
