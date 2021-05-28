import React from 'react'
import styled, { css, useTheme } from 'styled-components'

export const Typography = () => {
  const theme = useTheme()

  return (
    <div>
      <h1>Typography</h1>
      <h4>theme.typography</h4>
      <p>
        <div>Font Family: {theme.typography.fontFamily}</div>
        <div>Base Font Size: {theme.typography.fontSize}</div>
      </p>
      <TypographyWrapper>
        <h1 style={{ ...theme.typography.heading1 }}>Heading1</h1>
        <h2 style={{ ...theme.typography.heading2 }}>Heading2</h2>
        <h3 style={{ ...theme.typography.heading3 }}>Heading3</h3>
        <h4 style={{ ...theme.typography.heading4 }}>Heading4</h4>
        <h5 style={{ ...theme.typography.heading5 }}>Heading5</h5>
        <h6 style={{ ...theme.typography.heading6 }}>Heading6</h6>
        <div style={{ ...theme.typography.subtitle1 }}>Subtitle1</div>
        <div style={{ ...theme.typography.subtitle2 }}>Subtitle2</div>
        <p style={{ ...theme.typography.body1 }}>Body1</p>
        <p style={{ ...theme.typography.body2 }}>Body2</p>
        <div style={{ ...theme.typography.button }}>Button</div>
        <div style={{ ...theme.typography.caption }}>Caption</div>
        <div style={{ ...theme.typography.overline }}>Overline</div>
      </TypographyWrapper>
    </div>
  )
}

export const TypographyWrapper = styled.div`
  ${({ theme }) => css`
    font-family: ${theme.typography.fontFamily};
    font-size: ${theme.typography.fontSize};
  `}

  & > * {
    margin: 0;
  }
`
