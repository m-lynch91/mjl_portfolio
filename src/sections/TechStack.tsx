import TechIcon from "../components/models/TechIcon";
import TitleHeader from "../components/TitleHeader";
import { techStackImgs } from "../constants";

const TechStack = () => {
  return (
    <div id="skills" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="My Preferred Tech Stack"
          sub="The Skills I Bring to the Table"
        />

        <div className="tech-grid">
          {techStackImgs.map((icon) => (
            <div
              key={icon.name}
              className="card-border tech-card overflow-hidden group xl:rounded-full rounded-sm"
            >
              <div className="tech-card-content">
                <div className="tech-icon-wrapper">
                  <img src={icon.imgPath} />
                </div>
                <p>{icon.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
