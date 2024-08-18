const video = document.getElementById("video")
formData.append("video", video.files[0])

//update the url as follows
fetch("http://localhost:5000/upload", {
    method: "POST",
    body: formData,
})