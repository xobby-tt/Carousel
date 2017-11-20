var carouselUl = carousel.firstElementChild;
var carouselElements = document.querySelectorAll('#carousel > ul > li');

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

