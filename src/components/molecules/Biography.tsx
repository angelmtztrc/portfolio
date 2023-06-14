import Image from 'next/image';

import { IProfile } from '@interfaces/profile';
import { getImagePath } from '@utils/image.util';

type BiographyProps = {
  data: IProfile;
};

const Biography = ({ data: { attributes } }: BiographyProps) => {
  return (
    <section className=" flex flex-col items-center justify-center rounded-lg border border-dark-900 bg-darken-900 p-5 ">
      <figure className="relative h-28 w-28 overflow-hidden rounded-full border-4 border-primary-500">
        <Image
          src={getImagePath(attributes.picture)}
          alt={attributes.name}
          className="object-cover"
          fill
        />
      </figure>
      <h1 className="mt-5 text-center font-display text-2xl font-bold text-white">
        {attributes.name}
        <div className="mt-4 font-body text-sm font-light text-gray-900">
          <span>{attributes.role} • </span>
          <span>{attributes.location}</span>
        </div>
      </h1>
      <p className="mt-4 text-center font-body text-sm font-light text-gray-900">
        {attributes.biography}
      </p>
    </section>
  );
};

export default Biography;
