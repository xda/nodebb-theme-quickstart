(function(module) {
	"use strict";

	var Theme = {
		teaserContentShort: function (data, callback) {
			data.topics.forEach(topic => {
				const contentArr             = topic.teaser.content.split('\n');
				const firstParagraphHref     = contentArr[0].match(/href="(.+?)"/);
				const secondParagraphContent = contentArr[1].match(/<p>(.*)<\/p>/);

				topic.teaser.readMoreURL = firstParagraphHref ? firstParagraphHref[1] : 'https://www.xda-developers.com/';
				topic.teaser.contentShort = secondParagraphContent ? secondParagraphContent[1].split(' ').slice(0,10).join(' ') : 'This regex is not being matched';
			});

			callback(null, data);
		}
	};

	module.exports = Theme;

}(module));