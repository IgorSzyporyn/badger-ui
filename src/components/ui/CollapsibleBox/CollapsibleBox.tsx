import React, { useEffect, useRef, useState } from 'react'
import { HTMLMotionProps, motion } from 'framer-motion'
import styled from 'styled-components'
import { useMeasure } from '../../../hooks/useMeasure'

const variants = {
  collapsed: { height: 0 },
  expanded: { height: 'auto' },
}

const getAutoHeightDuration = (height: number) => {
  if (!height) {
    return 0
  }

  const constant = height / 36
  const duration = Math.round((4 + 15 * constant ** 0.25 + constant / 5) * 10)

  return duration
}

export type CollapsibleBoxProps = {
  collapsed?: boolean
  duration?: number
  BodyProps?: React.HTMLAttributes<HTMLDivElement>
} & React.HTMLAttributes<HTMLDivElement> &
  HTMLMotionProps<'div'>

/**
 * ### CollapsibleBox
 *
 * Basic Box component with the ability to collapse and expand the content
 *
 */
export const CollapsibleBox = ({
  collapsed: _collapsed,
  children,
  duration,
  transition: _transition,
  BodyProps = {},
  ...rest
}: CollapsibleBoxProps) => {
  const [collapsed, setCollapsed] = useState(_collapsed)
  const ref = useRef<HTMLDivElement>(null)
  const bounds = useMeasure(ref)

  useEffect(() => {
    setCollapsed(_collapsed)
  }, [_collapsed])

  const transition = {
    duration:
      duration !== undefined
        ? duration / 1000
        : getAutoHeightDuration(bounds.height) / 1000,
    ..._transition,
  }

  return (
    <Wrapper
      data-badgerui-collapsiblebox=""
      aria-expanded={collapsed ? 'false' : 'true'}
      {...rest}
      transition={transition}
      variants={variants}
      initial={collapsed ? 'collapsed' : 'expanded'}
      animate={collapsed ? 'collapsed' : 'expanded'}
    >
      <div
        aria-hidden={collapsed ? 'true' : 'false'}
        data-badgerui-collapsiblebox-body=""
        ref={ref}
        {...BodyProps}
      >
        {children}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled(motion.div)`
  overflow: hidden;
`
