import { useEffect } from 'react'
import { useAnimation } from 'framer-motion'

const useSequentialAnimation = (isLoading: boolean) => {
  const chainAnimation = useAnimation()
  const coneAnimation = useAnimation()
  const plateAnimation = useAnimation()
  const sphereAnimation = useAnimation()

  useEffect(() => {
    if (!isLoading) {
      chainAnimation.start({
        opacity: [0, 1],
        y: [-100, 0],
        transition: { duration: 3 }
      })

      coneAnimation.start({
        opacity: [0, 1],
        y: [50, 0],
        transition: { duration: 3, delay: 1 }
      })

      plateAnimation.start({
        opacity: [0, 1],
        y: [-50, 0],
        transition: { duration: 3, delay: 2 }
      })

      sphereAnimation.start({
        opacity: [0, 1],
        y: [-50, 0],
        transition: { duration: 3, delay: 3 }
      })
    }
  }, [isLoading])

  return { chainAnimation, coneAnimation, plateAnimation, sphereAnimation }
}

export default useSequentialAnimation
