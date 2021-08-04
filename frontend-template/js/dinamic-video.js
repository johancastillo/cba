console.log("READY")

const video = document.getElementById("video")
const question = document.getElementById("question")
const btn1 = document.getElementById("option1")
const btn2 = document.getElementById("option2")


video.addEventListener('ended', () => {
  if(document.fullscreen){
    document.exitFullscreen()
  }

  question.classList.add("activate")
  console.log("Hola")
})



btn2.addEventListener("click", () => {
  video.src = "video/02.mp4"
  question.classList.remove("activate")
  console.log("Option 1")
})

btn1.addEventListener("click", () => {
  video.src = "video/03.mp4"
  question.classList.remove("activate")
  console.log("Option 2")
})
