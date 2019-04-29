'use strict';

// listen on window for keydown event, and when it happens function will run
window.addEventListener('keydown', e => {
  // we want to find an audio element on the page that has a data-key attribute of 65, 42, etc..
  // using attribute selector 
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  console.log(audio);
  if (!audio) {
    // stops the function from running altogether if the key user presses has no data-key attribute
    return;
  }
  audio.play();
});