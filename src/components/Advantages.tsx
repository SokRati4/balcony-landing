import { motion } from 'framer-motion'

const advantages = [
  {
    number: '1',
    title: 'Привезем еще горячие',
    subtitle: 'с 11 до 14 часов',
    description: 'Привезем еще горячие',
    icon: '🔥'
  },
  {
    number: '2',
    title: 'Оплачивайте раз в неделю/месяц',
    subtitle: 'от 10 BYN на человека',
    description: 'Оплачивайте раз в неделю/месяц',
    icon: '💰'
  },
  {
    number: '3',
    title: 'Минимум пластика',
    subtitle: 'Экологичная, крафтовая упаковка',
    description: 'Минимум пластика',
    icon: '🌱'
  },
  {
    number: '4',
    title: 'Своё производство',
    subtitle: 'Качество, вкус и свежесть',
    description: 'Своё производство',
    icon: '🏭'
  },
  {
    number: '5',
    title: 'Собственные курьеры',
    subtitle: 'Бережная доставка',
    description: 'Собственные курьеры',
    icon: '🚚'
  },
  {
    number: '6',
    title: 'Персональный менеджер',
    subtitle: 'На связи с вами по любому вопросу',
    description: 'Персональный менеджер',
    icon: '👨‍💼'
  }
]

const Advantages = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-brandPrimary-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-brandPrimary-900 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {advantage.number}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="text-2xl mb-2">{advantage.icon}</div>
                  <h3 className="text-lg font-semibold text-brandPrimary-900 mb-2">
                    {advantage.title}
                  </h3>
                  <p className="text-brandPrimary-900 font-medium text-sm mb-2">
                    {advantage.subtitle}
                  </p>
                  <p className="text-brandPrimary-600 text-sm">
                    {advantage.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Advantages
