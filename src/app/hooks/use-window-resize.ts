import { useState, useEffect } from 'react';

import {
  getCurrentBreakpoint,
  getBreakpointsWithDimensions,
} from '../utils/tailwind.util';

function useWindowResize() {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [currentBreakpoint, setCurrentBreakpoint] = useState(getCurrentBreakpoint());

  const handleResize = () => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
    setCurrentBreakpoint(getCurrentBreakpoint());
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize, false);
  }, []);

  return {
    dimensions,
    currentBreakpoint,
    breakpointsWithDimensions: getBreakpointsWithDimensions(),
  };
}

export default useWindowResize;