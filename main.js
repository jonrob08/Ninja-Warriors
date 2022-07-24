// Grabbing our canvas and setting/grabbing our context
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

// Setting canvas width and height to a general size that works with most windows
canvas.width = 1024
canvas.height = 576

// Setting the canvas background to a black background (color black by default for fillRect)
ctx.fillRect(0, 0, canvas.width, canvas.height)
