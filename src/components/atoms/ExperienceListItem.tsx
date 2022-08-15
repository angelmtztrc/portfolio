const ExperienceListItem = ({
  picture,
  position,
  company,
  startDate,
  endDate,
  description
}: ExperienceListItemProps) => {
  return (
    <li className="grid grid-cols-12">
      <div className="relative col-span-1 flex flex-col items-center justify-center">
        <div className="-mb-2 h-full w-2 bg-raisin-black" />
        <span className="absolute inset-y-0 top-0 mt-5 h-5 w-5 rounded-full bg-indigo-500" />
      </div>
      <div className="col-span-11 pb-5 text-white">
        <div className="flex items-center space-x-4">
          <figure>
            <div className="h-14 w-14 rounded bg-raisin-black"></div>
          </figure>
          <div className="flex flex-col">
            <h3 className="font-display text-lg font-bold text-white">{position}</h3>
            <p className="font-body text-sm font-light text-cadet-grey-light">
              {company} • {startDate} to {endDate}
            </p>
          </div>
        </div>
        <p className="mt-2 w-4/5">{description}</p>
      </div>
    </li>
  );
};

type ExperienceListItemProps = {
  picture?: string;
  position: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
};

export default ExperienceListItem;
