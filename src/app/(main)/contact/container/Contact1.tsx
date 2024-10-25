'use client'

import React from 'react'
import { motion } from 'framer-motion'
import useSequentialAnimation from '@/hooks/useSequencialAnimation'
import useLoadingProgress from '@/hooks/useLoadingProgress'
//
//
//
export default function Contact1() {
  const { isLoading, loadingProgress } = useLoadingProgress('contact')
  const { chainAnimation, coneAnimation, plateAnimation, sphereAnimation } =
    useSequentialAnimation(!isLoading && loadingProgress === 100)

  return (
    <section>
      <div className="relative w-full h-screen overflow-x-hidden overflow-y-hidden">
        <motion.img
          animate={chainAnimation}
          initial={{ opacity: 0 }}
          className={`absolute
            left-[42vw] w-[50vw] h-[50vw] top-[-16vw]
            mobile:left-[35vw] mobile:w-[53vw] mobile:h-[52vw] mobile:top-[-20.3vw]
            tablet:left-[12vw] tablet:w-[34vw] tablet:h-[34vw] tablet:top-[-10vw]
            desktop:left-[12vw] desktop:w-[34vw] desktop:h-[34vw] desktop:top-[-10vw]`}
          src="/images/contact/obj1.png"
          alt="Object1-chain"
        />
        <motion.img
          animate={coneAnimation}
          initial={{ opacity: 0 }}
          className={`absolute
            w-[60vw] h-[60vw] mt-40 pt-6 left-[58vw]
            mobile:w-[50vw] mobile:h-[50vw] mobile:mt-40 mobile:pt-6 mobile:left-[65vw]
            tablet:w-[45vw] tablet:h-[43vw] tablet:mt-0 tablet:pt-0 tablet:left-[66vw]
            desktop:w-[45vw] desktop:h-[43vw] desktop:mt-0 desktop:pt-0 desktop:left-[66vw]`}
          src="/images/contact/obj2.png"
          alt="Object2-cone"
        />
      </div>
      <div className="text-center mt-[-50vh] mobile:mt-[-50vh] tablet:mt-[-24vw] desktop:mt-[-24vw]">
        <div className="text-[3.5rem] mobile:text-[4rem] tablet:text-[6rem] desktop:text-[6rem] text-black font-pp font-thin">
          Connect With Us!
        </div>
      </div>
      <div className="relative w-full h-[80vh] overflow-x-hidden overflow-y-hidden">
        <motion.img
          animate={plateAnimation}
          initial={{ opacity: 0 }}
          className={`absolute 
            left-[-25vw] w-[60vw] h-[60vw] 
            mobile:left-[-10vw] mobile:w-[35vw] mobile:h-[34vw] 
            tablet:left-0 tablet:w-[31vw] tablet:h-[29vw]
            desktop:left-0 desktop:w-[31vw] desktop:h-[29vw] 
            top-[3vw]`}
          src="/images/contact/obj3.png"
          alt="Object3-plate"
        />
        <motion.img
          animate={sphereAnimation}
          initial={{ opacity: 0 }}
          className={`absolute animate-fadeinObject
            w-[77vw] h-[77vw] left-[45vw] top-[55vw]
          desktop:w-[31vw] desktop:h-[32vw] desktop:left-[58vw] desktop:top-[10vw]
          tablet:w-[31vw] tablet:h-[32vw] tablet:left-[58vw] tablet:top-[10vw]
          mobile:w-[70vw] mobile:h-[70vw] mobile:left-[50vw] mobile:top-[40vw] 
          `}
          src="/images/contact/obj4.png"
          alt="Object4-sphere"
        />
      </div>
    </section>
  )
}
