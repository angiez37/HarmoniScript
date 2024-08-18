import React, {useState} from 'react'

{/*Upload section - select song, select instrument and upload button*/}
const Upload = () => {
  const [song, setSong] = useState(null)
  const [instrument, setInstrument] = useState("default")
  const [sheetMusic, setSheetMusic] = useState(null)


  const handleFileChange = (e) => {
    setSong(e.target.files[0]);
  };

  const handleInstrumentChange = (e) => {
    setInstrument(e.target.value);
  };

  const handleUpload = async () => {

    if(!song || instrument ==="default"){ // Check if song and instrument are selected
      alert("Please select a song and an instrument!")
      return;
    }

    const formData = new FormData();
    formData.append('audio', song);

    try {
      const response = await fetch('http://localhost:5000/upload', { //fetch the song from the client
        method: 'POST',
        body: formData,
      });

      const data = await response.json(); //server response
      setSheetMusic(data); // Set the sheet music data
      console.log('Sheet music data:', data);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };
  return (
    <div name='upload' id="upload" className="flex justify-center items-center m-5">
        <div className="flex flex-col justify-center items-center gap-6 border shadow-secondary border-10 border-secondary shadow-2xl m-20 p-10">
            <input name="audio" id="audio" title="Audio Selection" placeholder="select song" type="file"  accept="audio/*" onChange={handleFileChange} className="border border-slate-500 border-2 rounded-lg font-serif text-2xl text-center p-4"/>
            <select value={instrument} title="Instrument Selection" placeholder="select instrument" onChange={handleInstrumentChange} className="border border-slate-500 border-2 rounded-lg font-serif text-2xl text-center p-3">
                <option value="default">Select Instrument</option>
                <option value="violin">Violin</option>
                <option value="piano">Piano</option>
                <option value="clarinet">Clarinet</option>
                <option value="guitar">Guitar</option>
                <option value="trumpet">Trumpet</option>
                <option value="cello">Cello</option>
            </select>
            <button onClick={handleUpload} className="bg-slate-400 font-md font-serif text-white px-4 py-2 rounded-md hover:bg-slate-500">
                Upload
            </button>
            {sheetMusic && (
            <div className='flex flex-col justify-center items-center gap-0'>
              <img src={sheetMusic.downloadLink} alt="Sheet Music" />
              <a href={sheetMusic.downloadLink} download className="bg-slate-400 font-md font-serif text-white px-4 py-2 rounded-md hover:bg-slate-500">Download</a>
            </div>
            )}
        </div>
    </div>
  )
}

export default Upload
