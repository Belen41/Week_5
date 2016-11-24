function showArtists(response){
	console.log('Success');
	console.log(response);
	var artistsArray = response;
	$('ul').empty();
	artistsArray.forEach(function(theArtist){
		var html='<h2>'+theArtist.name'</h2>+theArtist.image'</li>'	
	$('ul').append(html);
	});
};

$(document).on('ready',function(){
	$('.js-artist-list').on('click',function(){
		if($('ul').children().length>0){
			$('ul').toggle();
		}
		$.ajax({
			type: "GET",
			url: "https://api.spotify.com/v1/search?type=artist&query="+,
			success: showArtists,
			error:handleError
		})
	});
	$('.js-search-artist').on('click',function(event){
		event.preventDefault();
		var searchArtist= {
			name: $('#artist-name').val(),
		};
		console.log(newCharacter);
		$.ajax({
			type:"POST",
			url: "https://ironhack-characters.herokuapp.com/characters",
			data:searchArtist,
			success: updateList,
			error: handleError,
		})
	});
})