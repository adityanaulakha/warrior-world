import React from 'react';
import { Truck, RotateCcw, ShieldCheck, Award, ThumbsUp, Star } from 'lucide-react';
import { CountUp, Reveal } from './motion';

const PILLARS: {
  icon: typeof ShieldCheck;
  title: string;
  desc: string;
  count?: number;
  suffix?: string;
  indian?: boolean;
}[] = [
  {
    icon: ShieldCheck,
    title: 'wash tested',
    count: 50,
    suffix: '+',
    desc: 'High-density screen printing built for 50+ washes without cracking, peeling, or fading.',
  },
  {
    icon: ThumbsUp,
    title: '180 GSM cotton',
    desc: 'Pre-shrunk, long-staple ring-spun cotton with a breathable hand-feel for Indian weather.',
  },
  {
    icon: Award,
    title: 'Shark Tank S5',
    desc: 'A ₹75 lakh deal on national television with SUGAR Cosmetics founder Vineeta Singh.',
  },
  {
    icon: Truck,
    title: 'Free COD',
    desc: 'Cash on delivery across 19,000+ Indian postal pincodes. Pay when the parcel arrives.',
  },
  {
    icon: RotateCcw,
    title: '7-day exchanges',
    desc: 'Doorstep reverse pickup when the size is off, with a straight size swap.',
  },
  {
    icon: Star,
    title: 'strong',
    count: 500000,
    indian: true,
    suffix: '+',
    desc: 'A 4.8 rated community of army-inspired streetwear and defence supporters.',
  },
];

export const WhyWarriorWorld: React.FC = () => {
  return (
    <section className="border-t border-[#E2E2E2] bg-white py-8 md:py-10" aria-label="Why Warrior World">
      <div className="bc-wrap">
        <ul className="grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-3 xl:grid-cols-6">
          {PILLARS.map((item, index) => {
            const Icon = item.icon;
            return (
              <li key={item.title} className="text-center">
                <Reveal delay={index * 0.06}>
                  <Icon className="mx-auto mb-4 h-10 w-10 text-[#121212]" strokeWidth={1.4} aria-hidden="true" />
                  <h3 className="mb-1 text-sm font-semibold uppercase tracking-[0.04em] text-[#121212]">
                    {item.count != null ? (
                      <>
                        <CountUp to={item.count} indian={item.indian} suffix={item.suffix} /> {item.title}
                      </>
                    ) : (
                      item.title
                    )}
                  </h3>
                  <p className="text-[13px] leading-relaxed text-[#484f56]">{item.desc}</p>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
