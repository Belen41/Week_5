function updateList(newCharacter){
	console.log('Success');
	console.log(newCharacter);
	var html='<li>'+newCharacter.name+'</li>'
	$('ul').append(html);
}

function handleError(error){
	console.log("Error!!");
	console.log(error.responseText);
}

function handleError(error){
	console.log("Error!!");
	console.log(error.responseText);
};

function showCharacters(response){
	console.log('Success');
	console.log(response);
	var charactersArray = response;
	$('ul').empty();
	charactersArray.forEach(function(theCharacter){
		var html='<li>'+theCharacter.name+'</li>'	
	$('ul').append(html);
	});
};
$(document).on('ready',function(){
	$('.js-character-list').on('click',function(){
		if($('ul').children().length>0){
			$('ul').toggle();
		}
		$.ajax({
			type: "GET",
			url: "https://ironhack-characters.herokuapp.com/characters",
			success: showCharacters,
			error:handleError
		})
	});

	$('.js-add-character').on('click',function(event){
		event.preventDefault();
		var newCharacter= {
			name: $('#character-name').val(),
			occupation:$('#character-occupation').val(),
			weapon: $('#character-weapon').val()
		};
		console.log(newCharacter);
		$.ajax({
			type:"POST",
			url: "https://ironhack-characters.herokuapp.com/characters",
			data:newCharacter,
			success: updateList,
			error: handleError,
		})
	});
})
