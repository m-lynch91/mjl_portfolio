interface THProps {
  title?: string;
  sub?: string;
}

const TitleHeader: React.FC<THProps> = ({ title }) => {
  return (
    <h1 className="text-center text-4xl tracking-widest uppercase text-[#9390e4]">{title}</h1>
  );
};

export default TitleHeader;
