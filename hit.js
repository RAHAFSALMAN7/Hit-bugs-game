/*
 * TP 1 Section Exercise - hit a Bug
 * Handles hitting bugs.
 */

"use strict";
(function() {

  window.addEventListener("load", init);

  /**
   * Sets up event listeners for the start button and the bugs.
   */
  function init() {
    let bugs = qsa("#bug-container img");
    for(let i = 0; i < bugs.length; i++) {
      bugs[i].addEventListener("click", hitBug);
    }
  }

  /**
   * TODO
   * whacks the clicked bug and increments the score. The bug cannot be whacked again afterwards.
   */
  let container = 0;
  function hitBug(e) {
  console.log(e.target)
  e.target.src = 'bug-dead.png';
  if(!(e.target.className==='hit')){
    container++;
  }
e.target.className = 'hit';
document.getElementById('score').innerHTML =container;
if(container === 24){
  qs('#game p').innerHTML = 'all bugs have been hit';
}
console.log(container);
  }

/* --- TP1 HELPER FUNCTIONS --- */

  /**
   * Returns the element that has the ID attribute with the specified value.
   * @param {string} name - element ID.
   * @returns {object} - DOM object associated with id.
   */
  function id(name) {
    return document.getElementById(name);
  }

  /**
   * Returns first element matching selector.
   * @param {string} selector - CSS query selector.
   * @returns {object} - DOM object associated selector.
   */
  function qs(selector) {
    return document.querySelector(selector);
  }

  /**
   * Returns an array of elements matching the given query.
   * @param {string} query - CSS query selector.
   * @returns {array} - Array of DOM objects matching the given query.
   */
  function qsa(query) {
    return document.querySelectorAll(query);
  }

})();
