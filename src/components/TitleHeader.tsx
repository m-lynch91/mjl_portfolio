interface THProps {
  title?: string;
  sub?: string;
}

const TitleHeader: React.FC<THProps> = ({ title, sub }) => {
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="bg-black-200 py-5 px-10 rounded-full w-fit text-2xl">
        <p>{sub}</p>
      </div>
      <div className="bg-black-200 py-2 px-5 rounded-full w-fit text-xl text-nowrap text-3xl">
        {title}
      </div>
    </div>
  );
};

export default TitleHeader;
