'use client'
import { useState, useEffect } from 'react'
//
//
//
const useScrollDirection = () => {
  const [isShowHeader, setIsShowHeader] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY) {
        setIsShowHeader(false)
      } else {
        setIsShowHeader(true)
      }
      setLastScrollY(currentScrollY)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollY])

  return isShowHeader
}

export default useScrollDirection
