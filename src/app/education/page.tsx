import { AcademicCapIcon } from '@heroicons/react/24/solid';

import { CertificateItem, EducationItem, PageHeading } from '@atoms';
import { SectionLayout } from '@layouts';
import { EducationService } from '@services';

const fetcher = async () => {
  const data = await EducationService.find();

  return data.data;
};

const EducationPage = async () => {
  const data = await fetcher();

  return (
    <SectionLayout className="p-5">
      <PageHeading title="Education" icon={<AcademicCapIcon />} />

      <ul className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
        {data.map(({ id, attributes: { degree, school, from, to } }) => (
          <EducationItem key={id} degree={degree} school={school} from={from} to={to} />
        ))}
      </ul>

      <ul className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <CertificateItem />
        <CertificateItem />
        <CertificateItem />
      </ul>
    </SectionLayout>
  );
};

export default EducationPage;
