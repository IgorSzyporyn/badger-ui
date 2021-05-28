import React, { useEffect, useRef, useState } from 'react'
import styled, { css } from 'styled-components'
import { nanoid } from 'nanoid'
import { isEmpty } from 'lodash'

import { Card } from '../Card/Card'
import { Icon } from '../Icon/Icon'
import { useObserveRect } from '../../../hooks/useObserveRect'

import type { IconProps } from '../Icon/Icon'
import type { CardProps } from '../Card/Card'

/**
 * ### Cylindo-UI: ExpandableCard
 *
 * Type definition for ExpandableCard component properties
 */
export type ExpandableCardProps<T extends HTMLElement = HTMLDivElement> = {
  actionArea?: React.ReactNode
  description?: string
  expanded?: boolean
  label?: string
  noPadding?: boolean
  utilityArea?: React.ReactNode
  InnerBodyProps?: React.HTMLAttributes<HTMLDivElement>
  ActionAreaProps?: React.HTMLAttributes<HTMLDivElement>
  BodyInnerProps?: React.HTMLAttributes<HTMLDivElement>
  BodyProps?: React.HTMLAttributes<HTMLDivElement>
  ControlButtonProps?: React.HTMLAttributes<HTMLButtonElement>
  DescriptionProps?: React.HTMLAttributes<HTMLHeadingElement>
  HeaderProps?: React.HTMLAttributes<HTMLDivElement>
  LabelProps?: React.HTMLAttributes<HTMLHeadingElement>
  StatusIconProps?: IconProps
  TitleAreaProps?: React.HTMLAttributes<HTMLDivElement>
  UtilityAreaProps?: React.HTMLAttributes<HTMLDivElement>
} & CardProps

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
  noPadding = false,
  utilityArea,
  ActionAreaProps = {},
  InnerBodyProps = {},
  BodyProps = {},
  ControlButtonProps = {},
  DescriptionProps = {},
  HeaderProps = {},
  LabelProps = {},
  StatusIconProps = {},
  TitleAreaProps = {},
  UtilityAreaProps = {},
  ...rest
}: ExpandableCardProps) {
  const [expanded, setExpanded] = useState(_expanded)

  const labelRef = useRef(nanoid())
  const labelId = labelRef.current
  const descriptionRef = useRef(nanoid())
  const descriptionId = descriptionRef.current

  const innerBodyRef = useRef<HTMLDivElement>(null)
  const { height: bodyHeight } = useObserveRect(innerBodyRef)

  useEffect(() => {
    setExpanded(_expanded)
  }, [_expanded])

  return (
    <Wrapper
      aria-describedby={descriptionId}
      aria-expanded={expanded}
      aria-labelledby={labelId}
      data-cylindoui-expandablecard=""
      noPadding={noPadding}
      expanded={expanded}
      {...rest}
    >
      <Header data-cylindoui-expandablecard-header="" {...HeaderProps}>
        <ControlButton
          data-cylindoui-expandablecard-controlbutton=""
          expanded={expanded}
          {...ControlButtonProps}
          onClick={(event) => {
            setExpanded(!expanded)
            ControlButtonProps.onClick && ControlButtonProps.onClick(event)
          }}
        >
          <StatusIcon
            data-cylindoui-expandablecard-statusicon=""
            expanded={expanded}
            icon="caretRight"
            size={15}
            {...StatusIconProps}
          />
        </ControlButton>
        <TitleArea data-cylindoui-expandablecard-titlearea="" {...TitleAreaProps}>
          <Label data-cylindoui-expandablecard-label="" id={labelId} {...LabelProps}>
            {label}
          </Label>
          <Description
            data-cylindoui-expandablecard-description=""
            id={descriptionId}
            {...DescriptionProps}
          >
            {description}
          </Description>
        </TitleArea>
        {utilityArea !== undefined && (
          <UtilityArea data-cylindoui-expandablecard-utilityarea="" {...UtilityAreaProps}>
            {utilityArea}
          </UtilityArea>
        )}
      </Header>
      {actionArea !== undefined && (
        <ActionArea data-cylindoui-expandablecard-actionarea="" {...ActionAreaProps}>
          {actionArea}
        </ActionArea>
      )}
      <Body
        data-cylindoui-expandablecard-body=""
        expanded={expanded}
        noPadding={noPadding}
        {...{
          ...BodyProps,
          style: {
            height: expanded && bodyHeight !== null ? bodyHeight : 0,
            opacity: expanded ? 1 : 0,
            visibility: expanded ? 'visible' : 'hidden',
            ...(BodyProps.style ?? {}),
          },
        }}
      >
        <div
          data-cylindoui-expandablecard-innerbody=""
          ref={innerBodyRef}
          {...InnerBodyProps}
        >
          {children}
        </div>
      </Body>
    </Wrapper>
  )
}

type WrapperProps = {
  expanded: boolean
  noPadding: boolean
}

const Wrapper = styled(Card)<WrapperProps>`
  ${({ expanded, noPadding, theme }) =>
    !isEmpty(theme) &&
    css`
      padding-bottom: ${expanded ? (noPadding ? 0 : theme.metrics.spacing) : 0};
    `}
`

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

        [data-cylindoui-icon-svg] {
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
      [data-cylindoui-icon-svg] {
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

type BodyProps = {
  expanded: boolean
  noPadding: boolean
}

const Body = styled.div<BodyProps>`
  transition: height 300ms ease-in-out, opacity 175ms ease-in-out,
    margin-top 300ms ease-in-out, visibility 175ms ease-in-out;
  will-change: height, opacity, margin-top, visibility;
  overflow: hidden;

  ${({ expanded, noPadding, theme }) =>
    !isEmpty(theme) &&
    css`
      margin-top: ${noPadding ? 0 : expanded ? `${theme.metrics.gutter}px` : 0};
      padding: ${noPadding ? 0 : `0 ${theme.metrics.spacing}px`};

      ${expanded
        ? css`
            height: auto;
          `
        : null}
    `}
`
