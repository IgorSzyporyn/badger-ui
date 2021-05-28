import React, { useRef, useState, useEffect } from 'react';
import observeRect from '@reach/observe-rect';

export type ObserveRectState = {
  bottom: number;
  height: number;
  left: number;
  right: number;
  top: number;
  width: number;
  x: number;
  y: number;
};

const initialRectState: ObserveRectState = {
  bottom: 0,
  height: 0,
  left: 0,
  right: 0,
  top: 0,
  width: 0,
  x: 0,
  y: 0,
};

export const useObserveRect = <T extends HTMLElement = HTMLElement>(
  nodeRef: React.RefObject<T>,
  observe: boolean = true
) => {
  const [rectState, setRectState] = useState<ObserveRectState>({ ...initialRectState });
  const observerRef = useRef<any>(null);
  const initialRectSet = useRef(false);

  useEffect(() => {
    const cleanup = () => {
      observerRef.current && observerRef.current.unobserve();
    };

    if (!nodeRef.current) {
      console.warn('Cylindo-UI (useObserveRect): You need to place the ref');
      return cleanup;
    }

    if (!observerRef.current) {
      observerRef.current = observeRect(nodeRef.current, (rect) => {
        setRectState({ ...rectState, ...rect.toJSON() });
      });
    }

    if (!initialRectSet.current) {
      initialRectSet.current = true;
      const rect = nodeRef.current.getBoundingClientRect();

      setRectState({ ...rectState, ...rect.toJSON() });
    }

    observe && observerRef.current.observe();
    return cleanup;
    // eslint-disable-next-line
  }, [setRectState]);

  return rectState;
};
