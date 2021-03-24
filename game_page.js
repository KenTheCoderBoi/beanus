var player_1_name = localStorage.getItem("player1")
var player_2_name = localStorage.getItem("player2")

var player_1_score = 0
var player_2_score = 0

var question_turn = "player1"
var answer_turn = "player2"

document.getElementById("player1_name").innerHTML = player_1_name + ":";
document.getElementById("player2_name").innerHTML = player_2_name + ":";

document.getElementById("player1_score").innerHTML = player_1_score
document.getElementById("player2_score").innerHTML = player_2_score

document.getElementById("player_question").innerHTML = "question turn -" + player_1_name
document.getElementById("player_answer").innerHTML = "answer turn -" + player_2_name

function send(){
    first_num = document.getElementById("1stnum").value
    second_num = document.getElementById("2stnum").value
    word = first_num * second_num
    remove_lineAt1 = word.replace(lineat1,"_")
    remove_lineAt2 = remove_lineAt1.replace(lineat2,"_")
    remove_lineAt3 = remove_lineAt2.replace(lineat3,"_")   
  
    question_word = "<h4 id='word_display'> Q."+remove_lineAt3+"</h4>"
    input_box = "<br> answer : <input type='text' id='input_check_box'>"
    check_button = "<br><br> <button class='btn btn-info' onclick='check()'>Check</button>"

}
function check(){
input = document.getElementById("input_check_box").value
answer = input.toLowerCase()
console.log(word)
console.log(answer)
if (answer == word){
    if (answer_turn =="player2"){
        player_2_score = player_2_score + 1
        document.getElementById("player2_score").innerHTML =  player_2_score
    } else{
        player_1_score = player_1_score + 1
        document.getElementById("player1_score").innerHTML =  player_1_score
    }
}
if (answer_turn == "player1"){
    answer_turn = "player2"
    document.getElementById("player_answer").innerHTML = player_2_name
} else {
    answer_turn = "player1"
    document.getElementById("player_answer").innerHTML = player_1_name
}
if (question_turn == "player1"){
    question_turn = "player2"
    document.getElementById("player_question").innerHTML = player_2_name
} else{
    question_turn = "player1"
    document.getElementById("player_question").innerHTML = player_1_name
}
document.getElementById("word").innerHTML = ""
}