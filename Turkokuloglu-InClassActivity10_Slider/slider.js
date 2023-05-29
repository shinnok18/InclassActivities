$(document).ready(function() {
	// preload images
	$("#slider img").each(function() {
	  var swappedImage = new Image();
	  swappedImage.src = $(this).attr("src");
	});

	
	// bxSlider plugin options


	$('#slider').bxSlider({
	  randomStart: true,
	  mode: 'horizontal',
	  minSlides: 1,
	  maxSlides: 1,
	  slideWidth: 420,
	  slideHeight:315,
	  moveSlides: 1,
	  auto: true,
	  pause: 3000,
	  pagerCustom: '#pager',
	  pagerType: 'short',
	  pagerShortSeparator: ' / ',
	  autoHover: true,
	  captions:true,
	  stopAutoOnClick:true,
	 
	});
  });
  
