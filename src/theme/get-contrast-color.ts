import Color from 'color';
import { hex } from 'wcag-contrast';

import type { ThemeWCAGRatingType } from './types';

type GetContrastColorProps = {
  color: string;
  wcag: ThemeWCAGRatingType;
  primary?: 'light' | 'dark';
};

const lightColor = '#FFFFFF';
const darkColor = '#000000';

export const getContrastColor = ({ color, wcag, primary = 'light' }: GetContrastColorProps) => {
  const bgColor = Color(color).hex();
  let fgColor = primary === 'light' ? lightColor : darkColor;

  const rating = hex(bgColor, fgColor);
  const threshold = wcag === 'AAA' ? 4.5 : 3;

  if (rating < threshold) {
    fgColor = primary === 'light' ? darkColor : lightColor;
  }

  return fgColor;
};
