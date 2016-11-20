$(document).on('ready',function(){
	console.log("Document Loaded");
	$( '.js-fadeout' ).click(function() {
  		$("p").fadeOut("slow")
	});
	$( '.js-fadein' ).click(function() {
  		$("p").fadeIn("slow")
	});
	$( '.js-unicorn-mode').click(function(){

	});

	$('#form').submit(function() {
    	if ($.trim($("#email").val()) === "" || $.trim($("#user_name").val()) === "") {
       		alert('you did not fill out one of the fields');
    	return false;
    	}
	});

});
