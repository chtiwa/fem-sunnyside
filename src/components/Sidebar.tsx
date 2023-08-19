interface SidebarProps {
  isSidebarOpen: boolean
  setIsSidebarOpen: (isSidebarOpen: boolean) => void
}

const Sidebar: React.FC<SidebarProps> = ({
  isSidebarOpen,
  setIsSidebarOpen
}) => {
  const links = ["About", "Services", "Projects", "Contact"]
  return (
    <ul
      className={`${
        isSidebarOpen
          ? "fixed top-0 right-0 flex flex-col gap-y-8 items-center justify-start w-[300px] h-[100vh] bg-white p-8 text-black font-semibold sm:hidden transition-all opacity-100"
          : "hidden opacity-0"
      }`}
    >
      {links.map((link, i) => (
        <li
          key={i}
          className="px-4 py-2 hover:bg-yellow-200 rounded-full hover:cursor-pointer"
          onClick={() => setIsSidebarOpen(false)}
        >
          {link}
        </li>
      ))}
    </ul>
  )
}

export default Sidebar
