import React, { useRef } from 'react'
import { nanoid } from 'nanoid'
import styled, { css } from 'styled-components'
import { isEmpty } from 'lodash'

import { Icon } from '../Icon/Icon'
import { Tooltip } from '../Tooltip/Tooltip'

import type { TooltipProps } from '../Tooltip/Tooltip'
import type { IconProps } from '../Icon/Icon'
import type { ColorScaleType } from '../../../theme/types'

export type FieldsetProps = {
  type?: ColorScaleType
  label?: string
  tooltip?: string
  LegendProps?: React.HTMLAttributes<HTMLLegendElement>
  LabelProps?: React.HTMLAttributes<HTMLSpanElement>
  TooltipProps?: TooltipProps
  TooltipIconProps?: IconProps
  BodyProps?: React.HTMLAttributes<HTMLDivElement>
} & React.HTMLAttributes<HTMLFieldSetElement>

export const Fieldset = ({
  children,
  type = 'normal',
  label,
  tooltip,
  LegendProps = {},
  LabelProps = {},
  TooltipProps,
  TooltipIconProps = {},
  BodyProps = {},
  ...rest
}: FieldsetProps) => {
  const labelRef = useRef(nanoid())
  const labelId = LabelProps.id ?? labelRef.current
  const hasTooltip = tooltip !== undefined

  return (
    <Wrapper aria-labelledby={labelId} data-cylindoui-fieldset="" type={type} {...rest}>
      <Legend data-cylindoui-fieldset-legend="" hasTooltip={hasTooltip} {...LegendProps}>
        {tooltip && (
          <Tooltip data-cylindoui-fieldset-tooltip="" label={tooltip} {...TooltipProps}>
            <Icon
              data-cylindoui-fieldset-tooltipicon=""
              icon="questionmark"
              width={16}
              {...TooltipIconProps}
            />
          </Tooltip>
        )}
        <Label data-cylindoui-fieldset-label="" id={labelId} {...LabelProps}>
          {label}
        </Label>
      </Legend>
      <Body data-cylindoui-fieldset-body="" {...BodyProps}>
        {children}
      </Body>
    </Wrapper>
  )
}

type WrapperProps = {
  type: ColorScaleType
}

const Wrapper = styled.fieldset<WrapperProps>`
  ${({ type, theme }) =>
    !isEmpty(theme) &&
    css`
      padding: ${theme.metrics.spacing};
      border: 1px solid ${theme.color.border[type]};
      border-radius: ${theme.metrics.borderRadius};

      & > *:not(legend) {
        margin-bottom: ${theme.metrics.gutterExpanded};

        &:last-child {
          margin-bottom: 0;
        }
      }
    `}
`

type LegendProps = {
  hasTooltip: boolean
}

const Legend = styled.legend<LegendProps>`
  display: flex;
  align-items: center;

  & > [data-cylindoui-fieldset-tooltipicon] {
    transition: width 125ms ease-in-out, height 125ms ease-in-out,
      transform 125ms ease-in-out;
    transform-origin: center;
    will-change: width, height;
  }

  ${({ hasTooltip, theme }) =>
    !isEmpty(theme) &&
    css`
      padding: 0 ${theme.metrics.gutter};

      & > [data-cylindoui-fieldset-tooltipicon] {
        transform: ${hasTooltip ? 'scale(1)' : 'scale(0)'};
        width: ${hasTooltip ? '16px' : 0};
        height: ${hasTooltip ? '16px' : 0};
      }

      & > [data-cylindoui-fieldset-label] {
        transition: margin-left 125ms ease-in-out;
        will-change: margin-left;

        color: ${theme.typography.textColor};
        margin-left: ${hasTooltip ? theme.metrics.gutterExpanded : 0};
      }
    `}
`

const Label = styled.span``

const Body = styled.div``
