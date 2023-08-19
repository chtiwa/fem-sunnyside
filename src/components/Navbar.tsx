import Logo from "/images/logo.svg"
import { useState } from "react"
import { AiOutlineMenu } from "react-icons/ai"

const Navbar = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const links = ["About", "Services", "Projects", "Contact"]
  return (
    <div className="flex items-center justify-between p-4">
      <img src={Logo} alt="" className="py-2 hover:cursor-pointer" />
      <AiOutlineMenu
        size={30}
        className="flex text-white hover:cursor-pointer sm:hidden"
      />
      <ul className="hidden sm:flex sm:gap-4 sm:text-white">
        {links.map((link, i) => (
          <li
            key={i}
            className={`py-2 px-4 hover:cursor-pointer hover:bg-sky-300 rounded-3xl ${
              currentIndex === i
                ? "bg-white hover:bg-white text-black font-semibold"
                : ""
            }`}
            onClick={() => setCurrentIndex(i)}
          >
            {link}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Navbar
