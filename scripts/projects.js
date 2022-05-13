const repositories = [
	"r-nyknicks-moderators/discord-hooks",
	"callumc34/nodejs-discord-bot",
	"callumc34/OnBeat",
	"callumc34/AudioPlusPlus",
	"callumc34/HunterPie.DiscordHelper",
	"callumc34/HunterPie.DiscordHelper.Server",
	"callumc34/File-Boxes",
	"callumc34/JStorage",
	"callumc34/callumc34.github.io",
	"callumc34/gosb-website"
];

function getInfo(n) {
	$.ajax({
		url: "https://api.github.com/repos/" + this,
		jsonp: true,
		method: "GET",
		dataType: "json",
		success: generateCard
	});
}

function generateCard(res) {
	let link = res.html_url
	let title = res.name;
	let desc = res.description;
	let stars = res.watchers
	let language = res.language;

	let card = `
                    <div class="ui card" href="${link}">
                        <div class="content">
                            <div class="header">
                                ${title}
                            </div>
                            <div class="meta">
                                ${language}
                            </div>
                            <div class="description">
                                ${desc}
                            </div>
                        </div>
                        <div class="extra content">
                            <span class="left floated">
                                <i class="star icon"></i>
                                ${stars} Stars
                            </span>
                        </div>
                    </div>
	`

	$(repos).append(card);
	$(".card[href]").click(function() {
		window.open(this.getAttribute("href"));
	});
}


$(repositories).each(getInfo);

