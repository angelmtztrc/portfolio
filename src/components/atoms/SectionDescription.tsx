const SectionDescription = ({ title, description }: SectionDescriptionProps) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="font-display text-4xl font-bold text-slate-50">
        {title}
        <span className="text-indigo-500">.</span>
      </h2>
      <p className="mt-4 font-body font-light text-slate-100 lg:w-1/2">{description}</p>
    </div>
  );
};

type SectionDescriptionProps = {
  title: string;
  description: string;
};

export default SectionDescription;
