console.log("Welcome to tic tac toe");
let music = new Audio("/Assets/music.mp3");
let turn = new Audio("/Assets/ting.mp3");
let gameover = new Audio("/Assets/gameover.mp3");
let turn1 = "X";
let gameOver = false;
let light = true;
let boxx = document.getElementsByClassName("box");
const changeTurn = () => {
  return turn1 === "X" ? "O" : "X";
};

const checkwin = () => {
  let boxtexts = document.getElementsByClassName("boxtext");
  
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  wins.forEach((e) => {
    if (
      boxtexts[e[0]].innerText === boxtexts[e[1]].innerText &&
      boxtexts[e[1]].innerText === boxtexts[e[2]].innerText &&
      boxtexts[e[0]].innerText === "X"
    ) {
      document.querySelector(".info").innerText =
        boxtexts[e[0]].innerText + " Won";
        boxx[e[0]].style.backgroundColor = "black";
        boxx[e[1]].style.backgroundColor = "black";
        boxx[e[2]].style.backgroundColor = "black";
      gameOver = true;
      
      document
        .querySelector(".imgBox")
        .getElementsByTagName("img")[0].style.width = "200px"
    }
    else if(      boxtexts[e[0]].innerText === boxtexts[e[1]].innerText &&
      boxtexts[e[1]].innerText === boxtexts[e[2]].innerText &&
      boxtexts[e[0]].innerText === "O"){
      document.querySelector(".info").innerText =
      boxtexts[e[0]].innerText + " Won";
      boxx[e[0]].style.backgroundColor = "black";
      boxx[e[1]].style.backgroundColor = "black";
      boxx[e[2]].style.backgroundColor = "black";
    gameOver = true;
    
    document
      .querySelector(".imgBox")
      .getElementsByTagName("img")[0].style.width = "200px"
    }
  });
};

//main logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxtext");
  element.addEventListener("click", () => {
    if (boxtext.innerText === "" && !gameOver) {
      boxtext.style.color = turn1 ===  "X"?"red":"white";
      boxtext.innerText = turn1;
      turn1 = changeTurn();
      turn.play();
      checkwin();

      if (!gameOver) {
        document.getElementsByClassName("info")[0].innerText =
          "Turn for " + turn1;
      }
    }
  });
});

reset.addEventListener("click", () => {
  let boxtexts = document.querySelectorAll(".boxtext");
  Array.from(boxtexts).forEach((element) => {
    element.innerText = "";
    element.parentElement.style.backgroundColor = "";
  });
  turn1 = "X";
  gameOver = false;
  document.getElementsByClassName("info")[0].innerText = "Turn for " + turn1;
  document
        .querySelector(".imgBox")
        .getElementsByTagName("img")[0].style.width = "0px";

});

const but = document.querySelector(".DL-M");
const nav = document.querySelector(".nav-bar-head")
but.addEventListener("click",(event)=>{
light = !light;
but.innerText = light? 'Dark Mode':'Light Mode';
but.classList.toggle('light-mode');
but.classList.toggle('dark-mode');
nav.classList.toggle('light-mode');
nav.classList.toggle('dark-mode');
})
