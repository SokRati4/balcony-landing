import { motion } from 'framer-motion'
import bePaidLogos from '../assets/bePaidLogos.png'

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
          {/*
          <div className="text-2xl font-bold text-brandPrimary-400 mb-4">
             ЗАМЕНИТЬ: Вставить логотип столовой "Балконы" 
            Балконы
          </div>
          */}
          <div className="mt-8 mx-[calc(50%-50vw)] border-t border-brandPrimary-800"></div>
          <div className="pt-8 text-brandPrimary-500 text-sm leading-relaxed">
            <p>
              Общество с ограниченной ответственностью "Орфум Групп Плюс"<br />
              УНП: 693340227<br />
              Регистрирующий орган: Минский районный исполнительный комитет<br />
              Дата регистрации: 29.10.2024<br />
              Адрес: г. Заславль, улица Советская, дом 112/Б, 1 этаж<br />
              Режим работы: 11:00-16:00
            </p>
          </div>

          <div className="mt-8 mx-[calc(50%-50vw)] border-t border-brandPrimary-800"></div>
          <div className="pt-8">
            <img src={bePaidLogos} alt="bePaid Logo" className="mx-auto h-12 md:h-16 px-3" />
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
