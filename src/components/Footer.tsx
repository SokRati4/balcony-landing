import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="bg-brandPrimary-900 text-brandSecondary py-12">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="text-2xl font-bold text-brandPrimary-400 mb-4">
            {/* ЗАМЕНИТЬ: Вставить логотип столовой "Балконы" */}
            Балконы
          </div>
          
          <p className="text-brandPrimary-400 mb-6">
            Столовая "Балконы" - качественное корпоративное питание в Заславле
          </p>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a href="#" className="text-brandPrimary-400 hover:text-brandPrimary-700 transition-colors duration-200">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-brandPrimary-400 hover:text-brandPrimary-700 transition-colors duration-200">
              Условия использования
            </a>
          </div>
          
          <div className="border-t border-brandPrimary-800 pt-8">
            <p className="text-brandPrimary-500 text-sm">
              © 2024 Столовая "Балконы". Все права защищены.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
