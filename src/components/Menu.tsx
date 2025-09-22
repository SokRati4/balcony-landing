import { motion } from 'framer-motion'

const menuItems = [
  {
    id: 1,
    name: 'Овощи на пару и куриное филе Кордон',
    weight: '150гр+130гр',
    calories: '435 Ккал',
    image: '🥗'
  },
  {
    id: 2,
    name: 'Шурпа с курицей',
    weight: '275гр',
    calories: '113 Ккал',
    image: '🍲'
  },
  {
    id: 3,
    name: 'Салат Цезарь',
    weight: '150гр',
    calories: '266 ККал',
    image: '🥙'
  },
  {
    id: 4,
    name: 'Чизкейк',
    weight: '150гр',
    calories: '130,4 Ккал',
    image: '🍰'
  },
  {
    id: 5,
    name: 'Пирожное картошка',
    weight: '100гр',
    calories: '369 Ккал',
    image: '🍪'
  },
  {
    id: 6,
    name: 'Салат Сельдь под шубой',
    weight: '140гр',
    calories: '220 Ккал',
    image: '🥗'
  },
  {
    id: 7,
    name: 'Картофельное пюре и свинина по-домашнему',
    weight: '200гр+140гр',
    calories: '413 Ккал',
    image: '🍖'
  },
  {
    id: 8,
    name: 'Суп-пюре из грибов',
    weight: '250гр.',
    calories: '145 Ккал',
    image: '🍄'
  },
  {
    id: 9,
    name: 'Сырники творожные',
    weight: '150гр',
    calories: '179 Ккал',
    image: '🥞'
  },
  {
    id: 10,
    name: 'Холодник на кефире',
    weight: '266 гр.',
    calories: '62,32 Ккал',
    image: '🥛'
  },
  {
    id: 11,
    name: 'Омлет',
    weight: '150гр',
    calories: '215 Ккал',
    image: '🍳'
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
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brandPrimary-900 mb-6">
            Блюда из нашего обеденного меню
          </h2>
          <p className="text-lg text-brandPrimary-600 max-w-3xl mx-auto">
            {/* ЗАМЕНИТЬ: Добавить описание меню столовой "Балконы" */}
            Обед на работе — важная составляющая корпоративной культуры! 
            Рабочий процесс должен быть не только продуктивным, но и комфортным для сотрудников.
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
