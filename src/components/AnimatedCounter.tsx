import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { counterItems } from "../constants";
import CountUp from "react-countup";

const AnimatedCounter = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger only once when in view
    threshold: 0.5, // Trigger when 50% of the component is in view
  });

  // Start animation when the component is in view
  if (inView && !hasAnimated) {
    setHasAnimated(true);
  }

  return (
    <div id="counter" ref={ref} className="padding-x-lg xl:mt-0 mt-32">
      <div className="mx-auto grid-3-cols">
        {counterItems.map((item) => (
          <div
            key={item.label}
            className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center"
          >
            <div className="counter-number text-white text-5xl font-bold mb-2">
              {hasAnimated && <CountUp suffix={item.suffix} end={item.value} />}
              <div className="text-white-50 text-lg">{item.label}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;
