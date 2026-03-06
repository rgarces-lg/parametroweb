import { useEffect, useRef, useState } from 'react';

export const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          // Optional: stop observing once it has animated in once.
          if (targetRef.current && !options.repeat) {
            observer.unobserve(targetRef.current);
          }
        } else if (options.repeat) {
          // If repeat is true, hide it when scrolled out of view to re-animate later
          setIsIntersecting(false);
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of element is visible
        rootMargin: '0px 0px -50px 0px', // slightly before it fully enters
        ...options
      }
    );

    const currentRef = targetRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options.repeat, options.threshold, options.rootMargin]);

  return [targetRef, isIntersecting];
};
