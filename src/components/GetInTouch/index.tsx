import Image from 'next/image';
import Button from '../Button';

const GetInTouch = () => {
  return (
    <section className="mt-64 container mx-auto relative">
      <Image
        fill
        alt="nebula"
        src="/assets/raw-nebula.svg"
        className="absolute blur-[65px] inset-x-0 !-top-4 !-left-8 w-96 h-96 -z-10"
      />
      <h2 className="font-display text-2xl leading-7 tracking-[-1px] font-medium text-primary-300 text-center">
        Get in touch
      </h2>
      <div className="flex w-full justify-center">
        <p className="font-body text-4xl leading-[3.5rem] bg-clip-text bg-gradient-to-r from-content-description to-content-description/75 text-transparent text-center mt-6 w-9/12 font-semibold">
          I&apos;d love to hear from you! Feel free to get in touch if you have
          a project idea, a question, or just want to say hello. I&apos;m
          looking forward to connecting with you!
        </p>
      </div>
      <div className="flex w-full justify-center space-x-6 mt-12">
        <Button>Send me an email</Button>
        <Button intent="ghost">Download my resume</Button>
      </div>
    </section>
  );
};

export default GetInTouch;
