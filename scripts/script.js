const scrollHeaderDistance = 100;
const scrollHomeDistance = 400;

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

function transitionSections(e) {
	if (checkScroll(scrollHomeDistance) && $(home).is(":visible")) {
		$(home).transition({
			animation: "fade up",
			duration: "1000ms",
			queue: false,
			onComplete: transitionSections
		});
	} else if (!checkScroll(scrollHomeDistance) && !$(home).is(":visible")) {
		$(home).transition({
			animation: "fade up",
			duration: "1000ms",
			queue: false
		});
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
	transitionSections(e);
}

$(document).ready(function() {
	$(window).scroll(handleScroll);
	$(".tabs-item-link").click(switchTab);
	$(home).transition({
		animation: "fade up",
		duration: "1000ms",
		queue: false
	});
});