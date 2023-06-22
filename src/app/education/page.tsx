import { AcademicCapIcon } from '@heroicons/react/24/solid';

import { CertificateItem, EducationItem, PageHeading } from '@atoms';
import { SectionLayout } from '@layouts';

const EducationPage = () => {
  return (
    <SectionLayout className="p-5">
      <PageHeading title="Education" icon={<AcademicCapIcon />} />

      <ul className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <EducationItem />
      </ul>

      <ul className="mt-3 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <CertificateItem />
      </ul>
    </SectionLayout>
  );
};

export default EducationPage;
