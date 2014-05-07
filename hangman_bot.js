var irc = require('irc');
var fs = require('fs');

var file = process.argv[2];

var config = {
	channels: ["#osuosc-hangman"],
	server: "irc.freenode.net",
	botName: "Hangman-Botman"
};

var bot = new irc.Client(config.server, config.botName, {
	channels: config.channels
});

var game = false;
var word = "";
var completedWord = "";
var lettersTried = [];

var chooseWord = function() {
	fs.readFile(file, function(err, data) {
		if (err) throw err;
		var lines = data.toString().split('\n');
		index = Math.floor(Math.random() * (lines.length - 1));
		console.log(lines[index]);
		completedWord = "";
		var words = lines[index].split(' ');
		for (var i = 0; i < words.length; i++) {
			completedWord += new Array(words[i].length + 1).join('_');
			completedWord += ' ';
		}
		bot.say(config.channels[0], completedWord.split('').join(' '));
		word = lines[index];

		game = true;
		lettersTried = [];
	});
};

bot.addListener("message", function(from, to, text, message) {
	if (text.toLowerCase().substring(0, 14) == '.start hangman') {
		if (!game) chooseWord();
		else console.log("A game is already occurring!");
	}
});

bot.addListener("message", function(from, to, text, message) {
	if (text.toLowerCase().substring(0, 6) == '.guess') {
	}
});