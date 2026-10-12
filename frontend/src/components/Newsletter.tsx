import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-neutral-950 text-white border-t border-neutral-800">
      <div className="max-w-xl mx-auto px-4 sm:px-6 text-center">
        
        <p className="text-[11px] font-mono uppercase tracking-widest text-[#C5A059] mb-2">
          Priority Access
        </p>
        <h2 className="font-heading font-black text-2xl sm:text-3xl text-white tracking-tight mb-3">
          Join The Warrior Registry
        </h2>
        <p className="text-neutral-400 text-xs sm:text-sm mb-8 leading-relaxed">
          Be the first to receive new regimental drops, secret combo codes, and backstage Shark Tank updates. Zero spam.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 text-xs tracking-wider focus:outline-none focus:border-[#C5A059] transition-colors"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-white text-neutral-950 hover:bg-[#C5A059] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors flex-shrink-0"
            >
              <span>Subscribe</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
        ) : (
          <div className="bg-neutral-900 p-6 border border-neutral-800 text-center">
            <div className="w-8 h-8 mx-auto mb-3 bg-[#C5A059] text-neutral-950 flex items-center justify-center">
              <Check className="w-5 h-5" />
            </div>
            <p className="text-white font-bold text-sm uppercase tracking-wider">Welcome To The Ranks</p>
            <p className="text-neutral-400 text-xs mt-1">Check your inbox for your 10% welcome voucher.</p>
          </div>
        )}

        <p className="text-neutral-600 text-[11px] mt-4">
          By signing up, you agree to our Terms and Privacy Policy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};
