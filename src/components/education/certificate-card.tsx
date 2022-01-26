import Image from 'next/image';
import Link from 'next/link';

// interfaces
import { Certificate } from 'interfaces/certificate.interface';

export const CertificateCard = ({
  certificate: { title, company, credentialId, picture, url }
}: CertificateCardProps) => {
  return (
    <div className="col-span-1">
      <div className="flex h-full items-center space-x-4 rounded-lg border-2 border-raisin-black p-4">
        <div className="relative h-16 w-16 flex-shrink-0">
          <Image
            src={picture.url}
            placeholder="blur"
            blurDataURL={picture.url}
            layout="fill"
            objectFit="cover"
            alt={title}
            className="rounded-lg object-cover object-center transition-opacity duration-300 ease-in-out"
          />
        </div>

        <div className="flex-grow">
          <Link href={url}>
            <a>
              <h2 className="font-display font-medium text-medium-state-blue hover:underline">
                {title}
              </h2>
            </a>
          </Link>
          <p className="font-body text-base font-light text-cadet-grey">
            {company.name} - ID {credentialId}
          </p>
        </div>
      </div>
    </div>
  );
};

type CertificateCardProps = {
  certificate: Certificate;
};
