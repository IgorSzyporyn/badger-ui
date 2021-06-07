import React from 'react'
import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'
import { isEmpty } from 'lodash'

import type { HTMLAttributes } from 'react'
import type { HTMLMotionProps } from 'framer-motion'
import type { ThemeElevationType } from '../../../theme/types'

/**
 * ### Facelift-UI: Paper
 *
 * Type definition for Paper component properties
 */
export type PaperProps = {
  elevation?: ThemeElevationType
} & HTMLAttributes<HTMLDivElement> &
  HTMLMotionProps<'div'>

/**
 * ## Facelift UI - Paper
 *
 * Minimalistic paper component with optional rounded borders & elevation
 *
 * - Uses **theme.background.paper** for background color
 * - Will accept any framer motion props and can be animated
 */
export const Paper = React.forwardRef(
  ({ children, elevation = 0, ...rest }: PaperProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <Wrapper data-badgerui-paper="" elevation={elevation} {...rest} ref={ref}>
        {children}
      </Wrapper>
    )
  }
)

type WrapperProps = HTMLMotionProps<'div'> & {
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
