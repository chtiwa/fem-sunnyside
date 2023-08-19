import Navbar from "./Navbar"
import Logo from "/images/icon-arrow-down.svg"
import { motion } from "framer-motion"

interface HomeProps {
  isSidebarOpen: boolean
  setIsSidebarOpen: (isSidebarOpen: boolean) => void
}

const Home: React.FC<HomeProps> = ({ isSidebarOpen, setIsSidebarOpen }) => {
  return (
    <motion.div
      className="sm:bg-[url('/images/desktop/image-header.jpg')] bg-[url('/images/mobile/image-header.jpg')] object-cover bg-no-repeat bg-center w-[100%] h-[100vh]"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <div className="absolute top-[30%] left-[50%] translate-x-[-50%] translate-y-[-20%] flex flex-col items-center justify-center gap-44 w-[100%]">
        <motion.h1
          className="text-4xl text-center sm:text-6xl text-white font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          WE ARE CREATIVES
        </motion.h1>
        <motion.img
          src={Logo}
          alt=""
          initial={{ opacity: 0, y: -200 }}
          animate={{ opacity: 1, y: 20 }}
          transition={{ duration: 1.5 }}
        />
      </div>
    </motion.div>
  )
}

export default Home
