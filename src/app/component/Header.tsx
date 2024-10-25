'use client'
import Link from 'next/link'
import Image from 'next/image'
import { HEADER, MOBILE_MENU_LIST } from '@/style/zIndex'
import useScrollDirection from '@/hooks/useScrollDirection'
import useMobileMenu from '@/hooks/useMobileMenu'
import { usePathname } from 'next/navigation'
import { AnimatePresence } from 'framer-motion'
import Loading from './Loading'
import useLoadingProgress from '@/hooks/useLoadingProgress'
//
//
//
export default function Header() {
  const pathname = usePathname()
  const isShowHeader = useScrollDirection()
  const { isShowMobileMenu, showMobileMenu, hideMobileMenu } = useMobileMenu()
  const { isLoading, loadingProgress, startLoading, setLoadingSpeed } =
    useLoadingProgress(pathname)

  const handleMobileLinkClick = () => {
    hideMobileMenu()
    startLoading()
    setLoadingSpeed(5)
  }

  const handleLinkClick = () => {
    startLoading()
    setLoadingSpeed(5)
  }

  const getLinkClass = (path: string) => {
    return pathname === path
      ? 'font-pp italic text-HeaderPC px-[0.3rem] relative after:content-[""] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-white after:w-full'
      : 'font-pp font-light italic text-HeaderPC px-[0.3rem] relative after:content-[""] after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:bg-white after:w-0 hover:after:w-full hover:after:left-0 after:transition-all after:duration-300'
  }

  const getMobileLinkClass = (path: string) => {
    return pathname === path
      ? 'px-[3rem] py-[1.1rem] block border-b border-white underline'
      : 'px-[3rem] py-[1.1rem] block border-b border-white'
  }

  return (
    <>
      <AnimatePresence>
        {isLoading && <Loading loadingProgress={loadingProgress} />}
      </AnimatePresence>
      <header
        className={`text-white mix-blend-difference w-full flex fixed top-0 p-[2.5rem] transition-transform duration-500 ${
          isShowHeader ? 'translate-y-0' : '-translate-y-full'
        }`}
        style={{ zIndex: HEADER }}>
        <div className="font-pp cursor-pointer text-HeaderPC">
          <Link href="/">
            Like<span className="italic">lion</span> So
            <span className="italic">gang</span>
          </Link>
        </div>
        <nav className="ml-auto hidden tablet:flex gap-[1.5rem]">
          <Link
            href={'/about'}
            onClick={handleLinkClick}
            className={getLinkClass('/about')}>
            About
          </Link>
          <Link
            href={'/project'}
            onClick={handleLinkClick}
            className={getLinkClass('/project')}>
            Project
          </Link>
          <Link
            href={'/people'}
            onClick={handleLinkClick}
            className={getLinkClass('/people')}>
            People
          </Link>
          <Link
            href={'/recruit'}
            onClick={handleLinkClick}
            className={getLinkClass('/recruit')}>
            Recruit
          </Link>
          <Link
            href={'/contact'}
            onClick={handleLinkClick}
            className={getLinkClass('/contact')}>
            Contact
          </Link>
        </nav>
        {/* 모바일 */}
        {/* 햄버거 버튼 */}
        <button
          className="block ml-auto tablet:hidden py-[1rem] pl-[1rem] "
          onClick={showMobileMenu}>
          <Image
            src={'/icon/button/hamburger-white.svg'}
            width={20}
            height={20}
            alt="메뉴 버튼"
          />
        </button>
      </header>
      {/* 모바일 메뉴 리스트 - on/off*/}
      <section
        className={`fixed top-0 w-full h-[100vh] bg-black pt-[5rem] transform transition-transform duration-500 ${
          isShowMobileMenu ? 'translate-y-0' : '-translate-y-full'
        }`}
        style={{ zIndex: MOBILE_MENU_LIST }}>
        <button
          onClick={hideMobileMenu}
          className="absolute top-[2rem] right-[1.5rem] p-[1rem]">
          <Image
            src={'/icon/button/closeX-white.svg'}
            width={25}
            height={25}
            alt="메뉴 닫기 버튼"
          />
        </button>
        <nav>
          <ul className="font-pp text-[3.2rem] font-[300] text-white">
            <Link
              href="/about"
              onClick={handleMobileLinkClick}
              className={getMobileLinkClass('/about')}>
              About
            </Link>
            <Link
              href="/people"
              onClick={handleMobileLinkClick}
              className={getMobileLinkClass('/people')}>
              People
            </Link>
            <Link
              href="/project"
              onClick={handleMobileLinkClick}
              className={getMobileLinkClass('/project')}>
              Project
            </Link>
            <Link
              href="/recruit"
              onClick={handleMobileLinkClick}
              className={getMobileLinkClass('/recruit')}>
              Recruit
            </Link>
            <Link
              href="/contact"
              onClick={handleMobileLinkClick}
              className={getMobileLinkClass('/contact')}>
              Contact
            </Link>
          </ul>
        </nav>
      </section>
    </>
  )
}
