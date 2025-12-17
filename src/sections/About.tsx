import TitleHeader from "../components/TitleHeader";
import { abilities } from "../constants";

const About = () => {
  return (
    <section id="about" className="w-full min-h-screen py-30">
      <TitleHeader title="About Me" />
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
            Full-stack software developer with over 2.5 years of professional
            software development experience and over 5 years of quality
            assurance experience. I have a proven track record of delivering
            enterprise web applications in the legal, federal law enforcement,
            and customs industries as well as conducting quality assurance in
            the oil & gas and chemicals industries.
          </p>
          <p className="text-xl">
            Expertise in developing application front-ends by utilizing
            JavaScript / TypeScript and common frameworks like Angular, React
            and Vue. Specialized in programming in Java with Spring Boot or C#
            with .NET to create RESTful API services to bridge the connection
            between front-end frameworks and databases. Proficient in creating,
            modifying, and streamlining relational SQL and document based NoSQL
            database schema.
          </p>
          <p className="text-xl">
            Additionally, I have practical experience managing, configuring and
            utilizing cloud service providers. Specifically I have expertise
            with AWS offerings such as EC2, S3, IAM, CloudWatch, and Elastic
            Beanstalk as well as Azure / Azure DevOps and Google Cloud Platform.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
