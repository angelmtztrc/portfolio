// containers
import SubHeading from '../components/SubHeading';
import Layout from '../containers/Layout';

// components

const IndexPage = () => (
  <Layout title={'Home'}>
    <section className="flex items-center justify-center min-h-screen">
      <div className="container grid gap-12 grid-cols-2 mx-auto">
        <div className="flex flex-col justify-center">
          <h1 className="font-sans">
            <span className="block text-gray-900 text-xl">Hello, I'm</span>
            <span className="block text-red-500 text-6xl font-extrabold">
              Angel Martinez
            </span>
            <span className="block mt-2 text-gray-900 text-3xl font-extrabold">
              I'm a JavaScript Developer
            </span>
          </h1>
          <p className="mt-4 text-gray-600">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus
            odio eos quis nobis ratione delectus esse at magnam numquam
            perspiciatis.
          </p>
        </div>
        <div>
          <img
            className="px-10 w-full object-cover"
            src="/welcome-illustration.svg"
            alt="Welcome Illustration"
          />
        </div>
      </div>
    </section>
    <section>
      <div className="container mx-auto">
        <SubHeading text={'Featured Portfolio'} />
      </div>
    </section>
  </Layout>
);

export default IndexPage;
