import React, { useRef } from 'react'
import { nanoid } from 'nanoid'
import {
  FilledButton,
  OutlinedButton,
  MutedButton,
  FlatButton,
  ButtonInner,
  Adornment,
  Label,
} from './styled'
import { Icon } from '../Icon/Icon'

import type {
  ThemeAdorment,
  ThemeAdormentType,
  ThemeColorType,
  ThemeElevationType,
  ThemeSizeType,
  ThemeVariant,
} from '../../../theme/types'
import type { IconProps, IconType } from '../Icon/Icon'

const ButtonVariantMap = {
  filled: FilledButton,
  outlined: OutlinedButton,
  muted: MutedButton,
  flat: FlatButton,
}

export type ButtonProps = {
  elevation?: ThemeElevationType
  adornment?: ThemeAdorment
  busy?: boolean
  disabled?: boolean
  fullWidth?: boolean
  icon?: IconType
  iconPosition?: ThemeAdormentType
  label?: string
  size?: ThemeSizeType
  type?: ThemeColorType
  variant?: ThemeVariant
  AdornmentProps?: React.HTMLAttributes<HTMLDivElement>
  IconProps?: IconProps
  LabelProps?: React.HTMLAttributes<HTMLDivElement>
} & React.HTMLAttributes<HTMLDivElement>

export const Button = React.forwardRef(
  (
    {
      adornment = {},
      elevation = 0,
      busy = false,
      children,
      disabled = false,
      fullWidth = false,
      icon,
      iconPosition = 'start',
      label,
      size = 'normal',
      type = 'primary',
      variant = 'filled',
      AdornmentProps = {},
      IconProps = {},
      LabelProps = {},
      ...rest
    }: ButtonProps,
    ref: React.Ref<HTMLDivElement>
  ) => {
    const idRef = useRef(nanoid())
    const id = idRef.current

    const ButtonVariant = ButtonVariantMap[variant]

    return (
      <ButtonVariant
        data-cylindoui-button=""
        data-cylindoui-variant={variant}
        data-cylindoui-type={type}
        id={id}
        type={type}
        disabled={disabled}
        variant={variant}
        _elevation={elevation}
        fullWidth={fullWidth}
        size={size}
        role="button"
        {...rest}
        ref={ref}
      >
        <ButtonInner data-cylindoui-button-inner="" size={size}>
          {icon && iconPosition === 'start' && (
            <Adornment
              data-cylindoui-button-adornment=""
              data-cylindoui-button-adornment-start=""
              {...AdornmentProps}
            >
              <Icon
                data-cylindoui-button-icon=""
                icon={icon}
                size={size}
                {...IconProps}
              />
            </Adornment>
          )}
          {adornment.start !== undefined && (
            <Adornment
              data-cylindoui-button-adornment=""
              data-cylindoui-button-adornment-start=""
              {...AdornmentProps}
            >
              {adornment.start}
            </Adornment>
          )}
          <Label data-cylindoui-button-label="" {...LabelProps}>
            {label ? label : children}
          </Label>
          {adornment.end !== undefined && (
            <Adornment
              data-cylindoui-button-adornment=""
              data-cylindoui-button-adornment-end=""
              {...AdornmentProps}
            >
              {adornment.end}
            </Adornment>
          )}
          {icon && iconPosition === 'end' && (
            <Adornment
              data-cylindoui-button-adornment=""
              data-cylindoui-button-adornment-end=""
              {...AdornmentProps}
            >
              <Icon
                data-cylindoui-button-icon=""
                icon={icon}
                size={size}
                {...IconProps}
              />
            </Adornment>
          )}
        </ButtonInner>
      </ButtonVariant>
    )
  }
)
