import TitleHeader from "../components/TitleHeader";
import { techStackImgs } from "../constants";

const TechStack = () => {
  return (
    <div id="skills" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader title="My Tech Stack" sub="Skills" />

        <div className="tech-stack">
          <div className="tech-stack-grid">
            {techStackImgs.map((icon) => (
              <div
                key={icon.name}
                className="card-border rounded-xl p-2 flex flex-col gap-4"
              >
                <div className="p-6 shadow-white-50 shadow-lg rounded-xl hover:scale-105 ease-in duration-50">
                  <div className="grid grid-cols-2 gap-4 justify-center items-center">
                    <div className="m-auto">
                      <img src={icon.imgPath} width={64} height={64} />
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <p className="m-auto text-white-50 font-semibold">
                        {icon.name}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
