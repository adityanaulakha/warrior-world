import React from 'react';
import { Truck, RotateCcw, ShieldCheck, Award, ThumbsUp, Star } from 'lucide-react';

const PILLARS = [
  {
    icon: ShieldCheck,
    title: '50+ Wash Tested',
    metric: 'Zero Fade',
    desc: 'High-density Japanese screen printing engineered to withstand 50+ wash cycles without cracking, peeling, or fading.',
  },
  {
    icon: ThumbsUp,
    title: '180 GSM Combed Cotton',
    metric: 'Bio-Washed',
    desc: 'Pre-shrunk, long-staple ring-spun cotton. Ultra-breathable, silky hand-feel formulated specifically for Indian weather.',
  },
  {
    icon: Award,
    title: 'Shark Tank S5 Backed',
    metric: '₹75L Deal',
    desc: 'Vetted and funded on national television by SUGAR Cosmetics Founder & CEO Vineeta Singh.',
  },
  {
    icon: Truck,
    title: 'Pan-India Free COD',
    metric: 'Zero Friction',
    desc: 'Cash-on-delivery across 19,000+ Indian postal pincodes. Pay only when the package arrives at your doorstep.',
  },
  {
    icon: RotateCcw,
    title: '7-Day Easy Exchanges',
    metric: 'Instant Swap',
    desc: 'Size not perfect? Doorstep reverse pickup with zero interrogations and immediate size replacements.',
  },
  {
    icon: Star,
    title: '5,00,000+ Strong Community',
    metric: '4.8 ★ Rated',
    desc: 'India’s largest grassroots community of army-inspired streetwear enthusiasts and defense supporters.',
  },
];

export const WhyWarriorWorld: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white border-t border-neutral-200">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Header */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <span className="editorial-eyebrow text-[#C5A059] block mb-2">
            Fabric Engineering & Quality Benchmarks
          </span>
          <h2 className="editorial-title text-4xl sm:text-5xl lg:text-6xl text-black">
            The Warrior World Standard
          </h2>
          <p className="text-neutral-500 text-xs sm:text-sm mt-2 font-normal">
            We don’t compromise on fabric weight, print resilience, or honest direct-from-factory pricing.
          </p>
        </div>

        {/* 6-Column Architectural Feature Grid with clean borders */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-200 border border-neutral-200">
          {PILLARS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group p-8 bg-white hover:bg-neutral-50 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 bg-neutral-100 flex items-center justify-center text-neutral-900 group-hover:bg-black group-hover:text-[#C5A059] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-600 bg-neutral-100 px-2 py-0.5">
                      {item.metric}
                    </span>
                  </div>

                  <h3 className="editorial-title text-2xl text-black mb-2">
                    {item.title}
                  </h3>
                  <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-neutral-100 flex items-center justify-between text-[11px] font-mono font-bold text-neutral-400 uppercase tracking-wider">
                  <span>Guaranteed</span>
                  <span className="text-black font-bold">✦</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
