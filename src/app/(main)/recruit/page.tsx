'use client'

import { useRef } from 'react'
import Recruit1 from './container/Recruit1'
import Recruit2 from './container/Recruit2'
import useIntersectionObserver from '@/hooks/useIntersectionObserver'
//
//
//
export default function RecruitPage() {
  const detectRef = useRef<HTMLDivElement | null>(null)
  const backgroundRef = useRef<HTMLDivElement | null>(null)
  const recruit1ImgRef = useRef<HTMLDivElement | null>(null)

  const handleIntersect = (entry: IntersectionObserverEntry) => {
    if (entry.isIntersecting) {
      backgroundRef.current?.style.setProperty('background', 'white')
      recruit1ImgRef.current?.style.setProperty('opacity', '0')
    } else {
      backgroundRef.current?.style.setProperty('background', 'black')
      recruit1ImgRef.current?.style.setProperty('opacity', '1')
    }
  }

  useIntersectionObserver(detectRef, handleIntersect)

  return (
    <div
      ref={backgroundRef}
      className="transition-all duration-500 ease-in-out bg-black">
      <Recruit1 recruit1ImgRef={recruit1ImgRef} />
      <Recruit2 detectRef={detectRef} />
    </div>
  )
}
