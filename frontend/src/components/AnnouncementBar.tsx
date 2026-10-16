import React from 'react';

const items = [
  { text: 'AS SEEN ON SHARK TANK INDIA S5', strong: true },
  { text: '₹75 LAKH DEAL WITH SHARK VINEETA SINGH', strong: false },
  { text: 'BUY 3 T-SHIRTS @ ₹999', strong: true },
  { text: "INDIA'S #1 ARMY-INSPIRED D2C BRAND", strong: false },
  { text: '50+ WASH TESTED COMBED COTTON', strong: true },
  { text: 'FREE COD PAN-INDIA', strong: false },
  { text: '5,00,000+ WARRIORS STRONG', strong: true },
  { text: '7-DAY EASY RETURNS', strong: false },
];

export const AnnouncementBar: React.FC = () => {
  const loop = [0, 1];

  return (
    <div className="bc-announce" role="region" aria-label="Offers and announcements">
      <div className="bc-announce-track">
        {loop.map((copy) => (
          <div key={copy} className="flex" aria-hidden={copy === 1}>
            {items.map((item) => (
              <span key={`${copy}-${item.text}`} className="bc-announce-item">
                {item.strong ? <strong>{item.text}</strong> : <span>{item.text}</span>}
                <span className="bc-mark" aria-hidden="true" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
