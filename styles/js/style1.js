var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,4000);

    function nextSlide() {
	var slides = document.querySelectorAll('#slides .slide');
     slides[currentSlide].className = 'slide';
     currentSlide = (currentSlide+1)%slides.length;
     slides[currentSlide].className = 'slide showing';
    }


    function firstImage(){
 	$('#slide1').attr('class', 'slide showing');
 	$('#slide2').attr('class', 'slide');
 	$('#slide3').attr('class', 'slide');
 	$('#slide4').attr('class', 'slide');
    }

    function secondImage(){
	$('#slide1').attr('class', 'slide');
 	$('#slide2').attr('class', 'slide showing');
 	$('#slide3').attr('class', 'slide');
 	$('#slide4').attr('class', 'slide');
    }

    function thirtImage(){
	$('#slide1').attr('class', 'slide');
 	$('#slide2').attr('class', 'slide');
 	$('#slide3').attr('class', 'slide showing');
 	$('#slide4').attr('class', 'slide');
    }

    function fourthImage(){
	$('#slide1').attr('class', 'slide');
 	$('#slide2').attr('class', 'slide');
 	$('#slide3').attr('class', 'slide');
 	$('#slide4').attr('class', 'slide showing');
    }