import { PropsWithChildren, useRef } from "react";
import { ExperienceCard } from "../types/ExperienceCard";

// allow child elements
interface GCProps extends PropsWithChildren {
  card: ExperienceCard;
  index: number;
}

const GlowCard: React.FC<GCProps> = ({ card, children, index }) => {
  // store references to DOM elements
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  interface MouseEvent {
    clientX: number; // X coords of mouse
    clientY: number; // Y coords of mouse
  }

  interface MouseMoveHandler {
    (e: MouseEvent): void;
  }

  const handleMouseMovement =
    (index: number): MouseMoveHandler =>
    (e: MouseEvent) => {
      const card = cardRefs.current[index];
      if (!card) return;

      // get mouse position relative to card
      const rect = card.getBoundingClientRect();
      const mouseX = e.clientX - rect.left - rect.width / 2;
      const mouseY = e.clientY - rect.top - rect.height / 2;

      // calculate the angle from the center of the card
      let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);

      // normalize angle to 0-360 range
      angle = (angle + 360) % 360;

      // set CSS variable for glow effect with 60 degree offset
      card.style.setProperty("--start", (angle + 60).toString());
    };

  return (
    <div
      // store reference to this card element
      ref={(element) => {
        cardRefs.current[index] = element;
      }}

      onMouseMove={handleMouseMovement(index)}
      className="card card-border timeline-card rounded-xl p-10"
    >
      <div className="glow" />
      
      {/** 5-star rating display */}
      <div className="flex items-center gap-1 mb-5">
        {Array.from({ length: 5 }, (_, i) => (
          <img src="/images/star.png" key={i} alt="star" className="size-5" />
        ))}
      </div>

      {/** review text section */}
      <div className="mb-5">
        <p className="text-white-50 text-lg">{card.review}</p>
      </div>
      {children}
    </div>
  );
};

export default GlowCard;
