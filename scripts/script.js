const scrollHeaderDistance = 100;
const scrollHomeDistance = 400;
const scrollAboutDistance = 600;

function checkScroll(distance) {
	if ($(window).scrollTop() >= distance) return true;
	return false;
}

function changeHeaderColour(e) {
	if (checkScroll(scrollHeaderDistance)) {
		$(header).addClass("scrolled");
		$("#header-placeholder").css({display: "block"});
	}
	else {
		$(header).removeClass("scrolled");
		$("#header-placeholder").css({display: "none"});
	}
}

function switchTab(e) {
	e.preventDefault();
		
	if ($(this).hasClass('tabs-item-active')) return false;

	$('.tabs-item-active').removeClass('tabs-item-active');
	$(this).addClass('tabs-item-active');
}

function handleScroll(e) {
	changeHeaderColour(e);
}

$(document).ready(function() {
	console.log("he");
	$(window).scroll(handleScroll);
	$(".tabs-item-link").click(switchTab);
	$('a[href^="#"]').on('click', function(event) {

	  var target = $(this.getAttribute('href'));

	  if (target.length) {
	    event.preventDefault();
	    $('html, body').stop().animate({
	      scrollTop: target.offset().top - 150
	    }, 1000);
	  }
	});

	setTimeout(function() {
		$(".loader").css({display: "none"});

		$(content).css({display: "block"})

		$(page).transition({
			animation: "fade up",
			duration: "1000ms",
			queue: false
		});

		$(".section").transition({
			animation: "fade up",
			duration: "1000ms",
			queue: false
		});
	}, 1000);
});