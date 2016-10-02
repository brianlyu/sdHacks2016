var cache = new LastFMCache();
 
var lastfm = new LastFM({
    apiKey    : 'aadd25f46d07650d21eec775ced5b388',
    apiSecret : '760b19a991665a862660d784478aba6e',
    cache     : cache
});

function doThis(){
	lastfm.track.search({
    limit: 8,
    track: document.getElementById('songBar').value,
},
{
    success: function(data) {
        var list = '';
		for (var i = 0; i < data.results.trackmatches.track.length; i++) {
    		list += '<li>' + data.results.trackmatches.track[i].name + ', by ' + data.results.trackmatches.track[i].artist + '</li>';
		}
		var myList =document.getElementById('songResults');
		myList.innerHTML = list;
    },
    error: function(data) {
        alert(data.error + " " + data.message);
    }
});
};