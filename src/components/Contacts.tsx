import { motion } from 'framer-motion'
import { Phone, MapPin, Mail, Instagram } from 'lucide-react'

const Contacts = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'телефон',
      value: '+375 (29) 196-41-54', // ЗАМЕНИТЬ: Вставить реальный номер
      href: 'tel:+375291964154'
    },
    {
      icon: MapPin,
      title: 'адрес',
      value: 'Заславль, ул. Советская, дом 112/Б, 1 этаж', // ЗАМЕНИТЬ: Вставить реальный адрес
      href: '#'
    },
    {
      icon: Mail,
      title: 'почта',
      value: 'orfumgroup@gmail.com', // ЗАМЕНИТЬ: Вставить реальную почту
      href: 'mailto:orfumgroup@gmail.com'
    },
    {
      icon: Instagram,
      title: 'instagram',
      value: 'balcony_by', // ЗАМЕНИТЬ: Вставить реальный Instagram
      href: 'https://www.instagram.com/balcony_by?igsh=emxsc3JidTFrOTJn'
    }
  ]

  return (
    <section id="contacts" className="section-padding bg-brandPrimary-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brandPrimary-900 mb-6">
            Контакты
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-1 gap-12 max-w-xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {contactInfo.map((contact, index) => (
              <motion.div
                key={contact.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-4"
              >
                <div className="w-12 h-12 bg-brandPrimary-900 rounded-full flex items-center justify-center flex-shrink-0">
                  <contact.icon className="w-6 h-6 text-brandSecondary" />
                </div>
                <div>
                  <p className="text-sm text-brandPrimary-500 uppercase tracking-wide">
                    {contact.title}
                  </p>
                  <a
                    href={contact.href}
                    className="text-lg font-medium text-brandPrimary-900 hover:text-brandPrimary-700 transition-colors duration-200"
                  >
                    {contact.value}
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contacts
