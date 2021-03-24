function addUser(){
var player1 = document.getElementById("P-1 input").value
var player2 = document.getElementById("P-2 input").value

localStorage.setItem("player1",player1)
localStorage.setItem("player2",player2)

window.location = "game_page.html"
}
