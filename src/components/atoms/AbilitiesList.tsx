type AbilitiesListProps = {
  abilities: string;
};

const AbilitiesList = ({ abilities }: AbilitiesListProps) => {
  return (
    <section className="rounded-lg border border-dark-900 bg-darken-900 p-5 ">
      <ul className="flex flex-wrap items-center justify-center gap-2">
        {abilities.split(',').map(ability => (
          <li
            key={ability}
            className="rounded-lg bg-primary-500 bg-opacity-10 px-4 py-1 font-body text-xs font-light uppercase text-primary-400"
          >
            {ability}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AbilitiesList;
