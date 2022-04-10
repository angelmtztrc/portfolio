const RepositoryCard = ({}: RepositoryCardProps) => {
  return (
    <article className="select-none">
      <div className="overflow-hidden rounded border-2 border-raisin-black">
        <div className="h-44 w-full bg-slate-500"></div>
        <div className="bg-eerie-black p-4">
          <h3 className="font-body text-xs font-bold uppercase tracking-widest text-medium-state-blue">
            TypeScript
          </h3>
          <h2 className="font-display text-lg font-medium text-white">
            Passgen - Deno
          </h2>
          <p className="mt-4 font-body text-sm font-light leading-relaxed text-cadet-grey">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et,
            tempora.
          </p>
        </div>
      </div>
    </article>
  );
};

type RepositoryCardProps = {};

export default RepositoryCard;
