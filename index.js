//console.log("Hello World")
let message = document.querySelector("#message")

const addMovie = (e) => {
    e.preventDefault()
    let inputField = document.querySelector("input")
    let movie = document.createElement("li")
    let movieTitle = document.createElement("span")
    movieTitle.innerHTML = inputField.value
    movieTitle.addEventListener("click", crossOffMovie)
    movie.appendChild(movieTitle)
    let deleteBtn = document.createElement("button")
    deleteBtn.textContent = "X"
    deleteBtn.addEventListener("click", deleteMovie)
    movie.appendChild(deleteBtn)
    let listElement = document.querySelector("ul")
   listElement.appendChild(movie)
   inputField.value = ""
}

let formElement = document.querySelector("form")
formElement.addEventListener("submit", addMovie)

const deleteMovie = (e) => {
  let deleteText = ""
    e.target.parentNode.remove()
    //message.textContent = "Movie Deleted!"
    deleteText = e.target.parentNode.textContent + " deleted"
    revealMessage(deleteText)
}

const crossOffMovie = (e) => {
   // let checkedClass = document.querySelector(".checked")
   let messageText = ""
  e.target.classList.toggle("checked")
  if(e.target.classList.contains("checked") === true) {
   // message.textContent = "Movie Watched"
    messageText = e.target.textContent + " watched"
  } else {
   // message.textContent = "Movie added Back"
    messageText = e.target.textContent + " added back"
  }
revealMessage(messageText)
}

const revealMessage = (messageText) => {
message.classList.remove("hide")
 message.textContent = messageText
    setTimeout(() => {
    message.classList.add("hide")
    }, 1000)
}