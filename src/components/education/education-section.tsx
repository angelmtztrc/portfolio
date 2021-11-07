import { Tab } from '@headlessui/react';

// components
import { TimelineItem } from 'components/timeline-item';
import { Certificate } from 'interfaces/certificate.interface';
import { CertificateCard } from './certificate-card';

export const EducationSection = ({ certificates }: EducationSectionProps) => {
  return (
    <Tab.Panel as="section" className="focus-visible:outline-none">
      <div className="flex flex-col items-center justify-center mb-6">
        <h2 className="mb-4 text-white font-display text-3xl font-bold capitalize">
          Education
        </h2>
        <p className="w-full text-center text-cadet-grey font-body font-light md:w-1/2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id vitae
          quasi fuga possimus ab voluptas illo odit totam eaque sint!
        </p>
      </div>
      <div className="space-y-6">
        <section>
          <ul>
            <TimelineItem
              from={new Date('5/10/20')}
              to={new Date('5/10/20')}
              position={'Software Engineer'}
              company={'CBTis No. 239'}
            />
            <TimelineItem
              from={new Date('5/10/20')}
              to={new Date('5/10/20')}
              position={'Software Engineer'}
              company={'CBTis No. 239'}
            />
          </ul>
        </section>
        <section>
          <h3 className="mb-4 text-white font-display text-2xl font-bold capitalize">
            Online Education
          </h3>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {certificates.map(certificate => (
              <CertificateCard key={certificate.id} certificate={certificate} />
            ))}
          </div>
        </section>
      </div>
    </Tab.Panel>
  );
};

type EducationSectionProps = {
  certificates: Certificate[];
};
