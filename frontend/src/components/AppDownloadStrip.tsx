import React from 'react';
import { Smartphone } from 'lucide-react';

export const AppDownloadStrip: React.FC = () => {
  return (
    <section className="bg-[#121212] px-4 pb-2 pt-12 text-white" aria-label="Warrior World app">
      <p className="flex items-center justify-center gap-2 text-center text-sm font-semibold uppercase tracking-[0.06em]">
        <Smartphone className="h-4 w-4" aria-hidden="true" />
        Experience the Warrior World app
      </p>
      <p className="mx-auto mt-2 max-w-md text-center text-sm text-white/70">
        App-only drops, early access, and one-tap checkout.
      </p>
      <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
        <a
          href="https://warriorworld.in"
          className="inline-flex min-h-11 items-center rounded-[10px] border border-white/40 px-4 text-sm text-white transition-colors hover:bg-white hover:text-[#121212]"
        >
          App Store
        </a>
        <a
          href="https://warriorworld.in"
          className="inline-flex min-h-11 items-center rounded-[10px] border border-white/40 px-4 text-sm text-white transition-colors hover:bg-white hover:text-[#121212]"
        >
          Google Play
        </a>
      </div>
    </section>
  );
};
