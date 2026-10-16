import React from 'react';
import { RevealText } from './motion';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: string;
  onAction?: () => void;
  light?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  action,
  onAction,
  light = false,
}) => {
  return (
    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-7 md:mb-8">
      <div>
        {eyebrow && (
          <p className={`bc-kicker ${light ? 'text-white/70' : ''}`}>{eyebrow}</p>
        )}
        <RevealText text={title} className={`bc-h2 !leading-[0.95] ${light ? 'text-white' : ''}`} />
        {description && (
          <p className={`bc-lede ${light ? 'text-white/75' : ''}`}>{description}</p>
        )}
      </div>
      {action && (
        <button type="button" onClick={onAction} className={`bc-text-link self-start md:self-auto ${light ? 'text-white' : ''}`}>
          {action}
        </button>
      )}
    </div>
  );
};
