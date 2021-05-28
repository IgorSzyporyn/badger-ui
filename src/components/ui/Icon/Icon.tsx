import React from 'react'
import styled, { css, useTheme } from 'styled-components'
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
  width?: number
  height?: number
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
  const theme = useTheme()

  const {
    animateFill,
    fill,
    icon = 'questionmark',
    size,
    width,
    height,
    type,
    SvgProps = {},
    ...rest
  } = props

  let _width = width
  let _height = height || _width

  // Size takes predecence over width & height - width is shorthand for both
  if (theme && theme.size && size) {
    _width = theme.size.icon[size]
    _height = _width
  }

  return (
    <Wrapper aria-label={icon} data-cylindoui-icon="" role="img" {...rest} ref={ref}>
      <Svg
        data-cylindoui-icon-svg=""
        animateFill={animateFill}
        fill={fill}
        height={_height}
        type={type}
        viewBox="0 0 24 24"
        width={_width}
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

  ${({ animateFill }) =>
    animateFill &&
    css`
      transition: fill 125ms ease-in-out;
    `}
`
