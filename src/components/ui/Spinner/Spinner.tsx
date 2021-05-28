import React from 'react'
import styled, { keyframes, css } from 'styled-components'
import { isEmpty } from 'lodash'

import type { ThemeColorType } from '../../../theme/types'

const animation = keyframes`
  to {
    transform: rotate(1turn)
  }
`

export type SpinnerProps = {
  size?: number
  speed?: number
  type?: ThemeColorType
} & React.HTMLAttributes<HTMLDivElement>

export const Spinner = ({
  size = 20,
  speed = 700,
  type = 'primary',
  ...rest
}: SpinnerProps) => {
  return <Wrapper size={size} type={type} speed={speed} {...rest} />
}

type WrapperProps = {
  size: number
  speed: number
  type: ThemeColorType
}

const Wrapper = styled.div<WrapperProps>`
  border-radius: 50%;
  opacity: 0.7;
  position: absolute;
  z-index: 999;

  ${({ type, theme, size, speed }) =>
    !isEmpty(theme) &&
    css`
      animation: ${animation} ${speed}ms infinite linear;
      border-left-color: ${theme.color[type].normal};
      border: ${size * 0.1}px solid ${theme.color.border.dimmed};
      height: ${size}px;
      transition: opacity ${speed / 2}ms ease;
      width: ${size}px;
    `}
`
