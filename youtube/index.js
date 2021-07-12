'user strict';

var tag = document.createElement('script');
tag.src="https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag,firstScriptTag);


var youtubeId = '8GQZuzIdeQQ';
function onYouTubeIframeAPIReady() {
  document.getElementById('js-player').innerHTML = '<img id="js-thum" src="http://i.ytimg.com/vi/' + youtubeId + '/sddefault.jpg">';

  document.getElementById('js-thum').addEventListener('click',function(){
		var player = new YT.Player('js-thum', {
			videoId: youtubeId,
			width: '768',
			height: '432',
			events: {
				'onReady': onPlayerReady
      }
      });
    });
  }

  function onPlayerReady(event) {
	event.target.playVideo();
}
