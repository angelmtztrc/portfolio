import dayjs from 'dayjs';

export const TimelineItem = ({
  from,
  to,
  position,
  company,
  description
}: TimelineItemProps) => {
  return (
    <div>
      <li className="relative grid grid-cols-12">
        <span className="left-[-0.15rem] top-[0.5rem] absolute inline-block w-2 h-2 bg-medium-state-blue rounded-full lg:hidden"></span>
        <div className="col-span-12 pl-7 border-l-4 border-raisin-black lg:col-span-2 lg:pl-0 lg:border-l-0">
          <p className="text-white font-body text-base font-light">
            {dayjs(from).format('MMM, YYYY')} -{' '}
            {to ? dayjs(to).format('MMM, YYYY') : 'Present'}
          </p>
        </div>

        <div className="relative col-span-12 pb-4 pl-7 border-l-4 border-raisin-black lg:col-span-10">
          <span className="left-[-0.35rem] top-[0.5rem] absolute hidden w-2 h-2 bg-medium-state-blue rounded-full lg:inline-block"></span>
          <h3 className="text-lg">
            <span className="text-medium-state-blue font-display">
              {position}
            </span>
            <span className="text-sonic-silver font-body"> @ {company}</span>
          </h3>
          <p className="text-cadet-grey font-body text-base font-light">
            {description}
          </p>
        </div>
      </li>
    </div>
  );
};

type TimelineItemProps = {
  from: Date;
  to?: Date;
  position: string;
  company: string;
  description: string;
};
