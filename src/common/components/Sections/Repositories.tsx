import RepositoryCard from '@components/Cards/RepositoryCard';

const Repositories = ({}: RepositoriesProps) => {
  return (
    <section>
      <div className="flex flex-col items-center justify-center md:items-start">
        <h2 className="font-display text-3xl font-bold capitalize text-white">
          Repositories
        </h2>
        <p className="mt-4 w-full text-center font-body font-light text-cadet-grey lg:text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
          inventore, ab commodi incidunt quam exercitationem repudiandae
          accusamus! A cumque hic, magni veniam obcaecati libero quaerat,
          assumenda suscipit autem, sequi optio?
        </p>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {Array.from({ length: 9 }).map((_, i) => (
          <RepositoryCard key={i * 12} />
        ))}
      </div>
    </section>
  );
};

type RepositoriesProps = {};

export default Repositories;
