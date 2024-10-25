'use client'
import { useState } from 'react'
import { useLockBodyScroll } from 'react-use'
//
//
//
const useMobileMenu = () => {
  const [isShowMobileMenu, setIsShowMobileMenu] = useState(false)
  useLockBodyScroll(isShowMobileMenu)

  const showMobileMenu = () => {
    setIsShowMobileMenu(true)
  }

  const hideMobileMenu = () => {
    setIsShowMobileMenu(false)
  }

  return {
    isShowMobileMenu,
    showMobileMenu,
    hideMobileMenu
  }
}

export default useMobileMenu
