import { Tab } from '@headlessui/react';

// components
import { Button } from '../button';

export const ContactSection = ({}: ContactSectionProps) => {
  return (
    <Tab.Panel
      as="section"
      className="w-full h-full focus-visible:outline-none"
    >
      <div className="flex flex-col items-center justify-center py-16">
        <h2 className="text-white font-display text-3xl font-bold capitalize">
          Get In Touch
        </h2>
        <p className="mt-10 w-full text-center text-cadet-grey font-body font-light md:w-1/2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id vitae
          quasi fuga possimus ab voluptas illo odit totam eaque sint!
        </p>
        <Button className="mt-4">Say Hello</Button>
      </div>
    </Tab.Panel>
  );
};

type ContactSectionProps = {};
