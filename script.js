require('jquery-inview');
var YouTubePlayer = require('youtube-player');
$('body').append($('<div id="yaruo-ext-video"><div id="yaruo-ext-player"></div></div>'))
var youtubeRes = new Array();
$('#yaruo-ext-video').attr({
	style:'width:64px;height:36px;z-index:2;position:fixed;bottom:5px;right:5px;'
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
	var term=$(this).prev('dt').children('font').text()===$('dt:first').children('font').text()
	if(term){
		$(this).on('inview', function(event, isInView) {
			v = args[1],s = parseInt(args[2]) * 60 + parseInt(args[3]);
			if (isInView) {
				if(state === 2 || (v !== vid && s !== sec)){
					vid = v;
					sec = s;
					player.loadVideoById(vid,sec);
					player.getDuration().then(function(a){
						console.log(a);
					});
				}
				console.log(vid,sec,v,s);
			}
		});
	}
});
