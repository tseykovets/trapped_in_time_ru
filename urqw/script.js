/**
 * This file is part of the Trapped in Time game.
 * SPDX-License-Identifier: CC0-1.0
 */

// Hide unnecessary UI elements
$('#mute').hide();
$('.navbar-right').hide();

// Function for shuffling an array
window.shuffleArray = function(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
