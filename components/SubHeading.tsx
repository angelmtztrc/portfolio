export type SubHeadingProps = {
  text: string;
};
const SubHeading = ({ text }: SubHeadingProps) => {
  const [leftText, rightText]: string[] = text.split(' ');
  return (
    <div className="flex flex-col space-y-2">
      <h2 className="text-center text-gray-900 text-3xl">
        {leftText} <span className="font-bold">{rightText}</span>
      </h2>
      <div className="self-center w-24 h-1 bg-red-500"></div>
    </div>
  );
};

export default SubHeading;
