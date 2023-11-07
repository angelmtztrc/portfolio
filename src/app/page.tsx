import Image from 'next/image';
import { Hero } from '@/molecules';
import { GitHub } from 'react-feather';

export default function Home() {
  return (
    <main className="container mx-auto">
      <Hero />
      <section className="mt-60 grid grid-cols-12 mb-96">
        <div className="col-span-9">
          <div className="w-9/12 flex flex-col space-y-8 w">
            <div>
              <h2 className="text-2xl font-display font-medium leading-7 text-primary-300 tracking-tighter">
                About Me
              </h2>
              <p className="font-body text-4xl font-semibold leading-[3.375rem] text-content-description mt-5">
                I&apos;m a self-taught developer, who is passionate about web
                technologies. I love projects that help people do their tasks
                more easily and efficiently.
              </p>
            </div>
            <div>
              <h3 className="font-display font-medium leading-5 -tracking-wide text-content-darkest">
                Social Media
              </h3>
              <ul className="flex items-center space-x-6">
                <li className="flex space-x-3 items-center mt-4">
                  <GitHub className="h-6 w-6 text-content-dark" />
                  <p className="text-content-dark font-body text-lg font-semibold leading-8">
                    GitHub
                  </p>
                </li>
                <li className="flex space-x-3 items-center mt-4">
                  <GitHub className="h-6 w-6 text-content-dark" />
                  <p className="text-content-dark font-body text-lg font-semibold leading-8">
                    Twitter
                  </p>
                </li>
                <li className="flex space-x-3 items-center mt-4">
                  <GitHub className="h-6 w-6 text-content-dark" />
                  <p className="text-content-dark font-body text-lg font-semibold leading-8">
                    LinkedIn
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-span-3 p-6 relative">
          <img
            src="/assets/nebula-about.svg"
            className="absolute -top-24 -left-24"
          />
          <div className="p-8 flex items-center border border-white/[0.15] bg-white/[0.08] backdrop-blur-md rounded-2xl aspect-square h-full">
            <img
              src="https://www.angelmtz.dev/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdhgvhyu2m%2Fimage%2Fupload%2Fv1686701749%2FIMG_6346_7af7b12a57.jpg&w=1920&q=75"
              className="object-cover w-full h-full rounded-full"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
