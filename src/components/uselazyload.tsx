import { useEffect, useState, useRef } from 'react'

const useLazyLoad = (src: string) => {
  const [videoSrc, setVideoSrc] = useState(``)
  const videoRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting) {
          setVideoSrc(src)
        }
      },
      { threshold: 1 },
    )
    if (videoRef.current && !videoSrc) {
      observer.observe(videoRef.current)

      return () => {
        observer && observer.disconnect()
      }
    }
  }, [videoRef, src, videoSrc])
  return [videoSrc, videoRef]
}
export default useLazyLoad
