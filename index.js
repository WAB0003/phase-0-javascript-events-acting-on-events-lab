// Your code here

const dodger = document.querySelector("#dodger");
dodger.style.backgroundColor = "#FF69B4";
const dodgerHeight = 20;
const dodgerWidth = 40;
const primaryBackground = document.querySelector('#game');
const primaryBackgroundHeight = 400
const primaryBackgroundWidth = 400


//moving Dodger to the Left

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    
    if (left > 0) {
        dodger.style.left = `${left - 10}px`;
    }
}
document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
        moveDodgerLeft()
  }
});

//moving Dodger to the Right
function moveDodgerRight() {
    const rightNumbers = dodger.style.left.replace("px","");
    const right = parseInt(rightNumbers,10);

    if(right < (primaryBackgroundWidth-dodgerWidth)) {
        dodger.style.left = `${right + 10}px`
    }
}

document.addEventListener("keydown", function (e) {
    if (event.key === "ArrowRight") {
        moveDodgerRight();
    }
})

function moveDodgerUp () {

}

function moveDodgerDown () {

}