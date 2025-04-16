import { Abilities } from './abilities';
import { CareerHistory } from './career-history';
import { Certifications } from './certifications';
import { Education } from './education';

export const ProfileOverview = () => {
  return (
    <div className="mt-64">
      <div className="container mx-auto grid grid-cols-12 gap-24">
        <CareerHistory />
        <div className="col-span-5">
          <Certifications />
          <Education />
          <Abilities />
        </div>
      </div>
    </div>
  );
};
