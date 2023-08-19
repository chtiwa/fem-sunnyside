import { useState } from "react"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Sections from "./components/Sections"
import Testimonials from "./components/Testimonials"
import Sidebar from "./components/Sidebar"

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  return (
    <>
      <Home isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Sections />
      <Testimonials />
      <Footer />
    </>
  )
}

export default App
