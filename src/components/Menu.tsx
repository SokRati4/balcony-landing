import { motion } from 'framer-motion'

const menuItems = [
  {
    id: 1,
    name: 'Котлета по-киевски с картофельным пюре',
    weight: '300 г',
    calories: '550 Ккал',
    image: '🍗'
  },
  {
    id: 2,
    name: 'Блинчики с ветчиной и сыром',
    weight: '300 г',
    calories: '480 Ккал',
    image: '🥞'
  },
  {
    id: 3,
    name: 'Бифштекс "Смак" с гречневой кашей',
    weight: '300 г',
    calories: '600 Ккал',
    image: '🥩'
  },
  {
    id: 4,
    name: 'Голубцы со сметаной',
    weight: '300 г',
    calories: '350 Ккал',
    image: '🥟'
  },
  {
    id: 5,
    name: 'Морской окунь с рисом',
    weight: '300 г',
    calories: '420 Ккал',
    image: '🐟'
  },
  {
    id: 6,
    name: 'Куриные крылышки с картофелем "по-деревенски"',
    weight: '300 г',
    calories: '580 Ккал',
    image: '🍖'
  },
  {
    id: 7,
    name: 'Мясо по-французски с перловой кашей',
    weight: '300 г',
    calories: '530 Ккал',
    image: '🥩'
  },
  {
    id: 8,
    name: 'Гуляш с макаронами',
    weight: '300 г',
    calories: '490 Ккал',
    image: '🍝'
  },
  {
    id: 9,
    name: 'Колдуны со сметаной',
    weight: '300 г',
    calories: '520 Ккал',
    image: '🥔'
  }
]

const Menu = () => {
  return (
    <section id="menu" className="section-padding bg-brandPrimary-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brandPrimary-900 mb-4">
            Наши обеды
          </h2>
          <p className="text-lg text-brandPrimary-600 max-w-3xl mx-auto">
            Мы предлагаем разнообразное и сбалансированное меню, которое меняется ежедневно. Все блюда готовятся из свежих и качественных продуктов прямо перед доставкой, чтобы каждый сотрудник получил максимум удовольствия и энергии для продуктивного дня.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-brandSecondary rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="text-center">
                <div className="text-4xl mb-4">{item.image}</div>
                <h3 className="font-semibold text-brandPrimary-900 mb-3 text-sm leading-tight">
                  {item.name}
                </h3>
                <div className="space-y-1">
                  <p className="text-brandPrimary-600 text-sm">
                    {item.weight}
                  </p>
                  <p className="text-brandPrimary-900 font-medium text-sm">
                    {item.calories}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-brandSecondary rounded-xl p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-brandPrimary-900 mb-4">
              {/* ЗАМЕНИТЬ: Добавить информацию о столовой "Балконы" */}
              Обед на работе — важная составляющая корпоративной культуры!
            </h3>
            <p className="text-brandPrimary-600 leading-relaxed">
              Рабочий процесс должен быть не только продуктивным, но и комфортным для сотрудников. 
              Поэтому важно позаботиться о полноценном, горячем питании, которое поможет не тратить 
              рабочее время на поиск подходящей доставки, поиска кафе вблизи офиса или думать с вечера, 
              что приготовить с собой на работу.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Menu
