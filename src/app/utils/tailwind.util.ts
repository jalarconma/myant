import tailwindConfig from '../../../tailwind.config.cjs';
import { BreakpointDimension } from '../models/BreakpointDimension.js';
import { TailwindConfig } from '../models/TailwindConfig.js';
import { TailwindThemeObject } from '../models/TailwindThemeObject.js';

const screens = (tailwindConfig as TailwindConfig).theme?.extend?.screens ?? {};
const colors = (tailwindConfig as TailwindConfig).theme?.extend.colors({colors: {}});

export const getBreakpointValue = (value: string): number => {
  const breakpoint = screens[value];
  const pxIndex = typeof breakpoint === 'string' ? breakpoint.indexOf('px') : -1;

  if (pxIndex < 0) {
    return 0;
  }

  return +(breakpoint as string).slice(0, pxIndex);
};

export const getCurrentBreakpoint = () => {
  let currentBreakpoint = 'sm';
  let biggestBreakpointValue = 0;

  const breakpoints = Object.keys(screens);

  breakpoints?.forEach((breakpoint) => {
    const breakpointValue = getBreakpointValue(breakpoint);
    if (breakpointValue > biggestBreakpointValue && window.innerWidth >= breakpointValue) {
      biggestBreakpointValue = breakpointValue;
      currentBreakpoint = breakpoint;
    }
  });

  return currentBreakpoint;
};

export const getBreakpointsWithDimensions = () => {
  const breakpointDimensions: BreakpointDimension = {};
  const breakpoints = Object.keys(screens);

  for (const breakpoint of breakpoints) {
    const breakpointValue = getBreakpointValue(breakpoint);

    if (breakpointValue > 0) {
      breakpointDimensions[breakpoint] = breakpointValue;
    }
  }

  return breakpointDimensions;
};

export const getColor = (color: string): null | string | TailwindThemeObject => {
  const themeColors = colors({ colors: {} });
  if (!themeColors) {
    return null;
  }

  return themeColors[color];
};