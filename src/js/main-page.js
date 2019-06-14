if (window.location.pathname == "/"){

  // Vars needed for changing nav colors - adding customCss on the top of HTML
  var button = document.getElementById('below');
  var Minipaypal = document.querySelector("#Minipaypal");
  var nav = document.getElementById('Navigation');
  var HeaderElements = [document.querySelector("#mainHeaderName"),document.querySelector("#PhoneMenu"),document.querySelector("#LeftNav a"),document.querySelector("#RightNav a")];
  var TODO = document.getElementById("TODO");
  // change color of nav on a specific Y offset

  window.onscroll = function () {
    if (window.pageYOffset + 200 > Minipaypal.getBoundingClientRect().top) {
      nav.style.animation = "change .25s";
      nav.style.animationFillMode = "forwards";
      for (var i = 0; i < HeaderElements.length; i++) {
        HeaderElements[i].style.animation = "changeColor .25s";
        HeaderElements[i].style.animationFillMode = "forwards";
      }
      TODO.style.animation = "changeColor .25s";
      TODO.style.animationFillMode = "forwards";
      nav.style.background = "#fff";
    }
    else{
      nav.style.animation = "Revertchange .25s";
      nav.style.animationFillMode = "backwards";
      for (var i = 0; i < HeaderElements.length; i++) {
        HeaderElements[i].style.animation = "changeColor .25s";
        HeaderElements[i].style.animationFillMode = "backwards";
      }
      TODO.style.animation = "changeColor .25s";
      TODO.style.animationFillMode = "backwards";
        nav.style.background = "none";
    }

    if (window.pageYOffset > 630){
      deleteButtons();
    }
    else if (window.pageYOffset < 630){
      deleteButtons();
    }
  };
  // change the color whenever PhoneMenu is pressed..

  // go to about projects section whenever user clicks go below button
  button.onclick = function () {
    var heightX = $(window).height();
    window.scroll(0, heightX-75);
  }

  function changeButtonBG(elem){
    elem.style.animation = "changeButtonBG .25s";
    elem.style.animationFillMode = "forwards";

  }

// Hide MiniIcons till the nav goes up again
  function deleteButtons() {
    var Icons = document.getElementsByClassName('MiniSocial');
    for(let c of Icons) {
      if (window.pageYOffset > c.getBoundingClientRect().y) {
        c.style.visibility = "hidden";
      }
      else if (window.pageYOffset < c.getBoundingClientRect().y) {
        c.style.visibility = "visible";
      }
    }

  }

}
else {
  var blackNavElement = document.querySelector('#Navigation');
  var blackNavElementLeft = document.querySelector('#LeftNav a');
  var blackNavElementRight = document.querySelectorAll('#RightNav a');
  blackNavElement.style.color = 'black';
  blackNavElementRight[0].style.color='black';
  blackNavElementRight[1].style.color='black';
  blackNavElementLeft.style.color='black';
  blackNavElement.style.background = 'white';
}

// Setting the Smaller-displays Header Menu..
var PhoneMenu = document.getElementById("PhoneMenu");
var counter = 0;
PhoneMenu.onclick = function () {
    var body = document.querySelector("body");
    if (body.getBoundingClientRect().x <= 720) {
      var Menu = document.querySelector("#Menu");
      var MenuLis = document.getElementById('MenuLis');
      if (counter%2 == 0) {
        counter++;
        Menu.style.animation = "Menu 0.25s";
        Menu.style.animationFillMode = "forwards";
        MenuLis.style.display = "block";
        Menu.style.display = "block";
        if (window.pageYOffset + 200 < Minipaypal.getBoundingClientRect().top) {
          var changeColors = [document.querySelector("#mainHeaderName"),document.querySelector("#PhoneMenu")];
          for (var i = 0; i < changeColors.length; i++) {
            changeColors[i].style.animation = "changeColor .25s";
            changeColors[i].style.animationFillMode = "forwards";
          }
          nav.style.background = "#fff";
        }
      }
      else {
        counter--;
        Menu.style.animation = "ReMenu 0.25s";
        Menu.style.animationFillMode = "forwards";
        MenuLis.style.display = "none";
        Menu.style.display = "none";
        if (window.pageYOffset + 200 < Minipaypal.getBoundingClientRect().top) {
          var changeColors = [document.querySelector("#mainHeaderName"),document.querySelector("#PhoneMenu")];
          for (var i = 0; i < changeColors.length; i++) {
        changeColors[i].style.animation = "changeColor .25s";
        changeColors[i].style.animationFillMode = "backwards";
        nav.style.background = "none";
      }
      }
      }
    }
  }
