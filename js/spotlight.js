$(document).on('mousemove', function(e){
    $('#mask-overlay').css({
       left:  e.pageX - 60,
       top:   e.pageY - 60
    });
});