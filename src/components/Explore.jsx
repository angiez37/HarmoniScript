import React from 'react'
const Explore = () => {
  return (
    <div name='explore' className="flex justify-center items-center m-5">
        <div className="flex justify-center items-center border shadow-secondary border-10 border-secondary shadow-2xl m-20 p-10">
            <div className="flex flex-col justify-center items-center m-20 gap-5">
                <p className="font-serif text-2xl text-black text-center leading-8">Meet <span className="font-bold">HarmoniScript!</span></p>
                <p className="font-serif text-2xl text-black text-center leading-8">A free website where you can upload you favorite songs to be translated to sheet music in a matter of seconds.</p>
                <p className="font-serif text-2xl text-black text-center leading-8">All you need to do is choose your song from your device, select your instrument and click upload. It's that easy!</p>
                <p className="font-serif text-2xl text-black text-center leading-8">Get started today with <span className="font-bold">HarmoniScript!</span></p>
            </div>
        </div>
    </div>
  )
}

export default Explore
