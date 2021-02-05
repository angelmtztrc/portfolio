import SubHeading from '../SubHeading';

const Experience = () => {
  return (
    <section className="mt-32">
      <div className="container mx-auto">
        <SubHeading number="02" text="Experience" />

        <div className="grid gap-12 grid-cols-2">
          <div>
            <li className="flex mb-1 space-x-6">
              <div className="flex flex-col items-center justify-center">
                <svg className="w-10 h-10 text-blue-500" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M12 3L1 9L5 11.18V17.18L12 21L19 17.18V11.18L21 10.09V17H23V9L12 3M18.82 9L12 12.72L5.18 9L12 5.28L18.82 9M17 16L12 18.72L7 16V12.27L12 15L17 12.27V16Z"
                  />
                </svg>
                <div className="flex-grow mt-1 w-0.5 h-auto bg-blue-500"></div>
              </div>
              <div className="pb-4">
                <p className="text-gray-600 font-sans text-sm">
                  2018 - Present
                </p>
                <p className="text-gray-900 text-2xl font-bold">
                  Higher Secondary
                </p>
                <p className="mt-2 text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                  sapiente hic vel deserunt sed asperiores!
                </p>
              </div>
            </li>
          </div>
          <div>
            <li className="flex mb-1 space-x-6">
              <div className="flex flex-col items-center justify-center">
                <svg className="w-10 h-10 text-blue-500" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M20,6C20.58,6 21.05,6.2 21.42,6.59C21.8,7 22,7.45 22,8V19C22,19.55 21.8,20 21.42,20.41C21.05,20.8 20.58,21 20,21H4C3.42,21 2.95,20.8 2.58,20.41C2.2,20 2,19.55 2,19V8C2,7.45 2.2,7 2.58,6.59C2.95,6.2 3.42,6 4,6H8V4C8,3.42 8.2,2.95 8.58,2.58C8.95,2.2 9.42,2 10,2H14C14.58,2 15.05,2.2 15.42,2.58C15.8,2.95 16,3.42 16,4V6H20M4,8V19H20V8H4M14,6V4H10V6H14Z"
                  />
                </svg>
                <div className="h-aut0 flex-grow mt-1 w-0.5 bg-blue-500"></div>
              </div>
              <div className="pb-4">
                <p className="text-gray-600 font-sans text-sm">
                  2019 - Present
                </p>
                <p className="text-gray-900 text-2xl font-bold">
                  Web Developer
                </p>
                <p className="mt-2 text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                  sapiente hic vel deserunt sed asperiores!
                </p>
              </div>
            </li>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
