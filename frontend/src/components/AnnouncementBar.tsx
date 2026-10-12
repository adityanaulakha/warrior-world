import React from 'react';

const items = [
  'AS SEEN ON SHARK TANK INDIA S5',
  '₹75 LAKH DEAL WITH SHARK VINEETA SINGH',
  'BUY 3 T-SHIRTS @ ₹999',
  'INDIA\'S #1 ARMY-INSPIRED D2C BRAND',
  '50+ WASH TESTED COMBED COTTON',
  'FREE COD PAN-INDIA',
  '5,00,000+ WARRIORS STRONG',
  '7-DAY EASY RETURNS',
];

export const AnnouncementBar: React.FC = () => {
  const repeated = [...items, ...items];

  return (
    <div className="bg-[#050505] text-[#C4B08C] py-2 relative overflow-hidden select-none" role="marquee" aria-label="Offers and announcements">
      <div className="flex items-center animate-marquee w-max">
        {repeated.map((item, i) => (
          <div key={i} className="flex items-center whitespace-nowrap">
            <span className="text-[10px] sm:text-[11px] font-medium tracking-[0.14em] uppercase px-6">
              {item}
            </span>
            <span className="text-[#3A3A35] text-[8px]">◆</span>
          </div>
        ))}
      </div>
    </div>
  );
};
