import { motion } from 'framer-motion'
import { useState, useEffect, useMemo } from 'react'
import { AnimatePresence } from 'framer-motion'

import img1 from '../assets/IMG_1466.webp'
import img2 from '../assets/IMG_1523.webp'
import img3 from '../assets/IMG_1620.webp'

const About = () => {
  const images = useMemo(() => [img1, img2, img3], [])
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(timer)
  }, [images.length])

  // Preload all hero images ASAP and hint the browser to fetch them
  useEffect(() => {
    images.forEach((src) => {
      const linkEl = document.createElement('link')
      linkEl.rel = 'preload'
      linkEl.as = 'image'
      linkEl.href = src
      document.head.appendChild(linkEl)

      const img = new Image()
      img.decoding = 'async'
      img.src = src
    })

    return () => {
      // Optional: cleanup preload hints to avoid duplicates on HMR in dev
      const links = document.querySelectorAll('link[rel="preload"][as="image"]')
      links.forEach((l) => l.parentElement?.removeChild(l))
    }
  }, [images])

  return (
    <section id="about" className="relative bg-brandSecondary py-8 md:py-16 overflow-hidden">
      <div className="container-custom px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brandPrimary-900 leading-tight">
            Доставка корпоративного питания
          </h1>

          <p className="text-xl text-brandPrimary-600 leading-relaxed mb-8">
            Вкусные обеды для продуктивного дня на работе
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">📱</span>
              <h3 className="font-semibold text-brandPrimary-900">Телеграм-бот для заказа обедов</h3>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-2xl">🤝</span>
              <h3 className="font-semibold text-brandPrimary-900">Индивидуальные условия сотрудничества</h3>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-2xl">💳</span>
              <h3 className="font-semibold text-brandPrimary-900">Удобная система оплаты</h3>
            </div>
          </div>
        </motion.div>

        {/* Right Content - Image Placeholder */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative w-full h-80 md:h-96 overflow-hidden rounded-2xl shadow-lg lg:mx-8">
            <AnimatePresence>
              <motion.img
                key={currentImageIndex}
                src={images[currentImageIndex]}
                alt={`Блюдо ${currentImageIndex + 1}`}
                decoding="async"
                loading={currentImageIndex === 0 ? 'eager' : 'lazy'}
                fetchPriority={currentImageIndex === 0 ? 'high' : 'auto'}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
