import React, { useEffect, useRef, useState } from 'react'
import styled, { css } from 'styled-components'
import { nanoid } from 'nanoid'
import { isEmpty } from 'lodash'

import { Paper } from '../Paper/Paper'
import { Icon } from '../Icon/Icon'

import type { IconProps } from '../Icon/Icon'
import type { PaperProps } from '../Paper/Paper'
import { CollapsibleBox } from '../CollapsibleBox/CollapsibleBox'
import { HTMLMotionProps } from 'framer-motion'

/**
 * ### Cylindo-UI: ExpandableCard
 *
 * Type definition for ExpandableCard component properties
 */
export type ExpandableCardProps = {
  actionArea?: React.ReactNode
  description?: string
  expanded?: boolean
  label?: string
  utilityArea?: React.ReactNode
  BodyProps?: React.HTMLAttributes<HTMLDivElement> & HTMLMotionProps<'div'>
  StatusIconProps?: IconProps
} & PaperProps

/**
 * ### cylindo-ui: ExpandableCard
 * Uses Card component to create a expandable body section and header with layout
 *
 * - Will accept and pipe CardProps to Card
 * - Can have it's expanded state controlled, or control it itself
 */
export function ExpandableCard({
  actionArea,
  children,
  description,
  expanded: _expanded = false,
  label,
  utilityArea,
  BodyProps = {},
  StatusIconProps = {},
  ...rest
}: ExpandableCardProps) {
  const [expanded, setExpanded] = useState(_expanded)

  const labelRef = useRef(nanoid())
  const labelId = labelRef.current
  const descriptionRef = useRef(nanoid())
  const descriptionId = descriptionRef.current

  useEffect(() => {
    setExpanded(_expanded)
  }, [_expanded])

  return (
    <Wrapper
      aria-describedby={descriptionId}
      aria-expanded={expanded}
      aria-labelledby={labelId}
      data-badgerui-expandablecard=""
      {...rest}
    >
      <Header data-badgerui-expandablecard-header="">
        <ControlButton
          data-badgerui-expandablecard-controlbutton=""
          expanded={expanded}
          onClick={() => {
            setExpanded(!expanded)
          }}
        >
          <StatusIcon
            data-badgerui-expandablecard-statusicon=""
            expanded={expanded}
            icon="caretRight"
            width={15}
            {...StatusIconProps}
          />
        </ControlButton>
        <TitleArea data-badgerui-expandablecard-titlearea="">
          <Label data-badgerui-expandablecard-label="" id={labelId}>
            {label}
          </Label>
          <Description data-badgerui-expandablecard-description="" id={descriptionId}>
            {description}
          </Description>
        </TitleArea>
        {utilityArea !== undefined && (
          <UtilityArea data-badgerui-expandablecard-utilityarea="">
            {utilityArea}
          </UtilityArea>
        )}
      </Header>
      {actionArea !== undefined && (
        <ActionArea data-badgerui-expandablecard-actionarea="">{actionArea}</ActionArea>
      )}
      <CollapsibleBox
        data-badgerui-expandablecard-body=""
        collapsed={!expanded}
        {...BodyProps}
      >
        {children}
      </CollapsibleBox>
    </Wrapper>
  )
}

const Wrapper = styled(Paper)``

const Header = styled.div`
  display: flex;
  align-items: center;

  ${({ theme }) =>
    !isEmpty(theme) &&
    css`
    padding: ${theme.metrics.spacingCollapsed} ${theme.metrics.spacing}};
  `}
`
type ControlButtonProps = {
  expanded: boolean
}

// @TODO - This should just be a cylindo-ui <Button /> component
const ControlButton = styled.button<ControlButtonProps>`
  background-color: transparent;
  border: 2px solid transparent;
  outline: none;
  border-radius: 100%;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ theme }) =>
    !isEmpty(theme) &&
    css`
      height: calc(${theme.metrics.spacing} * 2);
      width: calc(${theme.metrics.spacing} * 2);
      margin-right: ${theme.metrics.gutter};
      transition: background-color 125ms ease-in-out, border-color 125ms ease-in-out;
      will-change: background-color, border-color;

      &:hover {
        background-color: ${theme.color.grey.lighter};
      }

      &:focus,
      &:active {
        border-color: ${theme.color.primary.normal};
      }

      &:focus {
        background-color: ${theme.color.grey.lighter};
      }

      &:active {
        background-color: ${theme.color.primary.dimmed};

        [data-badgerui-icon-svg] {
          fill: ${theme.color.primary.normal};
        }
      }
    `}
`

type StatusIconProps = {
  expanded: boolean
}

const StatusIcon = styled(Icon)<StatusIconProps>`
  transition: all 125ms ease-in-out;
  transform: ${({ expanded }) => (expanded ? 'rotate(90deg)' : 'rotate(0deg)')};

  ${({ expanded, theme }) =>
    !isEmpty(theme) &&
    css`
      [data-badgerui-icon-svg] {
        fill: ${expanded ? theme.color.primary.normal : theme.color.grey.darker};
      }
    `}
`

const TitleArea = styled.div`
  flex-grow: 1;
`

const Label = styled.h2``

const Description = styled.h3`
  font-size: 10px;
  font-weight: 300;
`

const ActionArea = styled.div`
  display: flex;
  align-items: center;

  ${({ theme }) =>
    !isEmpty(theme) &&
    css`
      padding: 0 ${theme.metrics.spacing};
      margin: ${theme.metrics.spacing} 0;

      & > * {
        margin-right: 0 ${theme.metrics.gutterExpanded};

        &:last-child {
          margin-right: 0;
        }
      }
    `}
`

const UtilityArea = styled.div`
  display: flex;
  align-items: center;
  justify-self: flex-end;
`
