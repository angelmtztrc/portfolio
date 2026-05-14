import { SOCIAL_MEDIA } from "@/data/communications";
import Link from "next/link";

const Communications = () => {
  return (
    <section id="communications" className="border-line border-b py-12">
      <div className="mb-8">
        <h2 className="text-muted-foreground text-xs tracking-widest uppercase">
          {"// Communications"}
        </h2>
      </div>
      <div className="border-line grid grid-cols-1 gap-0 border md:grid-cols-3">
        <Link
          href={SOCIAL_MEDIA.GitHub.url}
          className="group hover:bg-surface border-line flex flex-col gap-2 border-b p-6 transition-colors md:border-r md:border-b-0"
        >
          <span className="text-muted-foreground text-xs tracking-widest uppercase">
            {SOCIAL_MEDIA.GitHub.name}
          </span>
          <span className="text-foreground group-hover:text-muted-foreground text-sm transition-colors">
            github.com/angelmtztrc
          </span>
          <span className="text-dim group-hover:text-foreground mt-auto text-xs transition-colors">
            →
          </span>
        </Link>
        <Link
          href={SOCIAL_MEDIA.LinkedIn.url}
          className="group hover:bg-surface border-line flex flex-col gap-2 border-b p-6 transition-colors md:border-r md:border-b-0"
        >
          <span className="text-muted-foreground text-xs tracking-widest uppercase">
            {SOCIAL_MEDIA.LinkedIn.name}
          </span>
          <span className="text-foreground group-hover:text-muted-foreground text-sm transition-colors">
            linkedin.com/in/angelmtztrc
          </span>
          <span className="text-dim group-hover:text-foreground mt-auto text-xs transition-colors">
            →
          </span>
        </Link>
        <Link
          href="/Angel_Martinez_Romo-Resume.pdf"
          target="_blank"
          className="group hover:bg-surface border-line flex flex-col gap-2 border-b p-6 transition-colors md:border-r md:border-b-0"
        >
          <span className="text-muted-foreground text-xs tracking-widest uppercase">
            Resume
          </span>
          <span className="text-foreground group-hover:text-muted-foreground text-sm transition-colors">
            download pdf
          </span>
          <span className="text-dim group-hover:text-foreground mt-auto text-xs transition-colors">
            →
          </span>
        </Link>
      </div>
    </section>
  );
};

export default Communications;
