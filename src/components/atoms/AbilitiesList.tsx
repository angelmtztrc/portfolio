const AbilitiesList = () => {
  return (
    <section className="rounded-lg border border-dark-900 bg-darken-900 p-5 ">
      <ul className="flex flex-wrap items-center justify-center gap-2">
        {[1, 2, 3, 4, 5, 6].map(i => (
          <li
            key={i}
            className="rounded-lg bg-primary-500 bg-opacity-10 px-4 py-1 font-body text-xs font-light uppercase text-primary-400"
          >
            JavaScript
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AbilitiesList;
