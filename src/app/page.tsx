import Image from 'next/image';

import { Button } from '@/atoms';
import { About, Hero } from '@/molecules';

export default function Home() {
  return (
    <main className="container mx-auto">
      <Hero />
      <About />
      <section className="mt-60">
        <div className="flex justify-center">
          <h2 className="text-2xl font-display font-medium leading-7 text-primary-300 tracking-tighter">
            Discover What I&apos;ve Done
          </h2>
        </div>
        z
        <div className="mt-12 relative">
          <Image
            fill
            alt="nebula"
            src="/assets/nebula-project.svg"
            className="!-top-48 !-left-40"
          />
          <div className="container w-full pt-16 px-12 pb-12 bg-white border rounded-3xl border-white/[0.15] bg-white/[0.05] backdrop-blur-md aspect-video">
            <div className="relative w-full h-full">
              <div className="right-0 absolute -top-8">
                <div className="px-4 py-2 rounded-lg border border-content-border/20 bg-black/[0.15] backdrop-blur-xl">
                  <span className="text-content-description font-body text-sm font-semibold leading-5">
                    Next.js
                  </span>
                </div>
              </div>
              <h3 className="absolute bottom-0 font-body text-5xl leading-[3.25rem] tracking-tighter text-content-description font-bold text-shadow">
                Passgen - Deno
              </h3>
            </div>
          </div>
          <div className="mt-12 flex justify-center">
            <Button>View All</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
