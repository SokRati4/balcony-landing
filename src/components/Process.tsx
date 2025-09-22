import { motion } from 'framer-motion'

const processSteps = [
  {
    step: '1',
    title: 'Оставляете заявку',
    description: 'После чего наша команда оперативно связывается с вами',
    icon: '📝'
  },
  {
    step: '2',
    title: 'Дегустация',
    description: 'Организовываем дегустацию и обсуждаем условия сотрудничества',
    icon: '🍽️'
  },
  {
    step: '3',
    title: 'Пробная неделя',
    description: 'в рамках которой вы тестируете наш сервис',
    icon: '📅'
  },
  {
    step: '4',
    title: 'Заключаем договор',
    description: 'в котором учтем особенности работы вашего бизнеса и ваших сотрудников',
    icon: '📋'
  }
]

const Process = () => {
  return (
    <section id="process" className="section-padding bg-brandSecondary">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brandPrimary-900 mb-6">
            Как мы работаем
          </h2>
        </motion.div>

        <div className="relative flex flex-col items-center lg:flex-row lg:justify-between">
          {/* Анимированная линия процесса */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 'calc(100% - 10rem)' }}
            transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="hidden lg:block absolute h-0.5 bg-brandPrimary-200 top-1/3 left-20 right-20 -translate-y-1/2"
          ></motion.div>
          
          {processSteps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 + index * 0.3 }}
              viewport={{ once: true, amount: 0.5 }}
              className="text-center relative z-10 bg-brandSecondary p-4 rounded-lg lg:w-1/4 my-4 lg:my-0"
            >
              <div className="w-16 h-16 bg-brandPrimary-900 text-brandSecondary rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold border-4 border-brandSecondary shadow-md">
                {step.step}
              </div>
              
              <div className="text-3xl mb-4">{step.icon}</div>
              
              <h3 className="text-lg font-semibold text-brandPrimary-900 mb-3">
                {step.title}
              </h3>
              
              <p className="text-brandPrimary-600 text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
