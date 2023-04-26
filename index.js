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
    deleteBtn.innerHTML = "X"
    deleteBtn.addEventListener("click", deleteMovie)
    movie.appendChild(deleteBtn)
    let listElement = document.querySelector("ul")
   listElement.appendChild(movie)
   inputField.value = ""
}

let formElement = document.querySelector("form")
formElement.addEventListener("submit", addMovie)

const deleteMovie = (e) => {
    e.target.parentNode.remove()
    message.textContent = "Movie Deleted!"
   // revealMessage()
}

const crossOffMovie = (e) => {
   // let checkedClass = document.querySelector(".checked")
  e.target.classList.toggle("checked")
  if(e.target.classList.contains("checked") === true) {
    message.textContent = "Movie Watched"
  } else {
    message.textContent = "Movie added Back"
  }
//revealMessage()
}

// const revealMessage = (e) => {
//     setTimeout(() => {
//        let hideElement = document.querySelector(".hide")
//        let body = document.querySelector("body")
//        let main = document.querySelector("main")
//        body.classList.add(hideElement)
//        main.classList.add(hideElement)

//     }, 1000)
// }