import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import logo from '../assets/logo.jpg' // Импортируем логотип

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'О нас', href: '#about' },
    { name: 'Наши обеды', href: '#our-lunches' },
    { name: 'Как мы работаем', href: '#how-we-work' },
    { name: 'Контакты', href: '#contacts' },
  ]

  const headerRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const headerElement = headerRef.current
    if (!headerElement) return

    const updateOffsetVar = () => {
      const height = headerElement.getBoundingClientRect().height
      document.documentElement.style.setProperty('--header-height', `${height}px`)
    }

    updateOffsetVar()

    const resizeObserver = new ResizeObserver(() => updateOffsetVar())
    resizeObserver.observe(headerElement)

    window.addEventListener('resize', updateOffsetVar)

    return () => {
      resizeObserver.disconnect()
      window.removeEventListener('resize', updateOffsetVar)
    }
  }, [])

  return (
    <header ref={headerRef} className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-brandPrimary-900">
              <img src={logo} alt="Балконы лого" className="h-24 w-auto" />
            </div>
          </div>

          {/* Mobile phone */}
          <div className="md:hidden flex items-center text-brandPrimary-600">
            <Phone className="w-4 h-4 mr-2" />
            <a href="tel:+375293839504" className="text-sm">+375 (29) 383-95-04</a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-brandPrimary-700 hover:text-brandPrimary-900 transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center text-brandPrimary-600">
            <Phone className="w-4 h-4 mr-2" />
            <span className="text-sm">
              +375 (29) 383-95-04
            </span>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden px-4"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
          >
            <AnimatePresence initial={false} mode="wait">
              {isMenuOpen ? (
                <motion.span
                  key="icon-close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2, ease: 'easeInOut' }}
                  className="inline-flex"
                >
                  <X className="w-6 h-6" />
                </motion.span>
              ) : (
                <motion.span
                  key="icon-open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2, ease: 'easeInOut' }}
                  className="inline-flex"
                >
                  <Menu className="w-6 h-6" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence initial={false}>
          {isMenuOpen && (
            <motion.div
              key="mobile-nav"
              initial={{ y: -16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -16, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 380, damping: 30, mass: 0.6 }}
              className="md:hidden fixed inset-x-0 top-[calc(var(--header-height)-10px)] z-40 bg-white border-t border-b border-brandPrimary-100 shadow-lg rounded-2xl overflow-hidden will-change-transform"
            >
              <nav className="flex flex-col space-y-2 py-4 px-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-brandPrimary-700 hover:text-brandPrimary-900 transition-colors duration-200 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

export default Header
