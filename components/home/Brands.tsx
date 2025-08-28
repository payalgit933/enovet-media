'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const brands = [
  {
    name: 'SAHAJ',
    logo: '/brands/SAHAJ.png',
    link: 'https://sahajmlc.com/',
    width: 120,
    height: 40
  },
  {
    name: 'RCF',
    logo: '/brands/rashi-care-foundation.png',
    link: 'https://www.rashi.care/',
    width: 120,
    height: 40
  },
  {
    name: 'ASGI',
    logo: '/brands/ASGI.png',
    link: 'https://amyloidosissupport.in/',
    width: 120,
    height: 40
  },
  {
    name: 'RDSSDF',
    logo: '/brands/RDSSDF.png',
    link: 'https://rdssdf.org/',
    width: 120,
    height: 40
  },
  {
    name: 'ACADEMIC VOX',
    logo: '/brands/VOX.png',
    link: 'https://academicvox.com/',
    width: 120,
    height: 50
  },
  {
    name: 'TIRHUT PIPES',
    logo: '/brands/TIRHUT.png',
    link: 'https://tirhutpipes.com/',
    width: 120,
    height: 50
  },
  {
    name: 'I PROJECTS',
    logo: '/brands/IGNOU.png',
    link: 'https://ignouprojects.in/',
    width: 120,
    height: 50
  },
  {
    name: 'DARVIN',
    logo: '/brands/darvin.png',
    link: 'https://darvinproperties.in/',
    width: 120,
    height: 50
  },
  {
    name: 'LALJI HERBALS',
    logo: '/brands/lalji.png',
    link: 'https://laljiherbals.com/',
    width: 120,
    height: 50
  },
  {
    name: 'JAINX',
    logo: '/brands/jainx.png', 
    link: 'https://jainxstore.com/?srsltid=AfmBOorJm0Jz9PEATdGsB9LoTrYgRTuyhxD0h75hGVhhDS3179z6Ek08',
    width: 120,
    height: 50
  },
  {
    name: 'MAAI-T-GHAR',
    logo: '/brands/maai-t-ghar1.png',
    link: 'https://maai-tgharfoundation.org/',
    width: 120,
    height: 50
  },
  {
    name: 'FABRIC HUGS',
    logo: '/brands/fabric-hugs.png',
    link: 'https://fabrichugs.com/?srsltid=AfmBOopog9Q8RODwzCLSk6CU8jMoVdC9eda72xKzVNEFi21jV1asulDd',
    width: 120,
    height: 50
  }
]

const Brands = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-primary/20">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent animate-pulse" />
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-secondary to-white bg-clip-text text-transparent"
          >
            Trusted by Leading Brands
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            We're proud to be certified partners with industry leaders
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-items-center"
        >
          {brands.map((brand, index) => (
            <a key={index} href={brand.link} target='_blank' rel='noopener noreferrer'>
            <motion.div
              variants={fadeInUp}
              className="group relative w-36 h-36 flex flex-col items-center justify-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              {/* Logo container */}
              <div className="relative w-full h-16 mb-4 flex items-center justify-center">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={brand.width}
                  height={brand.height}
                  className="object-contain filter brightness-0 invert opacity-80 group-hover:opacity-100 transition-all duration-300"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 16vw"
                  style={{ maxWidth: '100%', maxHeight: '100%' }}
                />
              </div>
              
              {/* Brand name */}
              {/* <h3 className="text-lg font-semibold text-white group-hover:text-secondary transition-colors duration-300">
                {brand.name}
              </h3> */}
              <h3 className="whitespace-nowrap leading-snug text-sm font-semibold mb-4 text-center text-white group-hover:text-secondary transition-colors duration-300">
                {brand.name}
              </h3>

              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/0 via-secondary/0 to-secondary/0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl" />
            </motion.div>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Brands 