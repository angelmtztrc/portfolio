import Image from 'next/image';
import Link from 'next/link';

// interfaces
import { Certificate } from 'interfaces/certificate.interface';

export const CertificateCard = ({
  certificate: { title, company, credentialId, picture, url }
}: CertificateCardProps) => {
  return (
    <div className="col-span-1">
      <div className="flex items-center p-4 h-full border-2 border-raisin-black rounded-lg space-x-4">
        <div className="relative flex-shrink-0 w-16 h-16">
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
              <h2 className="text-medium-state-blue hover:underline font-display font-medium">
                {title}
              </h2>
            </a>
          </Link>
          <p className="text-cadet-grey font-body text-base font-light">
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
