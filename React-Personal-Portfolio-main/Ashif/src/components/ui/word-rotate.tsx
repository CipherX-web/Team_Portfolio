import { useEffect, useState } from "react"
import { AnimatePresence, motion, MotionProps } from "motion/react"

import { cn } from "@/lib/utils"

interface WordRotateProps {
  words: string[]
  duration?: number
  motionProps?: MotionProps
  className?: string
}

export function WordRotate({
  words,
  duration = 2500,
  motionProps = {
    initial: { opacity: 0, y: -14 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 14 },
    transition: { duration: 0.28, ease: "easeInOut" },
  },
  className,
}: WordRotateProps) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length)
    }, duration)

    // Clean up interval on unmount
    return () => clearInterval(interval)
  }, [words, duration])

  return (
    <span className="inline-flex overflow-hidden items-center justify-center align-baseline leading-none h-[1.25em]">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          className={cn("inline-block whitespace-nowrap", className)}
          {...motionProps}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}
