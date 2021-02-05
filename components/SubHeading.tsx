export type SubHeading = {
  number: string;
  text: string;
};
const SubHeading = ({ number, text }: SubHeading) => {
  return (
    <h2 className="mb-10 font-mono space-x-1">
      <span className="text-blue-500">{number}.</span>
      <span className="text-gray-900 font-sans text-2xl font-extrabold">
        {text}
      </span>
    </h2>
  );
};

export default SubHeading;
