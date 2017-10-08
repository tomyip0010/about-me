function photoControl() {
    var firstChild = $('.image-showcase img:first-child');
    var lastChild = $('.image-showcase img:last-child');

    $('#next').click(function() {
        var activeOne = $('img.show-active');
        var index = activeOne.index();
        var nextOne;
        if (activeOne.is(lastChild)) {
            nextOne = firstChild;
            updateDot(0);
        } else {
            nextOne = $('.show-active').next();
            updateDot(index+1);
        };
        activeOne.removeClass('show-active');
        nextOne.addClass('show-active');
    });

    $('#prev').click(function() {
        var activeOne = $('img.show-active');
        var index = activeOne.index();
        var prevOne;
        if (activeOne.is(firstChild)) {
            prevOne = lastChild;
        } else {
            prevOne = $('.show-active').prev();
        }
        activeOne.removeClass('show-active');
        prevOne.addClass('show-active');
        updateDot(index-1);
    });

    $('.dot').click(function() {
        var activeOne = $('img.show-active');
        var index = $(this).index();
        var showOne = $('.image-showcase img:eq('+ index +')');
       
        activeOne.removeClass('show-active');
        showOne.addClass('show-active');
        updateDot(index);
    });

    function updateDot(index) {
        var activeDot = $('.active-dot');
        var showDot = $('.dots-tab span:eq(' + index +')');
        console.log(activeDot, showDot, index);
        activeDot.removeClass('active-dot');
        showDot.addClass('active-dot');
    }
}

function smoothScroll() {

    $('.link a').on('click', function() {
    // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            
            // Prevent default anchor click behavior
            event.preventDefault();
        
            // Store hash
            var hash = this.hash;
        
            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
            scrollTop: $(hash).offset().top
            }, 900, function(){
        
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
            });
        } // End if
    });
}


$(document).ready(function() {
    $('.word').typeIt({
        strings: ['Hi, I am <strong>TOM</strong>.', 'I am a <strong>day dreamer</strong>...'],
        speed: 140,
        autoStart: true
    }).tiPause(500)
    .tiDelete(14)
    .tiType('<strong>Full Stack Developer</strong> with <strong>Dreams!</strong>');

    photoControl();
    smoothScroll();

    $(window).scroll(function() {
        $(".slideanim").each(function(){
            var pos = $(this).offset().top;
        
            var winTop = $(window).scrollTop();
            if (pos < winTop + 600) {
            $(this).addClass("slide");
            }
        });
    });
})

