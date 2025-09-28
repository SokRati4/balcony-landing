import { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import logo from '../assets/logo.jpg' // Импортируем логотип

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'Наши обеды', href: '#menu' },
    { name: 'О нас', href: '#hero-section' },
    { name: 'Как мы работаем', href: '#process' },
    { name: 'Контакты', href: '#contacts' },
  ]

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-brandPrimary-900">
              {/* ЗАМЕНИТЬ: Вставить логотип столовой "Балконы" */}
              <img src={logo} alt="Балконы логотип" className="h-24 w-auto" />
            </div>
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
              {/* ЗАМЕНИТЬ: Вставить реальный номер телефона */}
              +375 (29) 196-41-54
            </span>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-brandPrimary-200">
            <nav className="flex flex-col space-y-4">
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
              {/* Контактный телефон для мобильного меню */}
              <div className="pt-4 border-t border-brandPrimary-200 flex items-center text-brandPrimary-600">
                <Phone className="w-4 h-4 mr-2" />
                <span className="text-sm">
                  {/* ЗАМЕНИТЬ: Вставить реальный номер телефона */}
                  +375 (29) 383-95-04
                </span>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
