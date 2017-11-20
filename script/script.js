var carouselElements = document.querySelectorAll('#content > ul > li');
var contentUl = content.firstElementChild;

var startTime;
var endTime;

var speedButton = document.querySelector(".speed-button");

speedButton.onmousedown = function() {
    startTime = new Date();    
}

speedButton.onmouseup = function() {
    endTime = new Date();
    speedSpin(startTime, endTime);    
}

function speedSpin(start, end) {
    var duration = end - start;
    var begin = new Date();
    var timer = setInterval(function() {
        var timePassed = Date.now() - begin;    
        
            if (timePassed >= duration*5) {
                clearInterval(timer); 
                return;
              }
            
            contentUl.appendChild(contentUl.firstElementChild);
    }, 50);
    
    
}

