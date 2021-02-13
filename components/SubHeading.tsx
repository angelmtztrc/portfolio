export type SubHeading = {
  number: string;
  text: string;
};
const SubHeading = ({ number, text }: SubHeading) => {
  return (
    <h2 className="mb-10 font-mono space-x-1">
      <span className="text-secondary-100">{number}.</span>
      <span className="text-primary-100 font-sans text-2xl font-extrabold">
        {text}
      </span>
    </h2>
  );
};

export default SubHeading;
