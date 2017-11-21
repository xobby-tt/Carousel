var carouselElements = document.querySelectorAll('#content > ul > li');
var contentUl = content.firstElementChild;

var startTime;
var endTime;

var speedButton = document.querySelector(".speed-button");

for(var i = 0; i < carouselElements.length; i++)  {
    carouselElements[i].setAttribute("weight", i);
}

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
            
            contentUl.insertBefore(randomizer(), contentUl.children[1]);
            contentUl.appendChild(contentUl.firstElementChild);
            
    }, 50);
    
    function randomizer() {
        var randNum = Math.random();
        console.log(randNum);
        if (randNum < 0,2) 
            return takeElem(0);
        else if (randNum >= 0,2 && randNum < 0,3)
            return takeElem(1);
        else if (randNum >= 0,3 && randNum < 0,4)
            return takeElem(2);
        else if (randNum >= 0,4 && randNum < 0,45)
            return takeElem(3);
        else if (randNum >= 0,45 && randNum < 0,5)
            return takeElem(4);
        else if (randNum >= 0,5 && randNum < 0,6)
            return takeElem(5);
        else if (randNum >= 0,6 && randNum < 0,7)
            return takeElem(6);
        else if (randNum >= 0,7 && randNum < 0,8)
            return takeElem(7);
        else if (randNum >= 0,8 && randNum < 0,9)
            return takeElem(8);
        else if (randNum >= 0,9 && randNum < 0,95)
            return takeElem(9);
        else if (randNum >= 0,95 && randNum <= 1)
            return takeElem(3);
        
    }

    function takeElem(weight) {
        for(var i = 0; i < contentUl.children.length; i++) {
            if (weight == parseInt(contentUl.children[i].getAttribute("weight")))
                return contentUl.children[i];
        }
    }
    
}

