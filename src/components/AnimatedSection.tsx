"use client";

import { useRef, type HTMLAttributes } from 'react';
import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps extends HTMLAttributes<HTMLElement> {
  as?: keyof JSX.IntrinsicElements;
  animationClassName?: string;
  threshold?: number;
  once?: boolean;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  as: Component = 'section',
  children,
  className,
  animationClassName = 'opacity-0 translate-y-10', // Default start state for animation
  threshold = 0.1,
  once = true,
  ...props
}) => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { threshold, freezeOnceVisible: once });

  return (
    <Component
      ref={ref}
      className={cn(
        'transition-all duration-700 ease-out',
        isInView ? 'opacity-100 translate-y-0' : animationClassName,
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

export default AnimatedSection;
