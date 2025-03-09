
let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

function addHome(points) {
    homeScore.innerText = Number(homeScore.innerText) + points
}

function addGuest(points) {
    guestScore.innerText = Number(guestScore.innerText) + points
}

function newGame() {
    homeScore.innerText = 0
    guestScore.innerText = 0
}