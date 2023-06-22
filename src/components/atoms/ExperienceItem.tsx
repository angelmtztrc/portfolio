import { IExperience } from '@interfaces/experience';
import { formattedDate } from '@utils/day.util';

type ExperienceItemProps = {
  data: IExperience;
};

const ExperienceItem = ({ data }: ExperienceItemProps) => {
  const { attributes } = data;
  return (
    <li className="relative rounded-t border-l-4 border-primary-500 pb-8 pl-6">
      <span className="absolute -left-[10px] top-0 h-4 w-4 rounded-full bg-primary-500" />
      <div className="relative">
        <p className="font-display text-xs font-bold uppercase text-darken-700">
          {formattedDate(attributes.from)} -{' '}
          {attributes.to ? formattedDate(attributes.to) : 'Present'}
        </p>
      </div>
      <div className="mt-2">
        <h2 className="font-display font-bold text-white">
          {attributes.title} @ {attributes.company}
        </h2>
        <p className="mt-1 font-body font-light text-greyish-800 lg:w-3/4">
          {attributes.description}
        </p>
      </div>
    </li>
  );
};

export default ExperienceItem;
