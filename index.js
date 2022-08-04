let homeScore = document.getElementById("home-score")
let visitorScore = document.getElementById("visitor-score")


function incrementHomeOne() {
    homeScore.textContent++
}
function incrementHomeTwo() {
    homeScore.textContent = parseInt(homeScore.textContent) + 2
}
function incrementHomeThree() {
    homeScore.textContent = parseInt(homeScore.textContent) + 3
}
function incrementVisitorOne() {
    visitorScore.textContent++
}
function incrementVisitorTwo() {
    visitorScore.textContent = parseInt(visitorScore.textContent) + 2
}
function incrementVisitorThree() {
    visitorScore.textContent = parseInt(visitorScore.textContent) + 3
}
