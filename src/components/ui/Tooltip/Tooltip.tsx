import React from 'react'
import styled from 'styled-components'

export type TooltipProps = {
  label?: string
} & React.HTMLAttributes<HTMLElement>

export const Tooltip = ({ label, children, ...rest }: TooltipProps) => {
  return children || label ? <Wrapper {...rest}>{children || label}</Wrapper> : null
}

const Wrapper = styled.div`
  color: white;
  border-radius: 4px;
  font-size: 12px;
  padding: 2px 8px;
  text-align: center;
  background-color: black;
  border: 0 none;
  z-index: 9999;
  white-space: initial;
  word-break: break-all;
`
