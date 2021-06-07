import { useState, useCallback } from 'react'

// @TODO should be React.MutableRefObject....
export function useCallbackRef<T = unknown>() {
  const [ref, setRef] = useState<T | null>(null)
  const fn = useCallback((node: T | null) => {
    setRef(node)
  }, [])

  return [ref, fn]
}
