import { AcademicCapIcon } from '@heroicons/react/solid';

const EducationListItem = ({ career, university, startDate, endDate }: EducationListItemProps) => {
  return (
    <li className="grid grid-cols-12">
      <div className="relative col-span-1 flex flex-col items-center justify-center">
        <div className="-mb-2 h-full w-2 bg-raisin-black  first-of-type:rounded-t-full" />
        <span className="absolute inset-y-0 top-0 mt-5 h-5 w-5 rounded-full bg-indigo-500" />
      </div>
      <div className="col-span-11 pb-8 text-white">
        <div className="flex items-center space-x-4">
          <figure>
            <div className="flex h-14 w-14 items-center justify-center rounded bg-raisin-black">
              <AcademicCapIcon className="h-8 w-8 text-white" />
            </div>
          </figure>
          <div className="flex flex-col">
            <h3 className="font-display text-lg font-bold text-white">{career}</h3>
            <p className="font-body text-sm font-light text-cadet-grey-light">
              {university} • {startDate} to {endDate}
            </p>
          </div>
        </div>
      </div>
    </li>
  );
};

type EducationListItemProps = {
  career: string;
  university: string;
  startDate: string;
  endDate: string;
};

export default EducationListItem;
