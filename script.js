//nav affix
$(document).on('scroll', function() {
    if ($(window).scrollTop() >= 132) {
        $('nav').removeClass('container-fluid').addClass('container navbar-fixed-top');
    } else {
        $('nav').removeClass('navbar-fixed-top');
    }
});

//section two paragraph
$('#section-two .btn').click(function(event) {
    $('.actively').removeClass('actively');
    $(this).addClass('actively');
    var index = $('.md-36').index(event.target);
    var target = $('.content');
    var width = $('.paragraph').outerWidth();
    var position = parseInt($('.paragraph:eq('+index+')').css('left'));

    if (index === 0) {
        position = 0;
    } else if (index === 1) {
        position = (position+width)*1.1;
    } else {
        position = (position+width*2)*1.1;
    }
    $(target).animate({ left: -position}, 'slow');
});

//porfolio section
//Show more about each project
$('.more').click(function(events) {
   var target = $(this).parent().next('.mask');

   $(target).animate({ bottom: 0, opacity: 1}, 'slow');
});

//close show more
$('a.btn.close').on('click', function() {
    var target = $(this).closest('.mask');
    var position = parseInt($(target).css('height'));

    $(target).animate({ bottom: -position, opacity: 0}, 'slow');
});


//next and prev
$('#next').click(function() {
    var target = $('.section')
    var left = parseInt($(target).last().css('left'));
    var distance = parseInt($(target).css('width')) ;
    var length = distance* (target.length - 1 );

    //for cards
    console.log(left);
    if ($(window).width() <= 768) {
        if (left > -length) {
            $(target).animate({ left: left-distance}, 'slow');
        }
    } else {
        if (left >= -698) {
            $(target).animate({ left: left-distance}, 'slow');
        }
    }
    //for dots
    var active = $('.active-dot');
    var dots = $('.dot:eq('+active.index()+')');
    var nextDots = $(active).last().next();

    if (active.index() <3) {
        dots.removeClass('active-dot');
        nextDots.addClass('active-dot');
    }
})

$('#prev').click(function() {
    var target = $('.section')
    var left = parseInt($(target[0]).css('left'));
    var distance = parseInt($(target).css('width'));
    
    //for cards
    if(left < 0) {
        $(target).animate({ left: left+distance}, 'slow');
    }
    //for dots
    var active = $('.active-dot');
    var dots = $(active).last();
    var prevDots = $(active).first().prev();

    if (active.index() > 0) {
        dots.removeClass('active-dot');
        prevDots.addClass('active-dot');
    }
})

//tooltip
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
    smoothScroll(); 
});

//smooth scrolling
function smoothScroll() {
    
    $('a.page-scroll').on('click', function() {
        console.log("OK");
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

//page animation

//monitoring scroll position
$('.selfie, .icons, .contact-me').hide();
$('.words').hide().fadeIn(3000);

var icons = $(".icons-container").children();
icons.css('left',-900);


$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    var section1 = parseInt($("#section-one").css("height"));
    var section2 = section1 + parseInt($("#section-two").css("height"));
    var section3 = section2 + parseInt($("#section-three").css("height"));
    var section4 = section3 + parseInt($("#section-four").css("height"));

    if (scroll >= section1/2) {
        $('.selfie, .icons').fadeIn(2000);
    } 
    if (scroll >= section3) {
        $('.contact-me').fadeIn(3000);
        icons.each(function(index) {
            $(this).animate({'left': 0}, {
                step: function(now,fx) {
                  $(this).css('-webkit-transform','rotate('+now+'deg)'); 
                },
                duration:3000
            }, 4000);
        })
    }
});
