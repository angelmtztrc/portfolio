import Image from 'next/image';
import { MediaIcons } from './media-icons';

export const About = () => {
  return (
    <section className="container mx-auto mt-64 flex justify-between">
      <div className="w-3/5">
        <h2 className="font-display text-2xl leading-7 tracking-[-1px] font-medium text-primary-300 ">
          About me
        </h2>
        <p className="font-body font-semibold leading-[3.375rem] text-4xl text-content-description mt-5">
          I&apos;m a self-taught developer, who is passionate about everything
          related to web development. I love to build projects that help people
          do their tasks more easily and efficiently.
        </p>
        <div className="mt-8">
          <h3 className="font-display font-medium text-base leading-5 tracking-[0.5px] text-content-darkest">
            Let&apos;s Connect
          </h3>
          <MediaIcons />
        </div>
      </div>
      <div className="w-full max-w-80 relative">
        <Image
          fill
          alt="nebula"
          src="/assets/raw-nebula.svg"
          className="absolute blur-[65px] inset-x-0 !-top-20 !-left-8 w-96 h-96"
        />
        <div className="aspect-square border border-white/[0.15] bg-white/[0.08] p-8 rounded-2xl relative">
          <Image
            fill
            alt="profile-picture"
            src="/assets/profile-picture.jpg"
            className="p-8 object-cover rounded-full absolute"
          />
        </div>
      </div>
    </section>
  );
};
