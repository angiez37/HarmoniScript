import Logo from "../assets/Harmonilogo.png";
import {FaGithub} from "react-icons/fa";
const navbar = () => {
  return (
    <nav className="bg-slate-400 mb-8 flex items-center justify-between py-4 px-9 fixed top-0 w-full shadow-2xl">
      <div className="flex flex-wrap items-center justify-center gap-3">
        <img src={Logo} alt="HarmoniScript Logo" className="h-16 w-auto hover:cursor-pointer"/>
        <div className="font-serif text-xl">HarmoniScript</div>
      </div>
      <div className="flex justify-center items-center w-60 h-14 rounded-full text-md border border-opacity-10 backdrop-blur gap-6 mr-12 hover:cursor-pointer hover:bg-opacity-10">
        <button className="font-serif text-xl text-secondary rounded-3xl w-40 h-9 hover:bg-slate-500">Upload</button>
        <button className="font-serif text-xl rounded-3xl w-40 h-9 hover:bg-slate-500">About Us</button>
      </div>
      <div className="bg-black-500 p-2 rounded flex items-center gap-1 font-serif">
        <FaGithub />
        <a href="https://github.com/angiez37/HarmoniScript" target="_blank" className="text-lg">Github</a>
      </div>
    </nav>
  )
}

export default navbar
