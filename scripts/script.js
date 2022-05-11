const scrollDistance = 80;

function changeHeaderColour(e) {
	if (window.scrollY >= scrollDistance || window.pageYOffset >= scrollDistance) {
		document.getElementById("header").className = "scrolled";
		document.getElementById("header-placeholder").style.display = "block";
	}
	else {
		document.getElementById("header").className = "";
		document.getElementById("header-placeholder").style.display = "none";
	}
}

function switchTab(e) {
	e.preventDefault();

	if (this.className.includes("tabs-item-active")) return false;

	document.getElementsByClassName("tabs-item-active")[0].className = "tabs-item-link";
	this.className = "tabs-item-link tabs-item-active";
}

window.onscroll = changeHeaderColour;

for (let tab of document.getElementsByClassName("tabs-item-link")) tab.onclick = switchTab;