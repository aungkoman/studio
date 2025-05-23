"use client";

import { type RefObject, useEffect, useRef, useState } from 'react';

interface Args extends IntersectionObserverInit {
  freezeOnceVisible?: boolean;
  initialInView?: boolean;
}

export function useInView(
  elementRef: RefObject<Element>,
  {
    threshold = 0.1, // Default threshold: 10% of element visible
    root = null,
    rootMargin = '0px',
    freezeOnceVisible = true, // Stop observing once visible
    initialInView = false, // Initial state
  }: Args = {},
): boolean {
  const [isIntersecting, setIntersecting] = useState(initialInView);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Ensure this code runs only on the client
    if (typeof window === 'undefined' || !elementRef.current) {
      return;
    }

    if (observerRef.current) {
      observerRef.current.disconnect();
    }
    
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        const inView = entry.isIntersecting;
        if (inView) {
          setIntersecting(true);
          if (freezeOnceVisible && observerRef.current && elementRef.current) {
            observerRef.current.unobserve(elementRef.current);
          }
        } else if (!freezeOnceVisible) {
          setIntersecting(false);
        }
      },
      { threshold, root, rootMargin }
    );

    observerRef.current.observe(elementRef.current);

    // Initial check in case element is already in view
    if(elementRef.current && observerRef.current) {
        const boundingClientRect = elementRef.current.getBoundingClientRect();
        if (boundingClientRect.top < window.innerHeight && boundingClientRect.bottom >= 0) {
            // Element is in view
            if(!isIntersecting){ // only update if not already set to true by initialInView
              setIntersecting(true);
              if (freezeOnceVisible && observerRef.current && elementRef.current) {
                observerRef.current.unobserve(elementRef.current);
              }
            }
        }
    }


    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [elementRef, threshold, root, rootMargin, freezeOnceVisible, isIntersecting]); // Added isIntersecting to dependencies for re-evaluation if needed

  return isIntersecting;
}
