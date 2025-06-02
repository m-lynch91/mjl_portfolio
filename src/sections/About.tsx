import TitleHeader from "../components/TitleHeader";
import { abilities } from "../constants";

const About = () => {
  return (
    <section id="about" className="w-full min-h-screen py-30">
      <TitleHeader title="About Me"/>
      <div className="flex flex-col max-w-[1240px] w-screen m-auto">
        <div className="md:flex md:flex-row md:m-auto py-5">
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
        <div className="grid grid-rows-3 p-10 gap-10">
          <p className="text-xl">
            I'm a full-stack software developer with over 2 years of
            professional software development experience and over 5 years of
            quality assurance experience. I have a proven track record of
            delivering enterprise web applications in the federal law
            enforcement and international trade and customs industries. I'm
            passionate about solving problems across every layer of the tech
            stack.
          </p>
          <p className="text-xl">
            Expertise in developing application front-ends by programming in
            JavaScript and TypeScript with React. Specialized in programming in
            Java with Spring Boot, C# with .NET, and NodeJs to create RESTful
            API services to connect the front and back end layers. Proficient in
            creating, modifying, and streamlining relational SQL and document
            based NoSQL database schema.
          </p>
          <p className="text-xl">
            With a career of quality assurance behind me and a strong academic
            background in computer science, I am passionate about mastering
            different technologies. I am proficient in multi-layered
            architectures, utilizing the perfect data structures and algorithms
            and taking advantage of the right software design patterns.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
