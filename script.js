// ==UserScript==
// @name         yaruo-extension
// @namespace    https://github.com/Duct-and-rice/yaruo-extension
// @version      0.0.1
// @description  A userscript for Yaruo Cluster
// @author       The Department of Yaruo of Koushinkyo
// @match        http://jbbs.shitaraba.net/bbs/read.cgi/*
// @match        http://bbs.yaruyomi.com/test/read.cgi/ban/*
// @grant        none
// ==/UserScript==

require('jquery-inview');
var YouTubePlayer = require('youtube-player');
$('head').append($('<link href="https://cdn.rawgit.com/Duct-and-rice/dokaben-css/master/dokaben.css" rel="stylesheet">'));
$('body').append($('<div id="yaruo-ext-video"><div id="yaruo-ext-player"></div></div><button id="yaruo-ext-button">option</button>'));
var youtubeRes = new Array();
if (localStorage.getItem('yaruo-ext-conf-youtube') == null) {
	localStorage.setItem('yaruo-ext-conf-youtube', 'checked');
}
$('#yaruo-ext-video').attr({
	style: 'width:64px;height:36px;z-index:2;position:fixed;bottom:5px;right:5px;'
});
$('#yaruo-ext-button').attr({
	style: 'position:fixed;z-index:10;top:5px;right:5px;'
});
$('#yaruo-ext-button').click(function() {
	$('body').prepend($('<div id="yaruo-ext-config">YouTube:<input type="checkbox" id="yaruo-ext-config-youtube"></input><textarea id="yaruo-ext-config-t"></textarea><button id="yaruo-ext-config-s">保存</button><button id="yaruo-ext-config-c">キャンセル</button></div>'));
	$('#yaruo-ext-button').hide();
	$('#yaruo-ext-config').attr({
		style: 'width:50%;height:80%;z-index:3;position:fixed;top:0;bottom:0;left:0;right:0;margin:auto;background-color:#FFF;padding:5px;'
	});
	$('#yaruo-ext-config-c').click(function() {
		$('#yaruo-ext-config').remove();
		$('#yaruo-ext-button').show();
	});
	$('#yaruo-ext-config-s').click(function() {
		localStorage.setItem('yaruo-ext-conf', $('#yaruo-ext-config-t').val());
		localStorage.setItem('yaruo-ext-conf-youtube', $('#yaruo-ext-config-youtube').prop('checked') ? 'checked' : '');
		$('#yaruo-ext-config').remove();
		$('#yaruo-ext-button').show();
	});
	$('#yaruo-ext-config-t').attr({
		style: 'width:100%;height:90%;resize:none;'
	});
	$('#yaruo-ext-config-t').val(localStorage.getItem('yaruo-ext-conf'));
	$('#yaruo-ext-config-youtube').prop('checked', localStorage.getItem('yaruo-ext-conf-youtube') == 'checked');
});

var vid = '',
	sec = 0,
	state, v = 'a',
	s = 1;
var player = YouTubePlayer('yaruo-ext-player', {
	width: 64,
	height: 36,
	playerVars: {
		'autoplay': 0
	},
});
player.on('stateChange', function(event) {
	state = event.data;
});

var selectors = {
	youtube: $('dd:contains("youtube")'),
	dokaben: $('dd:contains("dokaben")'),
	firstname: $('dt:first').children('font,a[href="mailto:sage"]'),
	thisresheader: function(t) {
		return $(t).prev('dt').text();
	},
	thisresname: $()
}

if (location.hostname === 'bbs.yaruyomi.com') {
	selectors.youtube = $('span[ng-bind-html="res.body"]:contains("youtube")');
	selectors.dokaben = $('span[ng-bind-html="res.body"]:contains("dokaben")');
	selectors.firstname = $('span[ng-bind-html="res.name"]:first');
}
selectors.youtube.each(function() {
	var args = $(this).text().match(/<youtube\s*(\w+)\s*(\d+):(\d+)\s*>/);
	if (args == void 0) {
		return true;
	}

	var confCheck = false,
		confs = '';
	if (localStorage.getItem('yaruo-ext-conf') != null) {
		confs = localStorage.getItem('yaruo-ext-conf').split('\n');
	};
	var i;

	selectors.thisresname = $(this).prev('dt').children('font,a[href="mailto:sage"]').text();
	var term = (selectors.thisresname === selectors.firstname.text());
	if (location.hostname === 'bbs.yaruyomi.com') {
		selectors.thisresname = $(this).prevAll('span[ng-bind-html="res.name"]').text();
		term = false;
	}
	for (i in confs) {
		if (confs[i] === '') {
			continue;
		}
		confCheck = selectors.thisresname.indexOf(confs[i]) != -1 || confCheck;
	}
	if (term || confCheck) {
		$(this).on('inview', function(event, isInView) {
			if (isInView && localStorage.getItem('yaruo-ext-conf-youtube') == 'checked') {
				v = args[1], s = parseInt(args[2]) * 60 + parseInt(args[3]);
				if (state === 2 || v !== vid) {
					vid = v;
					sec = s;
					player.loadVideoById(vid, sec);
				}
			}
		});
	}
});

selectors.dokaben.each(function() {
	var regex = /&lt;dokaben\s*(?:((?:nokomaochi\s+|s\d+\s+|nofont\s+|nobig\s+|noloop\s+)*))?\s*"([^\n]+)"\s*&gt;/g;

	console.log($(this).html());
	if ($(this).html().match(regex) == void 0) {
		return true;
	}
	var str = $(this).html().replace(regex, function(a, t, c) {
		if (t != undefined) {
			var arr = t.split(/\s/),
				komaochi = 'dkbn-steps',
				speed = '',
				font = 'dkbn-text',
				size = 'font-size: 5em;';
			console.log(arr);
			if (arr.indexOf('nokomaochi') >= 0) {
				komaochi = '';
			}
			if (arr.indexOf('nofont') >= 0) {
				font = '';
			}
			if (arr.indexOf('nobig') >= 0) {
				size = '';
			}
			for (var i = 0; i < arr.length; i++) {
				var r = /s(\d+)/;
				if (arr[i].match(r) != void 0) {
					speed = 'animation-duration: ' + arr[i].match(r)[1] + 'ms;';
				}
			}
			return '<span class="dokaben dkbn-loop ' + arr.join(' ') + ' ' + komaochi + ' ' + font +
				'" style="' + speed + ' ' + size + '">' + c + '</span>';
		}
		return '<span class="dokaben dkbn-loop dkbn-text dkbn-steps" style="font-size: 5em;">' + c + '</span>'
	}).split('\\n').join('<br>');
	$(this).html(str);
});
