var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 500,
	speedAsDuration: true
});

var easeOutQuad = new SmoothScroll('[data-easing="easeOutQuad"]', {easing: 'easeOutQuad'});