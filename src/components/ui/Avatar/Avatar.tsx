import React from 'react'
import styled, { css } from 'styled-components'
import { RootWrapper } from '../RootWrapper/RootWrapper'
import { Icon } from '../Icon/Icon'

import type { ThemeColorType, ThemeSizeType } from '../../../theme/types'
import type { IconType, IconProps } from '../Icon/Icon'

export type AvatarVariantType = 'rounded' | 'square'

export type AvatarProps = {
  label?: string
  src?: string
  alt?: string
  type?: ThemeColorType
  size?: ThemeSizeType
  width?: number
  height?: number
  icon?: IconType
  variant?: AvatarVariantType
  IconProps?: IconProps
  LabelProps?: React.HTMLAttributes<HTMLDivElement>
} & Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>

/**
 * ### Facelift UI - Avatar
 *
 * Avatars are used throughout Facelift UI components, and are well suited for versatile usage in your application
 *
 * Avatars can be using an image as background or one of the available theme color types (primary, secondary etc..)
 *
 * An avatar can display either text or one of the Facelift UI icons
 *
 * Rounded & square variants are also available
 */
export const Avatar = ({
  alt: _alt,
  label,
  size = 'normal',
  src,
  type = 'primary',
  width: _width,
  height: _height,
  icon,
  variant,
  IconProps = {},
  LabelProps = {},
  ...rest
}: AvatarProps) => {
  const alt = _alt || 'Alt text is required!'

  return (
    <Wrapper
      data-badgerui-avatar=""
      aria-label={alt}
      role="img"
      src={src}
      type={type}
      variant={variant}
      {...rest}
      style={{
        ...(rest.style || {}),
      }}
    >
      {icon && (
        <IconWrapper>
          <Icon icon={icon} {...IconProps} />
        </IconWrapper>
      )}
      {label && (
        <LabelWrapper type={type} size={size} src={src} {...LabelProps}>
          {label}
        </LabelWrapper>
      )}
    </Wrapper>
  )
}

type WrapperProps = {
  src?: string
  type: ThemeColorType
  variant?: AvatarVariantType
}

const Wrapper = styled(RootWrapper)<WrapperProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  cursor: default;
  overflow: hidden;
  box-sizing: border-box;

  ${({ theme, type, src, variant }) => css`
    color: ${theme && theme.color && theme.color[type].text};
    background-color: ${theme && theme.color && theme.color[type].normal};
    background-image: ${src ? `url(${src})` : ''};
    background-size: cover;
    border-radius: ${theme && theme.metrics && variant !== undefined
      ? variant === 'rounded'
        ? theme.metrics.borderRadius
        : 0
      : ''};
  `}
`

type LabelWrapperProps = {
  type: ThemeColorType
  size: ThemeSizeType
  src?: string
}

const LabelWrapper = styled.div<LabelWrapperProps>`
  text-transform: uppercase;
  font-weight: 500;
  color: currentColor;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;

  ${({ theme, type, src }) => css`
    text-shadow: ${src
      ? `1px 1px 1px
      ${(theme && theme.color && theme.color[type].textInverseDimmed) || ''}`
      : 'none'};
  `}
`

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`
