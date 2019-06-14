var leftB = document.querySelector("#LeftSliderButton");
var rightB = document.querySelector("#RightSliderButton");
var views = [2];
leftB.onclick = function () {
  var currView = document.querySelector("#viewContainer");
  currView.style.animation = "currView .25s";
  currView.style.animationFillMode = "forwards";
};
rightB.onclick = function () {
  var currView = document.querySelector("#viewContainer");
  if(currView.style.marginLeft < 0){
    function x() {
      currView.style.animation = "currView .25s";
      currView.style.animationFillMode = "forwards";
    };
    x();
    }
  else {
    currView.style.animation = "currView .25s";
    currView.style.animationFillMode = "forwards";
  }
};
