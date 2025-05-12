import AnimmatedCounter from "../components/AnimatedCounter";
import { abilities } from "../constants";

const About = () => {
  return (
    <div id="about" className="full-section">
      <div className="section-container">
        <div className="flex flex-col max-w-[1240px] w-screen m-auto md:grid grid-rows-2 gap-10">
          <div className="max-w-[1240px] w-screen m-auto md:grid grid-cols-3">
            {abilities.map((item) => (
              <div
                key={item.title}
                className="card-border rounded-xl p-6 m-2 flex flex-col gap-2"
              >
                <div className="size-14 flex items-center justify-center rounded-full">
                  <img src={item.imgPath} alt={item.title} />
                </div>
                <h3 className="text-white text-2xl font-semibold">
                  {item.title}
                </h3>
                <p className="text-white-50 text-lg">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="items-start flex px-5">
            <p className="text-2xl">
              I’m a Toronto-based software developer who pivoted from a Quality
              Assurance laboratory technician—where I spent over five years
              working under tight deadlines to certify products met the highest
              standards—into the world of code. After earning my Computer
              Programming & Analysis diploma in December 2024, I’ve spent the
              past two years architecting and delivering enterprise-scale web
              applications, honing my full-stack chops in both academic and
              professional settings. I thrive building resilient back-ends with
              Java and Spring Boot and crafting dynamic user interfaces with
              React, Vue, or Angular. On top of that, I’ve applied Node.js,
              C#/.NET, C++, and SQL across real-world projects—bringing the same
              meticulous attention to detail and commitment to on-time delivery
              from my QA days into every layer of the stack.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
