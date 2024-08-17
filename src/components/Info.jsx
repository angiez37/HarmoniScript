import React from 'react'
import Logo from "../assets/Harmonilogo.png";
import { FaGithub} from "react-icons/fa";
import {Link} from "react-scroll";

const Info = () => {
  return (
    <nav className="bg-slate-400 mb-8 flex items-center justify-between py-4 px-9 fixed top-0 w-full shadow-2xl">
      <div className="flex flex-wrap items-center justify-center gap-3">
        <img src={Logo} alt="HarmoniScript Logo" className="h-16 w-auto hover:cursor-pointer"/>
        <div className="font-serif text-xl">HarmoniScript</div>
      </div>
      <div className="flex flex-wrap justify-center items-center w-60 h-14 rounded-full text-md border border-opacity-10 backdrop-blur gap-6 mr-12 hover:cursor-pointer">
        <div className="font-serif text-xl text-secondary w-25 h-9 hover:text-blue-300">
            <Link to="upload" smooth={true} duration={500}>Upload</Link>
        </div>
        <div className="font-serif text-xl rounded-3xl w-25 h-9 hover:text-slate-300">
            <Link to="explore" smooth={true} duration={500}>About Us</Link>
        </div>
      </div>
      <div className="bg-black-500 p-2 rounded flex items-center gap-1 font-serif">
        <FaGithub />
        <a href="https://github.com/angiez37/HarmoniScript" target="_blank" className="text-lg">Github</a>
      </div>
    </nav>
  )
}

export default Info
