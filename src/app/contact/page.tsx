import { Button } from '@atoms';
import { SectionLayout } from '@layouts';

const ContactPage = () => {
  return (
    <SectionLayout className="p-5 lg:px-5 lg:py-10">
      <div className="flex flex-col items-center justify-center">
        <h2 className="font-display text-3xl font-bold text-white">Get in touch</h2>
        <p className="mt-2 w-full text-center font-body font-light text-greyish-800 lg:w-7/12">
          I&apos;d love to hear from you! Feel free to get in touch if you have a project idea, a
          question, or just want to say hello. I&apos;m passionate about web development and would
          happily discuss how I can help bring your web vision to life. <br /> Looking forward to
          connecting with you!
        </p>

        <div className="mt-6">
          <Button variant="contained" className="px-4 py-2">
            download resume
          </Button>
        </div>
      </div>
    </SectionLayout>
  );
};

export default ContactPage;
