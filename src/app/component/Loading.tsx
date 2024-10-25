import React from 'react'
import { motion } from 'framer-motion'

export default function Loading({
  loadingProgress
}: {
  loadingProgress: number
}) {
  const progressNormalized = loadingProgress / 100
  const backgroundColor = `rgb(${255 * progressNormalized}, ${255 * progressNormalized}, ${255 * progressNormalized})`

  return (
    <motion.div
      animate={{ y: '0vh' }}
      exit={{ y: '100vh' }}
      transition={{ duration: 0.5 }}
      style={{ backgroundColor }}
      className="fixed top-0 left-0 w-screen h-screen flex justify-end items-center pr-[10vw] text-white font-pp font-light text-[8vw] z-[9000]">
      <h1 className="mix-blend-difference">{loadingProgress}%</h1>
    </motion.div>
  )
}
