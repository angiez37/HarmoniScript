import thanku from "../assets/thanku2.png";
import violin from "../assets/violin.jpg";
import piano from "../assets/piano.jpg";
import clarinet from "../assets/clarinet.jpg";
import guitar from "../assets/guitar.jpg";
import trumpet from "../assets/trumpet.jpg";
import cello from "../assets/cello.jpg";
import {Link} from "react-scroll";


{/*Header section - Title and description*/}
const Header = () => {
  return (
    <div className="border-b border-white p-5 pt-20 m-10 my-5">
        <div className="flex flex-wrap justify-between items-center gap-5">
            <div className="flex flex-col justify-center items-center gap-12 p-10 lg:w-1/2">
                <div className="font-serif text-5xl leading-20 p-9">From Sounds to Score in Seconds</div>
                <div>
                    <button className="bg-slate-300 hover:bg-slate-400 text-black text-3xl font-serif py-2 px-4 rounded-lg">
                        <Link to="explore" smooth={true} duration={500}>Explore More</Link>
                    </button>
                </div>
            </div>
            <div className="flex justify-center items-center gap-2 p-10 ">
                <img src={thanku} alt="Song Example" className="w-65 h-auto"/>
            </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-5 p-10">
            <div className="flex font-serif text-2xl text-black">Sheet Music Made Simple: Upload, convert, and play - it's that easy.</div>
            <div className="grid grid-flow-col auto-cols-auto overflow-x-auto gap-10 p-20">
                <div className="flex flex-col justify-center items-center gap-5 border-10 border-primary">
                    <img src= {violin} alt="Violin" className="rounded-lg hover:cursor-pointer" />
                    <h2 className="font-serif font-bold text-2xl text-slate-600">Violin</h2>
                </div>
                <div className="flex flex-col justify-center items-center gap-5">
                    <img src= {piano} alt="Piano" className="rounded-lg hover:cursor-pointer"/>
                    <h2 className="font-serif font-bold text-2xl text-slate-600">Piano</h2>
                </div>
                <div className="flex flex-col justify-center items-center gap-5">
                    <img src= {clarinet} alt="Clarinet" className="rounded-lg hover:cursor-pointer"/>
                    <h2 className="font-serif font-bold text-2xl text-slate-600">Clarinet</h2>
                </div>
                <div className="flex flex-col justify-center items-center gap-5">
                    <img src= {guitar} alt="Guitar" className="rounded-lg hover:cursor-pointer"/>
                    <h2 className="font-serif font-bold text-2xl text-slate-600">Guitar</h2>
                </div>
                <div className="flex flex-col justify-center items-center gap-5">
                    <img src= {trumpet} alt="Trumpet" className="rounded-lg hover:cursor-pointer"/>
                    <h2 className="font-serif font-bold text-2xl text-slate-600">Trumpet</h2>
                </div>
                <div className="flex flex-col justify-center items-center gap-5">
                    <img src= {cello} alt="Cello" className="rounded-lg hover:cursor-pointer"/>
                    <h2 className="font-serif font-bold text-2xl text-slate-600">Cello</h2>
                </div>
            </div>
        </div>
      
    </div>
  )
}
export default Header
