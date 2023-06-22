import { BriefcaseIcon } from '@heroicons/react/24/solid';

import { ExperienceItem, PageHeading } from '@atoms';

import { ExperiencesService } from '@services';

import { SectionLayout } from '@layouts';

const fetcher = async () => {
  const data = await ExperiencesService.find();

  return data.data;
};

const ExperiencePage = async () => {
  const data = await fetcher();

  return (
    <SectionLayout className="p-5">
      <PageHeading title="Experience" icon={<BriefcaseIcon />} />
      <ul className="mt-6">
        {data.reverse().map(values => (
          <ExperienceItem key={values.id} data={values} />
        ))}
      </ul>
    </SectionLayout>
  );
};

export default ExperiencePage;
