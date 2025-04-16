export const CareerHistory = () => {
  return (
    <section className="col-span-7">
      <h2 className="font-display text-2xl leading-7 tracking-[-1px] font-medium text-primary-300 ">
        Career history
      </h2>

      <ul className="mt-12 career-timeline">
        <li className="pl-12 pb-20 relative border-l border-content-border/[0.35]">
          <span className="absolute bg-layer-body -left-2 pb-4">
            <figure className="bg-primary-500 h-4 w-4 rounded-full"></figure>
          </span>
          <h3 className="flex flex-col space-y-2">
            <span className="font-display leading-5 font-medium text-primary-300">
              Front-end Developer
            </span>
            <span className="font-display font-bold text-content-white text-[2.5rem] leading-10 tracking-tight">
              MedTrainer
            </span>
          </h3>
          <p className="mt-2 font-display text-sm leading-4 tracking-tight text-content-darkest">
            August 2023 - Present
          </p>
          <p className="mt-6 font-body text-lg leading-8 text-content-description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            voluptatum ratione mollitia reiciendis consequatur ullam voluptates
            nihil commodi blanditiis aliquid.
          </p>
        </li>
        <li className="pl-12 pb-20 relative border-l border-content-border/[0.35]">
          <span className="absolute bg-layer-body -left-2 pb-4">
            <figure className="bg-primary-500 h-4 w-4 rounded-full"></figure>
          </span>
          <h3 className="flex flex-col space-y-2">
            <span className="font-display leading-5 font-medium text-primary-300">
              Front-end Developer
            </span>
            <span className="font-display font-bold text-content-white text-[2.5rem] leading-10 tracking-tight">
              Never8
            </span>
          </h3>
          <p className="mt-2 font-display text-sm leading-4 tracking-tight text-content-darkest">
            February 2022 - July 2023
          </p>
          <p className="mt-6 font-body text-lg leading-8 text-content-description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            voluptatum ratione mollitia reiciendis consequatur ullam voluptates
            nihil commodi blanditiis aliquid.
          </p>
        </li>
        <li className="pl-12 pb-20 relative border-l border-content-border/[0.35]">
          <span className="absolute bg-layer-body -left-2 pb-4">
            <figure className="bg-primary-500 h-4 w-4 rounded-full"></figure>
          </span>
          <h3 className="flex flex-col space-y-2">
            <span className="font-display leading-5 font-medium text-primary-300">
              Founder
            </span>
            <span className="font-display font-bold text-content-white text-[2.5rem] leading-10 tracking-tight">
              Omega Security Group
            </span>
          </h3>
          <p className="mt-2 font-display text-sm leading-4 tracking-tight text-content-darkest">
            February 2019 - July 2024
          </p>
          <p className="mt-6 font-body text-lg leading-8 text-content-description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            voluptatum ratione mollitia reiciendis consequatur ullam voluptates
            nihil commodi blanditiis aliquid.
          </p>
        </li>
      </ul>
    </section>
  );
};
