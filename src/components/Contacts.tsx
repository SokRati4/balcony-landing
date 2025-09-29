import { motion } from 'framer-motion'
import { Phone, MapPin, Mail, Instagram } from 'lucide-react'

const Contacts = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'телефон',
      value: '+375 (29) 383-95-04',
      href: 'tel:+375293839504'
    },
    {
      icon: MapPin,
      title: 'адрес',
      value: 'Заславль, ул. Советская, дом 112/Б, 1 этаж',
      href: 'https://yandex.by/maps/?mode=search&text=%D0%97%D0%B0%D1%81%D0%BB%D0%B0%D0%B2%D0%BB%D1%8C,%20%D1%83%D0%BB.%20%D0%A1%D0%BE%D0%B2%D0%B5%D1%82%D1%81%D0%BA%D0%B0%D1%8F,%20%D0%B4%D0%BE%D0%BC%20112/%D0%91,%201%20%D1%8D%D1%82%D0%B0%D0%B6'
    },
    {
      icon: Mail,
      title: 'почта',
      value: 'orphumgroup@gmail.com',
      href: 'mailto:orfumgroup@gmail.com'
    },
    {
      icon: Instagram,
      title: 'instagram',
      value: 'balcony_by',
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
