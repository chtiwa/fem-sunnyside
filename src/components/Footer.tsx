import { motion } from "framer-motion"

const Footer = () => {
  return (
    <motion.div
      className="flex flex-col"
      viewport={{ once: true }}
      whileInView={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{
        duration: 0.5,
        delay: 0.5
      }}
    >
      <div className="grid grid-cols-2 md:grid-cols-4 w-[100%] max-h-[100vh]">
        <div className="md:bg-[url('/images/desktop/image-gallery-milkbottles.jpg')] bg-[url('/images/mobile/image-gallery-milkbottles.jpg')] object-cover bg-no-repeat bg-center h-[30vh] md:h-[50vh] w-[100%]" />
        <div className="md:bg-[url('/images/desktop/image-gallery-orange.jpg')] bg-[url('/images/mobile/image-gallery-orange.jpg')] object-cover bg-no-repeat bg-center h-[30vh] md:h-[50vh]" />
        <div className="md:bg-[url('/images/desktop/image-gallery-cone.jpg')] bg-[url('/images/mobile/image-gallery-cone.jpg')] object-cover bg-no-repeat bg-center h-[30vh] md:h-[50vh]" />
        <div className="md:bg-[url('/images/desktop/image-gallery-sugarcubes.jpg')] bg-[url('/images/mobile/image-gallery-sugarcubes.jpg')] object-contain bg-no-repeat bg-center h-[30vh] md:h-[50vh]" />
      </div>
      <div className="flex flex-col items-center justify-center gap-y-8 bg-gray-300 h-[30vh]">
        <h1 className="text-2xl font-bold text-gray-600">sunnyside</h1>
        <ul className="flex gap-x-4 items-center">
          <li>About</li>
          <li>Services</li>
          <li>Projects</li>
        </ul>
        <ul className="flex gap-x-4 items-center">
          <li>
            <img src="/images/icon-facebook.svg" alt="" />
          </li>
          <li>
            <img src="/images/icon-instagram.svg" alt="" />
          </li>
          <li>
            <img src="/images/icon-twitter.svg" alt="" />
          </li>
          <li>
            <img src="/images/icon-pinterest.svg" alt="" />
          </li>
        </ul>
      </div>
    </motion.div>
  )
}

export default Footer
