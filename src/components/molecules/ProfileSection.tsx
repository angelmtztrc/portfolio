import { Mail as MailIcon, GitHub as GitHubIcon, Linkedin as LinkedInIcon } from 'react-feather';

const ProfileSection = ({}: ProfileSectionProps) => {
  return (
    <section className="col-span-12 space-y-4 lg:col-span-3">
      <div className="flex flex-col items-center justify-center rounded-lg border border-raisin-black bg-eerie-black p-4">
        <div className="h-28 w-28 rounded-full border border-indigo-500 bg-raisin-black"></div>
        <div className="mt-4 text-center">
          <h2 className="font-display text-2xl font-bold text-white">Angel Martinez</h2>
          <div className="mt-4 space-y-2">
            <p className="font-body text-sm font-light text-cadet-grey-light">
              Front-end Developer • Coahuila, México
            </p>
            <p className="font-body text-sm font-light text-cadet-grey-light">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, modi!
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-4 rounded-lg border border-raisin-black bg-eerie-black p-4">
        <div className="rounded-full border border-raisin-black p-3">
          <MailIcon className="h-6 w-6 text-white" />
        </div>
        <div className="rounded-full border border-raisin-black p-3">
          <GitHubIcon className="h-6 w-6 text-white" />
        </div>
        <div className="rounded-full border border-raisin-black p-3">
          <LinkedInIcon className="h-6 w-6 text-white" />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center rounded-lg border border-raisin-black bg-eerie-black p-4">
        {/* // TODO: technologies */}
      </div>
    </section>
  );
};

type ProfileSectionProps = {};

export default ProfileSection;
