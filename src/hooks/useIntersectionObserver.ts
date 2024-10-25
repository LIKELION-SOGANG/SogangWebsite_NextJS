import { useEffect, RefObject } from 'react'
//
//
//

interface IntersectionOptions {
  root?: Element | null
  rootMargin?: string
  threshold?: number | number[]
}
//
//
//
function useIntersectionObserver(
  targetRef: RefObject<Element>,
  onIntersect: (
    entry: IntersectionObserverEntry,
    observer: IntersectionObserver
  ) => void,
  options: IntersectionOptions = {}
) {
  useEffect(() => {
    if (!targetRef.current) return

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => onIntersect(entry, observer))
    }, options)

    const target = targetRef.current
    observer.observe(target)

    return () => {
      if (target) {
        observer.unobserve(target)
      }
    }
  }, [targetRef, onIntersect, options])
}

export default useIntersectionObserver
