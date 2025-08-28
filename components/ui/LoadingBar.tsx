'use client'

import { motion } from 'framer-motion'

const LoadingBar = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed top-0 left-0 h-1 bg-gradient-to-r from-secondary to-primary z-[200]"
    />
  )
}

export default LoadingBar
