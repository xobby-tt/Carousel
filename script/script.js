var carouselUl = carousel.firstElementChild;
var imgRect = carouselUl.firstElementChild.getBoundingClientRect();
var imgWidth = imgRect.right - imgRect.left;
var displayAmount = 3;

carousel.style.width = imgWidth * displayAmount + "px";

var carouselElements = document.querySelectorAll('#carousel > ul > li');


var index = 0;
var timerId = setInterval(spin, 2000, index);

  
  // через 30 сек остановить повторы
setTimeout(function() { 
    clearInterval(timerId);
}, 30000);

function spin() {
    carousel.removeChild(carousel.firstElementChild);
    var newUl = document.createElement("ul");        
    for(var i = index; i < index+displayAmount; i++) {
        if(i > carouselElements.length - 1) {
            i = 0;
            index = -1;
        }
        newUl.appendChild(carouselElements[i]);
    }
    index = i;
    carousel.appendChild(newUl);    
}

