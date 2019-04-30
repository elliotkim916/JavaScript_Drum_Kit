'use strict';

function playSound(e) {
  // we want to find an audio element on the page that has a data-key attribute of 65, 42, etc..
  // using attribute selector 
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if (!audio) {
    return; // stops the function from running altogether if the key user presses has no data-key attribute
  } else {
    audio.currentTime = 0; // rewinds to the start
    audio.play();
    key.classList.add('playing');
  }
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') {
    return; 
  } else {
    this.classList.remove('playing');
  }
}

// When you have an array of elements, you cannot listen on all of them
// You must explicitly loop over every single one of them and attach an event listener
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

// listen on window for keydown event, and when it happens function will run
window.addEventListener('keydown', playSound);