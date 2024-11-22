import Abilities from './Abilities';
import CareerHistory from './CareerHistory';
import Certifications from './Certifications';
import Education from './Education';

const ProfileOverview = () => {
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

export default ProfileOverview;
