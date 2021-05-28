import React, { useEffect, createRef } from 'react'
import styled, { css } from 'styled-components'
import { useCycle, AnimatePresence } from 'framer-motion'
import { Button as _Button } from '../Button/Button'
import { Card } from '../Card/Card'
import { useObserveRect } from '../../../hooks/useObserveRect'
import { isEmpty } from 'lodash'

import type { ObserveRectState } from '../../../hooks/useObserveRect'
import type { ButtonProps } from '../Button/Button'
import type { CardProps } from '../Card/Card'
import type { ThemeColorType } from '../../../theme/types'

export type MenuButtonProps = {
  open?: boolean
  menu?: React.ReactNode
  MenuProps?: CardProps
} & ButtonProps &
  React.HTMLAttributes<HTMLDivElement>

export const MenuButton = ({
  open: _open = false,
  iconPosition = 'end',
  icon = 'caretDown',
  menu,
  label,
  children,
  type = 'primary',
  MenuProps = {},
  ...rest
}: MenuButtonProps) => {
  const buttonRef = createRef<HTMLDivElement>()
  const buttonRect = useObserveRect(buttonRef)
  const [menuState, cycleMenuState] = useCycle(
    { open: false, icon: 0 },
    { open: true, icon: 180 }
  )

  useEffect(() => {
    if (_open !== menuState.open) {
      cycleMenuState()
    }
  }, [])

  useEffect(() => {
    if (_open !== menuState.open) {
      cycleMenuState()
    }
  }, [_open])

  return (
    <>
      <Button
        data-cylindoui-menubutton=""
        children={children}
        icon={icon}
        iconPosition={iconPosition}
        label={label}
        ref={buttonRef}
        type={type}
        IconProps={{
          animate: { rotateX: menuState.icon },
          transition: { duration: 0.3 },
        }}
        {...rest}
        onClick={() => {
          cycleMenuState()
        }}
      />
      <AnimatePresence>
        {menuState.open && (
          <Menu
            data-cylindoui-menubutton-menu=""
            buttonRect={buttonRect}
            elevation={0}
            type={type}
            initial={{ opacity: 1, y: buttonRect.height * -1 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.125 } }}
            exit={{ opacity: 0, y: 0, transition: { duration: 0.125 } }}
            {...MenuProps}
          >
            {menu}
          </Menu>
        )}
      </AnimatePresence>
    </>
  )
}

const Button = styled(_Button)``

type MenuProps = {
  buttonRect: ObserveRectState
  type: ThemeColorType
}

const Menu = styled(Card)<MenuProps>`
  position: absolute;

  ${({ type, buttonRect: { bottom, left, width }, theme }) => {
    if (isEmpty(theme)) {
      return null
    }

    const colorSource = theme.color[type]

    return css`
      top: ${bottom}px;
      margin-top: ${theme.metrics.borderRadius};
      left: ${left}px;
      min-width: ${width}px;
      z-index: 9999;

      border: 1px solid ${colorSource.normal};
    `
  }}
`
