import { Tab } from '@headlessui/react';

// interfaces
import { Education } from 'interfaces/education.interface';
import { Certificate } from 'interfaces/certificate.interface';

// libs
import { sortByDate } from 'libs/sort-by-date';

// components
import { TimelineItem } from 'components/timeline-item';
import { CertificateCard } from './certificate-card';

export const EducationSection = ({
  educations,
  certificates
}: EducationSectionProps) => {
  return (
    <Tab.Panel as="section" className="focus-visible:outline-none">
      <div className="mb-6 flex flex-col items-center justify-center">
        <h2 className="mb-4 font-display text-3xl font-bold capitalize text-white">
          Education
        </h2>
        <p className="w-full text-center font-body font-light text-cadet-grey md:w-1/2">
          Most of my learning path as a Software Developer has been self-taught,
          so here you will find most of my certifications alongside my academic
          studies.
        </p>
      </div>
      <div className="space-y-6">
        <section>
          <ul>
            {educations
              .sort((left, right) => sortByDate(right.from, left.from))
              .map(({ id, from, to, title, school }) => (
                <TimelineItem
                  key={id}
                  from={from}
                  to={to}
                  position={title}
                  company={school}
                />
              ))}
          </ul>
        </section>
        <section>
          <h3 className="mb-4 font-display text-2xl font-bold capitalize text-white">
            Online Education
          </h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {certificates
              .sort((left, right) => sortByDate(left.issued, right.issued))
              .map(certificate => (
                <CertificateCard
                  key={certificate.id}
                  certificate={certificate}
                />
              ))}
          </div>
        </section>
      </div>
    </Tab.Panel>
  );
};

type EducationSectionProps = {
  educations: Education[];
  certificates: Certificate[];
};
