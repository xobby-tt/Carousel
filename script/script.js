var carouselUl = carousel.firstElementChild;
var imgRect = carouselUl.firstElementChild.getBoundingClientRect();
var imgWidth = imgRect.width;
var displayAmount = 3;

carousel.style.width = imgWidth * displayAmount + "px";
console.log(carousel.style.width)

var line = document.createElement("div");
line.classList.add("line");
line.style.marginLeft = parseInt(carousel.style.width)/2 + "px"; 
document.body.appendChild(line); //carousel.appendChild(line)

var carouselElements = document.querySelectorAll('#carousel > ul > li');

var speedButton = document.createElement("div");
speedButton.classList.add("speed-button");
speedButton.innerHTML = "Click";
document.body.appendChild(speedButton);

var startTime;
var endTime;

speedButton.onmousedown = function() {
    startTime = new Date;    
}

speedButton.onmouseup = function() {
    endTime = new Date;
    speedSpin(startTime, endTime);    
}

function speedSpin(start, end) {
    var durity = end - start;
    var begin = new Date;
    var timer = setInterval(function() {
        var timePassed = Date.now() - begin;    
        
            if (timePassed >= durity*5) {
                clearInterval(timer); 
                return;
              }
        
            carouselUl.appendChild(carouselUl.firstElementChild);
    }, 50);
    
    
}

//for beautify scrolling (to do)
function foo()  {
    for(var j = 0; j < imgRect.width; j+=0.01) 
        carouselUl.style.marginLeft = -j + "px";
}
