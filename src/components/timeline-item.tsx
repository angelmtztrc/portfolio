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
        <span className="absolute left-[-0.15rem] top-[0.5rem] inline-block h-2 w-2 rounded-full bg-medium-state-blue lg:hidden"></span>
        <div className="col-span-12 border-l-4 border-raisin-black pl-7 lg:col-span-2 lg:border-l-0 lg:pl-0">
          <p className="font-body text-base font-light text-white">
            {dayjs(from).format('MMM, YYYY')} -{' '}
            {to ? dayjs(to).format('MMM, YYYY') : 'Present'}
          </p>
        </div>

        <div className="relative col-span-12 border-l-4 border-raisin-black pb-6 pl-7 lg:col-span-10">
          <span className="absolute left-[-0.35rem] top-[0.6rem] hidden h-2 w-2 rounded-full bg-medium-state-blue lg:inline-block"></span>
          <h3 className="text-lg">
            <span className="font-display text-medium-state-blue">
              {position}
            </span>
            <span className="font-body text-sonic-silver"> @ {company}</span>
          </h3>

          {description && (
            <p className="font-body text-base font-light text-cadet-grey">
              {description}
            </p>
          )}
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
  description?: string;
};
