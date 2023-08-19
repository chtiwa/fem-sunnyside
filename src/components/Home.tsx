import Navbar from "./Navbar"
import Logo from "/images/icon-arrow-down.svg"

const Home = () => {
  return (
    <div className="sm:bg-[url('/images/desktop/image-header.jpg')] bg-[url('/images/mobile/image-header.jpg')] object-cover bg-no-repeat bg-center w-[100%] h-[100vh]">
      <Navbar />
      <div className="absolute top-[30%] left-[50%] translate-x-[-50%] translate-y-[-20%] flex flex-col items-center justify-center gap-44 w-[100%]">
        <h1 className="text-5xl text-center sm:text-6xl text-white font-bold">
          WE ARE CREATIVES
        </h1>
        <img src={Logo} alt="" />
      </div>
    </div>
  )
}

export default Home
