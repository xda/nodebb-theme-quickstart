(function(module) {
	"use strict";

	var Theme = {
		teaserContentShort: function (data, callback) {
			data.topics.forEach(topic => {
				const contentArr = topic.teaser.content.split('\n');

				topic.teaser.contentShort = contentArr[1].match(/<p>(.*)<\/p>/)[1].split(' ').slice(0,10).join(' ');
				topic.teaser.readMoreURL  = contentArr[0].match(/href="(.+?)"/)[1];
			});

			callback(null, data);
		}
	};

	module.exports = Theme;

}(module));