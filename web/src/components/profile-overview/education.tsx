export const Education = () => {
  return (
    <section className="mt-20">
      <h2 className="font-display text-2xl leading-7 tracking-[-1px] font-medium text-primary-300 ">
        Education
      </h2>
      <ul className="mt-12 space-y-16">
        <li className="flex flex-col space-y-2">
          <h3 className="flex flex-col space-y-2">
            <span className="font-display leading-5 font-medium text-primary-300">
              Software Engineer
            </span>
            <span className="font-display font-bold text-content-white text-[2.5rem] leading-10 tracking-tight">
              UANE
            </span>
          </h3>
          <p className="font-display text-sm leading-4 tracking-tight text-content-darkest">
            Currently enrolled
          </p>
        </li>
        <li className="flex flex-col space-y-2">
          <h3 className="flex flex-col space-y-2">
            <span className="font-display leading-5 font-medium text-primary-300">
              Computer Technician
            </span>
            <span className="font-display font-bold text-content-white text-[2.5rem] leading-10 tracking-tight">
              CBTis No. 239
            </span>
          </h3>
          <p className="font-display text-sm leading-4 tracking-tight text-content-darkest">
            Graduated in 2021
          </p>
        </li>
      </ul>
    </section>
  );
};
