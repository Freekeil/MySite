$(document).ready(function(){
  $('body').append('<a href="#" id="go-top" title=""></a>');
});

$(function() {
 $.fn.scrollToTop = function() {
  $(this).hide().removeAttr("href");
  if ($(window).scrollTop() >= "250") $(this).fadeIn("slow")
  var scrollDiv = $(this);
  $(window).scroll(function() {
   if ($(window).scrollTop() <= "250") $(scrollDiv).fadeOut("slow")
   else $(scrollDiv).fadeIn("slow")
  });
  $(this).click(function() {
   $("html, body").animate({scrollTop: 0}, "slow")
  })
 }
});

$(function() {
 $("#go-top").scrollToTop();
});

 
		setInterval(function () {  
		date = new Date(),  
		h = date.getHours(),  
		m = date.getMinutes(),  
		s = date.getSeconds(),  
		h = (h < 10) ? '0' + h : h,  
		m = (m < 10) ? '0' + m : m,  
		s = (s < 10) ? '0' + s : s,  
		document.getElementById('time').innerHTML = h + ':' + m + ':' + s;  
		}, 1000);  