import { motion } from 'framer-motion'

const menuItems = [
  {
    id: 1,
    name: 'Зразы с луком и яйцом + каша гречневая',
    weight: '300 г',
    calories: '520 Ккал',
    image: '🥚',
    price: '5 BYN'
  },
  {
    id: 2,
    name: 'Спагетти «Болоньезе»',
    weight: '300 г',
    calories: '600 Ккал',
    image: '🍝',
    price: '5 BYN'
  },
  {
    id: 3,
    name: 'Гуляш из свинины + макароны отварные',
    weight: '300 г',
    calories: '550 Ккал',
    image: '🍲',
    price: '5 BYN'
  },
  {
    id: 4,
    name: 'Отбивная куриная + пюре картофельное',
    weight: '300 г',
    calories: '520 Ккал',
    image: '🍗',
    price: '5 BYN'
  },
  {
    id: 5,
    name: 'Котлета «По-гусарски» + картофель отварной с зеленью',
    weight: '300 г',
    calories: '560 Ккал',
    image: '🍖',
    price: '5 BYN'
  },
  {
    id: 6,
    name: 'Рыба под сыром + рис отварной',
    weight: '300 г',
    calories: '480 Ккал',
    image: '🐟',
    price: '5 BYN'
  },
  {
    id: 7,
    name: '«Чахохбили» из курицы + картофельное пюре',
    weight: '300 г',
    calories: '500 Ккал',
    image: '🍗',
    price: '5 BYN'
  },
  {
    id: 8,
    name: 'Котлета «Домашняя» + каша гречневая',
    weight: '300 г',
    calories: '540 Ккал',
    image: '🍖',
    price: '5 BYN'
  },
  {
    id: 9,
    name: '«Жаркое» из свинины',
    weight: '300 г',
    calories: '530 Ккал',
    image: '🥘',
    price: '5 BYN'
  },
  {
    id: 10,
    name: 'Филе куриное запечённое с помидором под сыром + рис',
    weight: '300 г',
    calories: '500 Ккал',
    image: '🍗',
    price: '5 BYN'
  },
  {
    id: 11,
    name: 'Котлета куриная + рис отварной',
    weight: '300 г',
    calories: '480 Ккал',
    image: '🍗',
    price: '5 BYN'
  },
  {
    id: 12,
    name: 'Тефтели в томатном соусе + спагетти',
    weight: '300 г',
    calories: '580 Ккал',
    image: '🍝',
    price: '5 BYN'
  },
  {
    id: 13,
    name: 'Шницель из свинины + каша гречневая',
    weight: '300 г',
    calories: '620 Ккал',
    image: '🥩',
    price: '5 BYN'
  },
  {
    id: 14,
    name: 'Картофельные оладьи с мачанкой',
    weight: '300 г',
    calories: '680 Ккал',
    image: '🥔',
    price: '5 BYN'
  },
  {
    id: 15,
    name: 'Голубцы (со сметаной)',
    weight: '300 г',
    calories: '450 Ккал',
    image: '🥬',
    price: '5 BYN'
  }
]

const Menu = () => {
  return (
    <section id="our-lunches" className="section-padding bg-brandPrimary-50">
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
                <p className="text-brandPrimary-900 font-semibold text-sm mt-2">
                  {item.price || '5 BYN'}
                </p>
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
