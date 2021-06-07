import styled, { css } from 'styled-components'

import type {
  ThemeColorType,
  ThemeElevationType,
  ThemeSizeType,
  ThemeVariant,
} from '../../../theme/types'

type WrapperProps = {
  disabled: boolean
  fullWidth: boolean
  size: ThemeSizeType
  type: ThemeColorType
  _elevation: ThemeElevationType
  variant: ThemeVariant
}

const BaseButton = styled.div<WrapperProps>`
  background-color: transparent;
  border: 1px solid transparent;
  cursor: pointer;
  font-weight: 500;
  text-transform: uppercase;
  transition: 'box-shadow 125ms ease-in-out';

  ${({ fullWidth, theme, _elevation, size, disabled }) => css`
    display: ${fullWidth ? 'block' : 'inline-block'};
    border-radius: ${theme && theme.metrics ? theme.metrics.borderRadius : ''};
    font-size: ${theme && theme.size ? `${theme.size.font[size]}px` : ''};
    opacity: ${disabled ? 0.4 : 1};
    box-shadow: ${_elevation && theme && theme.elevations
      ? theme.elevations[_elevation]
      : ''};
  `}
`

export const FilledButton = styled(BaseButton)<WrapperProps>`
  ${({ theme, type }) => css`
    background-color: ${theme && theme.color ? theme.color[type].normal : ''};
    color: ${theme && theme.color ? theme.color[type].text : ''};
  `}
`

export const OutlinedButton = styled(BaseButton)<WrapperProps>`
  ${({ theme, type }) => css`
    border-color: ${theme && theme.color ? theme.color[type].normal : ''};
    color: ${theme && theme.color ? theme.color[type].normal : ''};
  `}
`

export const MutedButton = styled(BaseButton)<WrapperProps>`
  ${({ theme, type }) => css`
    background-color: ${theme && theme.color ? theme.color[type].dimmed : ''};
    border-color: ${theme && theme.color ? theme.color[type].darkest : ''};
    color: ${theme && theme.color ? theme.color[type].darkest : ''};
  `}
`

export const FlatButton = styled(BaseButton)<WrapperProps>`
  color: ${({ theme, type }) => (theme && theme.color ? theme.color[type].normal : '')};
`

export const ButtonInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Adornment = styled.div`
  display: flex;

  &[data-badgerui-button-adornment-start] {
    margin-right: 0.5em;

    &:last-child {
      margin-right: 0;
    }
  }

  &[data-badgerui-button-adornment-end] {
    margin-left: 0.5em;

    &:last-child {
      margin-left: 0;
    }
  }
`

export const Label = styled.div`
  line-height: 1;
`
