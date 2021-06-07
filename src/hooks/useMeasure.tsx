import { useState, useEffect } from 'react'
import ResizeObserver from 'resize-observer-polyfill'
import { useCallbackRef } from './useCallbackRef'

export const useMeasure = (ref: any) => {
  const [element, attachRef] = useCallbackRef<any>()
  const [bounds, setBounds] = useState({
    height: 0,
  })

  useEffect(() => {
    const onResize = ([entry]: ResizeObserverEntry[]) => {
      setBounds({
        height: entry.contentRect.height,
      })
    }

    const observer = new ResizeObserver(onResize)

    if (element && element.current) {
      observer.observe(element.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [element])

  useEffect(() => {
    attachRef(ref)
  }, [attachRef, ref])

  return bounds
}
