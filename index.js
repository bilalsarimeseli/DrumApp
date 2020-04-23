// BUTTON PRESS DETECTION

var buttonNum = document.querySelectorAll(".drum").length;
for (var i = 0; i < buttonNum; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    soundMaker(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

//KEYBOARD PRESS DETECTION

document.addEventListener("keydown", function (event) {
  soundMaker(event.key);
  buttonAnimation(event.key);
});
function soundMaker(key) {
  switch (key) {
    case "w":
      var audio = new Audio("./sounds/crash.mp3");
      audio.play();
      break;
    case "a":
      new Audio("./sounds/kick-bass.mp3").play();
      break;
    case "s":
      new Audio("./sounds/snare.mp3").play();
      break;
    case "d":
      new Audio("./sounds/tom-1.mp3").play();
      break;
    case "j":
      new Audio("./sounds/tom-2.mp3").play();
      break;
    case "k":
      new Audio("./sounds/tom-3.mp3").play();
      break;
    case "l":
      new Audio("./sounds/tom-4.mp3").play();
      break;

    default:
  }
}

function buttonAnimation(currentKey){
  let activeButton = document.querySelector(`.${currentKey}`);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100)

}