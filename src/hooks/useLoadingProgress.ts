import { useEffect, useState } from 'react'
//
//
//
const useLoadingProgress = (pathname: string) => {
  const [isLoading, setIsLoading] = useState(true)
  const [loadingSpeed, setLoadingSpeed] = useState(10)
  const [loadingProgress, setLoadingProgress] = useState(0)

  const startLoading = () => {
    setIsLoading(true)
  }

  useEffect(() => {
    if (isLoading && loadingProgress < 100) {
      const timer = setTimeout(() => {
        setLoadingProgress(prev => Math.min(prev + 1, 100))
      }, loadingSpeed)
      return () => clearTimeout(timer)
    } else if (loadingProgress === 100) {
      setTimeout(() => {
        setIsLoading(false)
        setLoadingProgress(0)
      }, 400)
    }
  }, [isLoading, loadingProgress, loadingSpeed])

  return {
    isLoading,
    loadingProgress,
    setLoadingSpeed,
    startLoading
  }
}

export default useLoadingProgress
