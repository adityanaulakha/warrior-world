import React, { useEffect } from 'react';
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
  type HTMLMotionProps,
} from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1] as const;

function formatIndian(value: number) {
  const rounded = Math.round(value).toString();
  if (rounded.length <= 3) return rounded;
  const head = rounded.slice(0, -3);
  const tail = rounded.slice(-3);
  return `${head.replace(/\B(?=(\d{2})+(?!\d))/g, ',')},${tail}`;
}

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px 0px' }}
      transition={{ duration: 0.55, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

export function RevealText({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <h2 className={className}>{text}</h2>;
  const words = text.split(' ');
  return (
    <h2 className={className}>
      {words.map((word, index) => (
        <span key={`${word}-${index}`} className="mr-[0.18em] inline-block overflow-hidden pb-[0.08em] align-bottom leading-[0.95] last:mr-0">
          <motion.span
            className="inline-block"
            initial={{ y: '115%' }}
            whileInView={{ y: '0%' }}
            viewport={{ once: true, margin: '-8% 0px' }}
            transition={{ duration: 0.55, delay: index * 0.05, ease: EASE }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </h2>
  );
}

export function CountUp({
  to,
  prefix = '',
  suffix = '',
  indian = false,
  className,
}: {
  to: number;
  prefix?: string;
  suffix?: string;
  indian?: boolean;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });

  useEffect(() => {
    const node = ref.current;
    if (!node || !inView) return;
    const format = (current: number) => (indian ? formatIndian(current) : Math.round(current).toString());
    const paint = (current: number) => {
      node.textContent = `${prefix}${format(current)}${suffix}`;
    };
    if (reduce) {
      paint(to);
      return;
    }
    const controls = animate(0, to, {
      duration: 1.25,
      ease: EASE,
      onUpdate: paint,
    });
    return () => controls.stop();
  }, [inView, reduce, to, indian, prefix, suffix]);

  return (
    <span ref={ref} className={className}>
      {prefix}0{suffix}
    </span>
  );
}

export function Magnetic({
  children,
  className,
  strength = 0.18,
}: {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}) {
  const reduce = useReducedMotion();
  const ref = React.useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 260, damping: 18, mass: 0.3 });
  const springY = useSpring(y, { stiffness: 260, damping: 18, mass: 0.3 });

  const onMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((event.clientX - (rect.left + rect.width / 2)) * strength);
    y.set((event.clientY - (rect.top + rect.height / 2)) * strength);
  };

  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ x: springX, y: springY }}
      onMouseMove={onMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}

type CardMotion = HTMLMotionProps<'article'>;

export function MotionCard({
  delay = 0,
  className,
  children,
  ...rest
}: CardMotion & { delay?: number }) {
  const reduce = useReducedMotion();
  if (reduce) return <article className={className}>{children as React.ReactNode}</article>;
  return (
    <motion.article
      className={className}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px 0px' }}
      transition={{ duration: 0.5, delay, ease: EASE }}
      {...rest}
    >
      {children}
    </motion.article>
  );
}
