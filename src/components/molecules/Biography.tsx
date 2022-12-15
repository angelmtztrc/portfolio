import Image from 'next/image';

import { IUser } from '@interfaces/user';

type BiographyProps = {
  data: IUser;
};

const Biography = ({ data }: BiographyProps) => {
  return (
    <section className=" flex flex-col items-center justify-center rounded-lg border border-dark-900 bg-darken-900 p-5 ">
      <figure className="relative h-28 w-28 overflow-hidden rounded-full border-2 border-primary-500">
        <Image src={data.picture.url} alt={data.name} className="object-cover" fill />
      </figure>
      <h1 className="mt-5 text-center font-display text-2xl font-bold text-white">
        {data.name}
        <div className="mt-4 font-body text-sm font-light text-gray-900">
          <span>{data.role} • </span>
          <span>{data.location}</span>
        </div>
      </h1>
      <p className="mt-4 text-center font-body text-sm font-light text-gray-900">
        {data.biography}
      </p>
    </section>
  );
};

export default Biography;
