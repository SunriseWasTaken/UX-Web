'use strict';

/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}


/**
 * scroll reveal effect
 */

const sections = document.querySelectorAll("[data-section]");

const reveal = function () {
  for (let i = 0; i < sections.length; i++) {

    if (sections[i].getBoundingClientRect().top < window.innerHeight / 2) {
      sections[i].classList.add("active");
    }

  }
}

reveal();
addEventOnElem(window, "scroll", reveal);

document.addEventListener("DOMContentLoaded", function () {
  const playButton = document.getElementById("playButton");
  const videoCard = document.getElementById("videoCard");
  const fitnessVideo = document.getElementById("fitnessVideo");

  playButton.addEventListener("click", function () {
    if (fitnessVideo.paused) {
      fitnessVideo.style.display = "block";
      fitnessVideo.play();
    } else {
      fitnessVideo.pause();
    }

    playButton.style.display = "none";
  });
});

