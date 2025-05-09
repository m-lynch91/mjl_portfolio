import AnimmatedCounter from "../components/AnimatedCounter";
import { abilities } from "../constants";

const About = () => {
  return (
    <div id="about" className="full-section">
      <div className="section-container">
        <div>
          <div className="mx-auto py-5 grid-3-cols">
            {abilities.map((item) => (
              <div
                key={item.title}
                className="card-border rounded-xl p-8 flex flex-col gap-4"
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
          <AnimmatedCounter />
        </div>
      </div>
    </div>
  );
};

export default About;
