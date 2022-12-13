function pageLoaded () {
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');

    let flagWidth = 250;
    let flagHeight = 50;
    let canvasWidth = canvas.width;
    let canvasHeight = canvas.height;

    context.fillStyle = 'red';
    context.fillRect(canvasWidth / 2 - flagWidth / 2,canvasHeight / 2 + flagHeight * -1.5,flagWidth,flagHeight);  

    context.fillStyle = 'white';
    context.fillRect(canvasWidth / 2 - flagWidth / 2,canvasHeight / 2 + flagHeight * -1.5 + 1* flagHeight,flagWidth,flagHeight);  


    context.fillStyle = 'green';
    context.fillRect(canvasWidth / 2 - flagWidth / 2,canvasHeight / 2 + flagHeight * -1.5 + 2* flagHeight,flagWidth,flagHeight);  


}

window.addEventListener("load", pageLoaded);