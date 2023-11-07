import Image from 'next/image';

import { SocialMediaList } from '@/atoms';

type AboutProps = {};

const About = () => {
  return (
    <section className="mt-60 grid grid-cols-12">
      <div className="col-span-9">
        <div className="w-9/12 flex flex-col space-y-8 w">
          <div>
            <h2 className="text-2xl font-display font-medium leading-7 text-primary-300 tracking-tighter">
              About Me
            </h2>
            <p className="font-body text-4xl font-semibold leading-[3.375rem] text-content-description mt-5">
              I&apos;m a self-taught developer, who is passionate about web
              technologies. I love projects that help people do their tasks more
              easily and efficiently.
            </p>
          </div>
          <div>
            <h3 className="font-display font-medium leading-5 -tracking-wide text-content-darkest">
              Social Media
            </h3>
            <SocialMediaList />
          </div>
        </div>
      </div>
      <div className="col-span-3 p-6 relative">
        <Image
          fill
          alt="nebula"
          src="/assets/nebula-about.svg"
          className="absolute !-top-24 !-left-24"
        />
        <div className="p-8 flex items-center border border-white/[0.15] bg-white/[0.08] backdrop-blur-md rounded-2xl aspect-square h-full">
          <img
            src="https://www.angelmtz.dev/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdhgvhyu2m%2Fimage%2Fupload%2Fv1686701749%2FIMG_6346_7af7b12a57.jpg&w=1920&q=75"
            className="object-cover w-full h-full rounded-full"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
