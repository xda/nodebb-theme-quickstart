(function(module) {
	"use strict";

	var Theme = {
		teaserContentShort: function (data, callback) {
			data.topics.forEach(topic => {
				const teaserContent  = topic.teaser.content;
				const articleURL     = teaserContent.match(/href="(.+?)"/);
				const articleContent = teaserContent.match(/<blockquote>\s<p>(.*)<\/p>\s<\/blockquote>/);

				topic.teaser.readMoreURL = articleURL ? articleURL[1] : 'https://www.xda-developers.com/';
				topic.teaser.contentShort = articleContent ? articleContent[1].split(' ').slice(0,10).join(' ') : 'This regex is not being matched';
			});

			callback(null, data);
		}
	};

	module.exports = Theme;

}(module));