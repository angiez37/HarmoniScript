const Upload = () => {
  return (
    <div name='upload' className="flex justify-center items-center m-5">
        <div className="flex flex-col justify-center items-center gap-6 border shadow-secondary border-10 border-secondary shadow-2xl m-20 p-10">
            <input type="file" accept="video/*" className="border border-slate-500 border-2 rounded-lg font-serif text-2xl text-center p-4"/>
            <select type="file" accept="video/*" className="border border-slate-500 border-2 rounded-lg font-serif text-2xl text-center p-3">
                <option value="default">Select Instrument</option>
                <option value="violin">Violin</option>
                <option value="piano">Piano</option>
                <option value="clarinet">Clarinet</option>
                <option value="guitar">Guitar</option>
                <option value="trumpet">Trumpet</option>
                <option value="cello">Cello</option>
            </select>
            <button className="bg-slate-400 font-md font-serif text-white px-4 py-2 rounded-md hover:bg-slate-500">
                Upload
            </button>
        </div>
    </div>
  )
}

export default Upload
