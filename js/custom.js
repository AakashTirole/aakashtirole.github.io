$(document).ready(function(){

    var value = 'web';    
    $(".filter").not('.'+value).hide('3000');
    $('.filter').filter('.'+value).show('3000');

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        if(value == "all")
        {
            $('.filter').show('1000');
        }
        else
        {
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');            
        }

    });
});
/*************/

$(document).ready(function(){
    /**menuOpen**/
	$('.toggle').click(function() {
        $("body").toggleClass("menuOpen");
        // $("header nav").slideToggle("slow");
    });

    /**show-full-path**/
	$('.work-link').hover(function() {
        $(".view-more-wrok").toggleClass("show-full-path");
    });

    /**show-my work on hover**/
	$('.my-work .project-wraper').hover(function() {
        $(this).toggleClass("show-work-caption");
    });

    /*active links*/
    $('nav li a').filter(function(){
        return this.href === location.href;
      }).addClass('active');

    /**close nav menu when click on link**/
    $('header nav>.main-menu>ul>li>a').click(function() {
        if($('body').hasClass('menuOpen')) {
            $('body').removeClass('menuOpen');
        }
    });
    /**word changing**/
    // (function(){
    //     var words = [
    //         'Graphic Designer',
    //         'Web Designer',
    //         'Freelancer',
    //         'Creative Writer'
    //         ], i = 0;
    //     setInterval(function(){
    //         $('#changingword').fadeOut(function(){
    //             $(this).html(words[i=(i+1)%words.length]).fadeIn();
    //         });
    //     }, 2000);
          
    // })();

    var skills = $('span[id^="changingword"]').hide(0),
    i = 0;
    (function cycle() { 

        skills.eq(i).fadeIn(400)
                .delay(1000)
                .fadeOut(400, cycle);

        i = ++i % skills.length;

    })();  
});

/**loader javascript**/

    var preloader = $('#loader-wrapper');
    var myVar;
    function aakashloader(){
        preloader.css("transition", "all 0.5s");
        preloader.css("visibility", "hidden");
        preloader.css("opacity", "0");
        window.scrollTo(0, 0);
    };
    function loaderfun() {
        myVar = setTimeout(aakashloader, 2000);
    }

/****end****/

$(window).scroll(function(){
    if ($(window).scrollTop() >= 10) {
        $('body').addClass('showHello');
    }
    else {
        $('body').removeClass('showHello');
    }
    /**close nav menu when scroll**/
    if($('body').hasClass('menuOpen')) {
        $('body').removeClass('menuOpen');
    }
    /*********/
    var scroll = $(window).scrollTop();
    if (scroll >= 300) {
        $(".right-social-links").addClass("change-color");
    }
    else{
        $(".right-social-links").removeClass("change-color");
    }
});

/**on loading**/
jQuery(window).load(function () {
    $('body').addClass('on-load-line');
    /**remove showHello class from body if it already applied in body**/
    if($('body').hasClass('showHello')) {
        $('body').removeClass('showHello');
    }
});

// When the user clicks on the button, scroll to the top of the document
function scrollToTop() {
    var position =
        document.body.scrollTop || document.documentElement.scrollTop;
    if (position) {
        window.scrollBy(0, -Math.max(1, Math.floor(position / 10)));
        scrollAnimation = setTimeout("scrollToTop()", 10);
    } else clearTimeout(scrollAnimation);
}

/**dissable inspect element**/

// document.onkeydown = function (e) {
//     if (event.keyCode == 123) {
//         return false;
//     }
//     if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
//         return false;
//     }
//     if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
//         return false;
//     }
//     if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
//         return false;
//     }
//     if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
//         return false;
//     }
// }

/**dissable inspect element**/

$(document).ready(function(){
    /***contact form on focus***/
    $('.contact-page .focus-input').on('focus',function(e){
		$(this).parents('.form-group').toggleClass('in');
	});
	$('.contact-page .focus-input').on('focusout',function(e){
		$(this).parents('.form-group').toggleClass('in');
    });
    /****on keyup****/
    $('.contact-page .focus-input').on('keyup', function(e) {
        var inputValue = this.value;
        if (inputValue == '' || inputValue == null) {
            $(this).parents('.form-group').removeClass('p-text');
        } 
        else {
            $(this).parents('.form-group').addClass('p-text');
        }
    });
    
    /*******validations********/
    $(document).on('click', '.EmailBtn', function(e) {
    e.preventDefault();
    var fname = $('#fname').val();
    var email = $("#email").val();
    var number = $("#number").val();
    var message = $("#message").val();
    var email_pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
    var regex = new RegExp(/^[0][0-9]\d{9}$|^[0-9]\d{9}$/);

    if (fname == '' || fname == null) {
        alert('full name required !');
        return false;
    } else if (email.trim() == '') {
        alert('Enter Your Email Address !');
        return false;
    } else if (!email_pattern.test(email)) {
        alert('Enter Your Valide Email Address !');
        return false;
    } else if (number == '') {
        alert('fill mobile number');
        return false;
    } else if (!number.match(regex)) {
        alert('only 10 digits');
        return false;
    } else if (message == '' || message == null) {
        alert('message required !');
        return false;
    } else {

        $('.EmailBtn').prop('disabled', true);
        $('.EmailBtn').text('Please wait......');

        $.post("query_function.php", {
            fname: fname,
            email: email,
            number: number,
            message: message,
            remark: 1
        }, function(data) {

            $('.EmailBtn').prop('disabled', false);
            $('.EmailBtn').text('Submit');

            if (data.response == 1) {
                alert(data.msg);
                setTimeout(function() {
                    // window.location.href = "index.html";
                    $(".new-from").trigger('reset');
                }, 100);
            } else {
                alert('Your request has been sent successfully.');
            }
        }, "json");
    }
    });
});

$(function(){
    new WOW().init(); 
});

$('.js-tilt').tilt({
    scale: 1.1
})

$(document).ready(function(){   
    $('[title*="000webhost"]').css('display','none');
});

/**carousel**/
$('.slider-portfolio .owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    responsiveClass:true,
    animateOut: 'fadeOut',
    autoplay:true,
    autoplayTimeout:3500,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        500:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    },
});