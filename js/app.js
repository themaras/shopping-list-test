
$(document).ready(function(){

function addItem() {
var text = $('.add-items').val();
$('.ul').append('<img class="trash" src="images/trash.png"><li>'+text+'<button class="gotit">gotit!</button></li>');
$('.add-items').val(''); 
}

$ (function() {
$('.add-button').on('click' , addItem);
});

$('.gotit').click(function(){
$('li:last').css("text-decoration"," line-through");
});

$('.ul').on('click', '.trash', function() {
	$('li:last').remove();
});

});     

//$('.add-items').keydown(function (enter) {
//if (enter.keyCode == 13) {
//text();
//});


//$('.ul').on('click', '.trash', function() {
	//	$(this).closest('li').toggleClass('li');
//	$('li:last').remove();
//});

//$('.trash').on('click', 'li', function(){
  //  $("li:last").parent().remove();
//});