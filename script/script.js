var carouselUl = carousel.firstElementChild;
var imgRect = carouselUl.firstElementChild.getBoundingClientRect();
var imgWidth = imgRect.width;
var displayAmount = 3;

carousel.style.width = imgWidth * displayAmount + "px";

var carouselElements = document.querySelectorAll('#carousel > ul > li');


var timerId = setInterval(spin, 2000);
  
  // через 30 сек остановить повторы
setTimeout(function() { 
    clearInterval(timerId);
}, 30000);

function spin() {         
        //foo();
        //carouselUl.style.marginLeft = 0 +"px";
        carouselUl.appendChild(carouselUl.firstElementChild);

}

function foo()  {
    for(var j = 0; j < imgRect.width; j+=0.01) 
        carouselUl.style.marginLeft = -j + "px";
}