import { abilities } from "../constants";

const FeatureCards = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="px-50 pt">
        <div className="mx-auto grid-3-cols">
          {/* TODO: go in and change the constants values to something more suitable to you */}
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
      </div>
    </div>
  );
};

export default FeatureCards;
