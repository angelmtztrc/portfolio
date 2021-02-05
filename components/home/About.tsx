import Image from 'next/image';

// components
import SubHeading from '../SubHeading';

const About = () => {
  return (
    <section>
      <div className="container mx-auto">
        <SubHeading number={'01'} text={'About Me'} />
        <div className="grid gap-10 grid-cols-2">
          <div className="col-span-1 mt-2 space-y-2">
            {/* TODO: Little bio here */}
            <p className="text-primary-100 text-base">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem modi
            </p>
            <p className="text-primary-100 text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              et at nisi magnam fuga aliquid tempore veritatis explicabo labore
              reprehenderit.
            </p>
            <p className="text-primary-100 text-base">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptatum, iste!
            </p>
            {/* TODO: Icons here */}
          </div>
          <div className="col-span-1 px-24">
            <Image
              src="/about-illustration.svg"
              layout="responsive"
              width="auto"
              height="auto"
            />
          </div>
        </div>
        <ul className="flex items-center justify-around mt-28">
          {/* TODO: SOME ICONS HERE */}
        </ul>
      </div>
    </section>
  );
};

export default About;
