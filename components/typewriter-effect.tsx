"use client"

import { type FC, useEffect, useState } from "react"

interface TypewriterEffectProps {
  text: string
  delay?: number
  infinite?: boolean
}

const TypewriterEffect: FC<TypewriterEffectProps> = ({ text, delay = 100, infinite = false }) => {
  const [currentText, setCurrentText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (isPaused) {
      timeout = setTimeout(() => {
        setIsPaused(false)
      }, 1500)
      return () => clearTimeout(timeout)
    }

    if (isDeleting) {
      timeout = setTimeout(() => {
        setCurrentText(text.substring(0, currentIndex - 1))
        setCurrentIndex((prevIndex) => prevIndex - 1)

        if (currentIndex <= 1) {
          setIsDeleting(false)
          setIsPaused(true)
        }
      }, delay / 2)
    } else {
      timeout = setTimeout(() => {
        setCurrentText(text.substring(0, currentIndex + 1))
        setCurrentIndex((prevIndex) => prevIndex + 1)

        if (currentIndex >= text.length) {
          if (infinite) {
            setIsPaused(true)
            setTimeout(() => {
              setIsDeleting(true)
            }, 1500)
          }
        }
      }, delay)
    }

    return () => clearTimeout(timeout)
  }, [currentIndex, delay, infinite, isDeleting, isPaused, text])

  return <span>{currentText}</span>
}

export default TypewriterEffect

