interface THProps {
  title?: string;
  sub?: string;
}

const TitleHeader: React.FC<THProps> = ({ title, sub }) => {
  return (
    <div className="flex flex-col items-center gap-10">
      <div className="hero-badge text-3xl">
        <p>{sub}</p>
      </div>
      <div className="font-semibold md:text-3xl text-3xl text-center">
        {title}
      </div>
    </div>
  );
};

export default TitleHeader;
