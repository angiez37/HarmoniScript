const express = require('express');
const multer = require('multer');
const cors = require('cors');
const app = express();

// Set up multer for file upload
const upload = multer({dest:'uploads/'});

//Melody Scanner API 
const MELODY_SCANNER_API_URL = 'https://api.melodyscanner.com/v1/convert/audio-to-sheet';

app.use(cors());

app.post('/upload', upload.single("audio"), (req, res) => {

    // Handle the file upload and send it for processing

    {/*res.send('File uploaded successfully');
    //processing the file for the demo*/}

    const filePath = req.file.path;

    console.log(`Received file: ${filePath}`);
    
    //converting to sheet music
    const SheetMusicData = {
        title: "Twinkle Twinkle Little Star",
        format: "PNG",
        downloadLink: "../src/assets/twinkletwinklelittlestarsheet.png"
    };

    // Return the simulated response
    res.json(SheetMusicData);


});


app.listen(5000, () => {

    console.log('Server started on port 5000');

});