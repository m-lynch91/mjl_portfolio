import TitleHeader from "../components/TitleHeader";
import { techStackImgs } from "../constants";

const Skills = () => {
  return (
    <section id="skills" className="full-section">
      <div className="w-full min-h-screen py-50">
        <div>
          <TitleHeader title="My Tech Stack"/>

          <div className="max-w-[1240px] w-screen m-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8 p-10">
            {techStackImgs.map((icon) => (
              <div
                key={icon.name}
                className="card-border rounded-xl p-2 flex flex-col gap-4"
              >
                <div className="p-6 shadow-gray-600 shadow-lg rounded-xl hover:scale-105 ease-in duration-450">
                  <div className="grid grid-cols-2 gap-4 justify-center items-center">
                    <div className="m-auto">
                      <img src={icon.imgPath} width={64} height={64}/>
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
    </section>
  );
};

export default Skills;
