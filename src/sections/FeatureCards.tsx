import { abilities } from "../constants";

/**
 * A component to highlight the top strengths as a developer. Each card acts as a
 * compact summary of each of a developers core competancies.
 */
const FeatureCards = () => {
  return (
    <div className="w-full padding-g-lg">
      <div className="mx-auto grid-3-cols">
        {/* TODO: go in and change the constants values to something more suitable to you */}
        {abilities.map((item) => (
          <div key={item.title} className="card-border rounded-xl p-8 flex flex-col gap-4">
            <div className="size-14 flex items-center justify-center rounded-full">
                <img src={item.imgPath} alt={item.title}/>
            </div>
            <h3 className="text-white text-2xl font-semibold">{item.title}</h3>
            <p className="text-white-50 text-lg">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCards;
