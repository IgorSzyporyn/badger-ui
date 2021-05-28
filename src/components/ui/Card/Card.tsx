import React from 'react'
import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'
import { isEmpty } from 'lodash'

import type { HTMLMotionProps } from 'framer-motion'
import type { ThemeElevationType } from '../../../theme/types'

/**
 * ### Cylindo-UI: Card
 *
 * Type definition for Card component properties
 */
export type CardProps = {
  elevation?: ThemeElevationType
} & HTMLMotionProps<'div'> &
  React.HTMLAttributes<HTMLDivElement>

/**
 * ### cylindo-ui: Card
 * Minimalistic box component with optional rounded borders & elevation
 * - Takes a generic type for typesafety if "as" property is used
 * - Uses theme background.paper for background color
 */

export const Card = React.forwardRef(
  ({ children, elevation = 0, ...rest }: CardProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <Wrapper data-cylindoui-card="" elevation={elevation} {...rest} ref={ref}>
        {children}
      </Wrapper>
    )
  }
)

type WrapperProps = {
  elevation: ThemeElevationType
}

const Wrapper = styled(motion.div)<WrapperProps>`
  ${({ theme, elevation }) => {
    if (isEmpty(theme)) {
      return null
    }

    return css`
      background: ${theme.background.surface.normal};
      border-radius: ${theme.metrics.borderRadius};
      box-shadow: ${theme.elevations[elevation]};
      border: ${!elevation ? `1px solid ${theme.color.border.lighter}` : '0 none'};
      transform: box-shadow 125ms ease-in-out;
    `
  }}
`
