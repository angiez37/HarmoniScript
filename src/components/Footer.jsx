import Logo from "../assets/Harmonilogo.png";
import { FaGithub} from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

{/*Footer section - Project name and contact information*/}
const Footer = () => {
  return (
    <div className="bg-slate-400 mb-8 flex items-center justify-between py-4 px-9 bottom-0 w-full shadow-2xl">
        <div className="flex flex-wrap items-center justify-center gap-3 p-10 ml-20">
            <img src={Logo} alt="HarmoniScript Logo" className=" h-20 w-auto hover:cursor-pointer"/>
            <div className="font-serif text-3xl">HarmoniScript</div>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 p-10 mr-20">
            <h1 className="font-serif text-2xl underline underline-offset-4">Contact</h1>
            <div className="flex flex-col justify-center items-center gap-4">
                <div className="flex justify-center items-center gap-2">
                    <IoIosMail />
                    <a href="mailto:sakam3@mcmaster.com" target="_blank" className="text-lg font-serif">sakam3@mcmaster.ca</a>
                </div>
                <div className="flex justify-center items-center gap-2">
                    <FaGithub />
                    <a href="https://github.com/angiez37/HarmoniScript" target="_blank" className="text-lg font-serif">Github</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
