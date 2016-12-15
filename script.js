// ==UserScript==
// @name         yaruo-extension
// @namespace    https://github.com/Duct-and-rice/yaruo-extension
// @version      1.0.0
// @description  A userscript for Yaruo Cluster
// @author       The Department of Yaruo of Koushinkyo
// @match        http://jbbs.shitaraba.net/bbs/read.cgi/*
// @grant        none
// ==/UserScript==

require('jquery-inview');
var YouTubePlayer = require('youtube-player');
$('body').append($('<div id="yaruo-ext-video"><div id="yaruo-ext-player"></div></div><button id="yaruo-ext-button">option</button>'));
var youtubeRes = new Array();
$('#yaruo-ext-video').attr({
	style:'width:64px;height:36px;z-index:2;position:fixed;bottom:5px;right:5px;'
});
$('#yaruo-ext-button').attr({
	style:'position:fixed;z-index:10;top:5px;right:5px;'
});
$('#yaruo-ext-button').click(function(){
	$('body').prepend($('<div id="yaruo-ext-config"><textarea id="yaruo-ext-config-t"></textarea><button id="yaruo-ext-config-s">保存</button><button id="yaruo-ext-config-c">キャンセル</button></div>'));
	$('#yaruo-ext-button').hide();
	$('#yaruo-ext-config').attr({
		style:'width:50%;height:80%;z-index:3;position:fixed;top:0;bottom:0;left:0;right:0;margin:auto;background-color:#FFF;padding:5px;'
	});
	$('#yaruo-ext-config-c').click(function(){
		$('#yaruo-ext-config').remove();
		$('#yaruo-ext-button').show();
	});
	$('#yaruo-ext-config-s').click(function(){
		localStorage.setItem('conf',$('#yaruo-ext-config-t').val());
		$('#yaruo-ext-config').remove();
		$('#yaruo-ext-button').show();
	});
	$('#yaruo-ext-config-t').attr({
		style:'width:100%;height:90%;resize:none;'
	});
$('#yaruo-ext-config-t').val(localStorage.getItem('conf'));
});

var vid='',sec=0,state,v,s;
var player = YouTubePlayer('yaruo-ext-player',{width:64,height:36,playerVars:{'autoplay':0},});
player.on('stateChange', function(event){
	state = event.data;
});
$('dd:contains("youtube")').each(function(){
	var args = $(this).text().match(/<\s*youtube\s*(\w+)\s*(\d+):(\d+)\s*>/);
	if(args == void 0){
		return true;
	}
	var term = ($(this).prev('dt').children('font').text()===$('dt:first').children('font').text());
	var confCheck = false;
	var confs = localStorage.getItem('conf').split('\n'),i;
	for(i=0;i<confs.length;i++){
		confCheck = (($(this).prev('dt').text()).indexOf(confs[i]) != -1 | confCheck);
	}
	if(term || confCheck){
		$(this).on('inview', function(event, isInView) {
			if (isInView) {
				v = args[1],s = parseInt(args[2]) * 60 + parseInt(args[3]);
				if(state === 2 || v !== vid){
					vid = v;
					sec = s;
					player.loadVideoById(vid,sec);
				}
			}
		});
	}
});
