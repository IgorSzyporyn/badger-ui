import React from 'react';
import styled from 'styled-components';

import type { ThemeColorScale, ThemeColorScaleType } from '../theme/types';

export type ColorScalePreviewProps = {
  colorScale: ThemeColorScale;
  title: string;
} & React.HTMLAttributes<HTMLDivElement>;

export const ColorScalePreview = ({ colorScale, title, ...rest }: ColorScalePreviewProps) => {
  return (
    <ColorWrapper {...rest}>
      <ColorTypeTitle>{title}</ColorTypeTitle>
      <ColorList>
        {Object.keys(colorScale).map((_scaleKey, scaleIndex) => {
          const scaleKey = _scaleKey as ThemeColorScaleType;
          return (
            <ColorItem key={`${scaleIndex}`}>
              <ColorBox color={colorScale[scaleKey]} />
              <ColorTitle>
                <div>{scaleKey}</div>
                <div>{colorScale[scaleKey]}</div>
              </ColorTitle>
            </ColorItem>
          );
        })}
      </ColorList>
    </ColorWrapper>
  );
};

const ColorWrapper = styled.div`
  margin-bottom: 32px;
`;

const ColorTypeTitle = styled.h2`
  margin-bottom: 8px;
  font-size: 18px;
`;

const ColorList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-column-gap: 16px;
`;

const ColorItem = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const ColorBox = styled.div`
  padding-top: 100%;
  width: 100%;
  background-color: ${({ color }) => color};
`;

const ColorTitle = styled.div`
  margin-top: 4px;
  text-align: center;

  & > div:first-of-type {
    font-weight: 500;
    margin-bottom: 4px;
  }

  & > div:last-of-type {
    font-size: 10px;
  }
`;
