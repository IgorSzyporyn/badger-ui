import React, { useRef } from 'react'
import styled, { css } from 'styled-components'
import { nanoid } from 'nanoid'
import { isEmpty } from 'lodash'

import { Spinner as _Spinner } from '../Spinner/Spinner'
import { Icon as _Icon } from '../Icon/Icon'

import type { IconProps } from '../Icon/Icon'
import type { SpinnerProps } from '../Spinner/Spinner'
import type { ThemeColorType } from '../../../theme/types'

export type CheckboxProps = {
  busy?: boolean
  disabled?: boolean
  label?: React.ReactNode
  value?: boolean
  type?: ThemeColorType
  onClick?: (value: boolean) => void
  onChange?: (value: boolean) => void
  CircleProps?: React.HTMLAttributes<HTMLDivElement>
  DotProps?: React.HTMLAttributes<HTMLDivElement>
  IconProps?: IconProps
  LabelProps?: React.HTMLAttributes<HTMLDivElement>
  SpinnerProps?: SpinnerProps
} & Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick' | 'onChange'>

export const Checkbox = ({
  busy = false,
  disabled = false,
  label,
  value: checked = false,
  type = 'primary',
  CircleProps = {},
  DotProps = {},
  IconProps = {},
  LabelProps = {},
  SpinnerProps = {},
  onClick,
  onChange,
  ...rest
}: CheckboxProps) => {
  const labelRef = useRef(nanoid())
  const labelId = LabelProps.id ?? labelRef.current

  return (
    <Wrapper
      role="checkbox"
      aria-busy={busy}
      aria-checked={checked}
      aria-disabled={disabled}
      aria-labelledby={label !== undefined ? labelId : ''}
      data-cylindoui-checkbox=""
      busy={busy}
      disabled={disabled}
      tabIndex={0}
      type={type}
      checked={checked}
      {...rest}
      onClick={() => {
        if (!disabled && !busy) {
          onClick && onClick(!checked)
          onChange && onChange(!checked)
        }
      }}
      onChange={() => undefined}
      onKeyPress={(event: React.KeyboardEvent<HTMLDivElement>) => {
        if (rest.onKeyPress) {
          rest.onKeyPress(event)
        }

        const { charCode } = event

        if (!disabled && !busy && (charCode === 13 || charCode === 32)) {
          onClick && onClick(!checked)
          onChange && onChange(!checked)
        }
      }}
    >
      <Circle data-cylindoui-checkbox-circle="" {...CircleProps}>
        <Dot data-cylindoui-checkbox-dot="" {...DotProps} />
        <Icon
          data-cylindoui-checkbox-icon=""
          color="white"
          icon="checkmark"
          width={18}
          {...IconProps}
        />
        {busy && (
          <Spinner data-cylindoui-checkbox-spinner="" size={7} {...SpinnerProps} />
        )}
      </Circle>
      {label !== undefined && (
        <Label data-cylindoui-checkbox-label="" id={labelId} {...LabelProps}>
          {label}
        </Label>
      )}
    </Wrapper>
  )
}

type WrapperProps = {
  busy: boolean
  disabled: boolean
  checked: boolean
  type: ThemeColorType
}

const Wrapper = styled.div<WrapperProps>`
  align-items: center;
  display: flex;
  outline: none;

  // Non themed props specific css
  ${({ disabled, busy }) => css`
    cursor: ${disabled || busy ? 'default' : 'pointer'};
    opacity: ${disabled ? 0.64 : 1};
    transition: opacity 125ms ease-in-out;
  `}

  // Themed props specifc css
  ${({ type, disabled: _disabled, busy, checked, theme }) => {
    if (isEmpty(theme)) {
      return null
    }

    const colorSource = theme.color[type]
    const color = colorSource.normal
    const disabled = _disabled || busy

    return css`
      ${disabled &&
      css`
        &:hover {
          [data-cylindoui-checkbox-circle] {
            border-color: ${color};
          }

          [data-cylindoui-checkbox-label] {
            color: ${color};
          }
        }
      `}

      &:focus {
        [data-cylindoui-checkbox-circle] {
          border-color: ${color};
        }

        [data-cylindoui-checkbox-label] {
          color: ${color};
          font-weight: 700;
        }
      }

      &:active {
        [data-cylindoui-checkbox-circle] {
          border-color: ${color};
        }

        [data-cylindoui-checkbox-label] {
          color: ${color};
        }
      }

      [data-cylindoui-checkbox-label] {
        color: ${theme.typography.textColor};
      }

      [data-cylindoui-checkbox-circle] {
        border-color: ${checked ? color : theme.color.border.normal};
        will-change: border-color;

        [data-cylindoui-checkbox-dot] {
          transform: ${checked ? 'scale(1)' : 'scale(0)'};
          background-color: ${color};
        }

        [data-cylindoui-checkbox-icon] {
          transform: ${checked ? 'scale(1)' : 'scale(0)'};
        }
      }
    `
  }}
`

const Circle = styled.div`
  align-items: center;
  border-radius: 100%;
  border-style: solid;
  border-width: 1px;
  display: flex;
  height: 21px;
  justify-content: center;
  transition: border-color 125ms ease-in-out;
  width: 21px;
`

const Dot = styled.div`
  border-radius: 100%;
  height: 19px;
  transition: all 125ms ease-in-out;
  width: 19px;
`

const Icon = styled(_Icon)`
  position: absolute;
  transition: all 125ms ease-in-out;
`

const Spinner = styled(_Spinner)`
  position: absolute;
`

const Label = styled.div`
  font-weight: 400;
  margin-left: 8px;
`
