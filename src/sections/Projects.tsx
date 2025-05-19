import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

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
      
    >
      <section>
        <div>
          <div ref={project1Ref} className="p-10">
            <div>
              <img src="/images/coming-soon.jpg" alt="Project 1" />
            </div>
            <div>
              <h2>Project 1 - Coming Soon!</h2>
            </div>
          </div>
          <div ref={project2Ref} className="p-10">
            <div>
              <img src="/images/project-portfolio.png" alt="Project 2" />
            </div>
            <div>
              <h2>Project 2 - My Portfolio</h2>
            </div>
          </div>
          <div ref={project3Ref} className="p-10">
            <div>
              <img src="/images/server.png" alt="Project 3" />
            </div>
            <div>
              <h2>Project 3 - My Homelab</h2>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Projects;
