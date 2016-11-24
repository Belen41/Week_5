function showArtists(response){
	console.log('Success');
	console.log(response);
	var artistArray=response.artists.items
	// debugger;
	$('ul').empty();
	artistArray.forEach(function(theArtist){
		var artistName ='<h2>'+theArtist.name+'</h2>';
		var artistImage='<img src='+theArtist.images[0].url+'>'
		var artistList= '<li>'+artistName+artistImage+'</li>'
		$('.js-artist-list').append(artistList);
	});
};

function handleError(error){
	console.log("Error!!");
	console.log(error.responseText);
};

$(document).on('ready',function(){
	$('.js-search-artist').on('click',function(event){
		event.preventDefault();
		var artistName= $('#artist-name').val();
		$.ajax({
			type:"GET",
			url: "https://api.spotify.com/v1/search?type=artist&query="+artistName,
			success: showArtists,
			error: handleError
		});
	});
});