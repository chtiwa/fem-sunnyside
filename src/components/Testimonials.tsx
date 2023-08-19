import { motion } from "framer-motion"

const Testimonials = () => {
  const testimonials = [
    {
      img: "/images/image-emily.jpg",
      text: "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
      name: "Emily R.",
      role: "Marketing Director"
    },
    {
      img: "/images/image-thomas.jpg",
      text: "Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience.",
      name: "Thomas S.",
      role: "Chief Operating Officer"
    },
    {
      img: "/images/image-jennie.jpg",
      text: "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
      name: "Jenny F.",
      role: "Buisiness Owner"
    }
  ]
  return (
    <div className="flex flex-col items-center gap-8">
      <motion.h1
        className="text-2xl text-gray-400 font-bold my-8"
        viewport={{ once: true }}
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{
          duration: 1.5,
          delay: 0.5
        }}
      >
        CLIENT TESTIMONIALS
      </motion.h1>
      <div className="flex flex-col md:flex-row px-4 md:px-16">
        {testimonials.map((t, i) => (
          <motion.div
            className="flex flex-col items-center justify-start px-2 mb-16"
            key={i}
            viewport={{ once: true }}
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.5 + 1 * i
            }}
          >
            <img
              src={t.img}
              alt=""
              className="rounded-full object-cover w-16 h-16 mb-8"
            />
            <p className="text-md text-slate-600 text-center mb-4 px-4">
              {t.text}
            </p>
            <p className="text-md font-bold text-center">{t.name}</p>
            <p className="text-sm text-slate-500 text-center">{t.role}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials
