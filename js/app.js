$(document).ready(function () {
    $('.add-button').click(function () {
        var input = $('.add-items').val();
        if ($('.add-items').val().length === 0) {
            alert('Put Something Here!');
            return false;
        }
        $('.ul').append('<li><button class="delete">Delete</button>' + input + '<button class="gotit">gotit!</button></li>');
    });


$('.add-items').keypress(function (e) {
        if (e.which == 13) {
            if ($('.add-items').val().length === 0) {
            alert('Put Something Here!');
            return false;
            }
            var input = $('.add-items').val();
            $('.ul').append('<li><button class="delete">Delete</button>' + input + '<button class="gotit">gotit!</button></li>');
        }
    });

$('.deleteall').click(function () {
    $("ul").empty();
    });
    
 
$('ul').on('click','.delete:button', function() {
    $(this).closest('li').remove();
    });
    
$('ul').on('click','.gotit:button', function() {
    $(this).closest('li').toggleClass("stroked");
    });
 
 });


