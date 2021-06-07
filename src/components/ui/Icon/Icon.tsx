import React from 'react'
import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'
import { isEmpty } from 'lodash'

import { icons } from './icons'

import type { HTMLMotionProps } from 'framer-motion'
import type { ThemeColorType, ThemeSizeType } from '../../../theme/types'

export type IconType = keyof typeof icons

export type IconProps = {
  animateFill?: boolean
  fill?: string
  icon?: IconType
  size?: ThemeSizeType
  width?: number | string
  height?: number | string
  type?: ThemeColorType
  SvgProps?: React.HTMLAttributes<SVGSVGElement>
} & HTMLMotionProps<'i'> &
  React.HTMLAttributes<HTMLElement>

/**
 * ### Cylindo-UI: Icon
 *
 * Base Icon component for Cylindo-UI
 */
export const Icon = React.forwardRef((props: IconProps, ref: React.Ref<HTMLElement>) => {
  const {
    fill,
    icon = 'questionmark',
    width: _width,
    height: _height,
    type,
    SvgProps = {},
    ...rest
  } = props

  let width = _width != null ? _width : undefined
  let height = _height != null ? _height : undefined

  if (typeof width === 'number') {
    width = String(width)
  }

  if (typeof height === 'number') {
    height = String(height)
  }

  if (width == null) {
    width = '100%'
  }

  if (height == null) {
    height = '100%'
  }

  return (
    <Wrapper aria-label={icon} data-badgerui-icon="" role="img" {...rest} ref={ref}>
      <Svg
        data-badgerui-icon-svg=""
        type={type}
        fill={fill}
        height={height}
        width={width}
        viewBox="0 0 24 24"
        {...SvgProps}
      >
        {icons[icon]}
      </Svg>
    </Wrapper>
  )
})

const Wrapper = styled(motion.i)`
  display: inline-flex;
`

type SvgProps = {
  animateFill?: boolean
  fill?: string
  type?: ThemeColorType
}

const Svg = styled.svg<SvgProps>`
  fill: currentColor;

  ${({ theme, fill, type }) =>
    !isEmpty(theme) &&
    css`
      fill: ${fill !== undefined
        ? fill
        : type !== undefined
        ? theme.color[type].normal
        : 'currentColor'};
    `}
`
