// Scrolling Effect

        $(window).on("scroll", function() {
            if ($(window).scrollTop()) {
                $('#navigations').addClass('black');
            } else {
                $('#navigations').removeClass('black');
            }
        })
        $(window).on("scroll", function() {
            if ($(window).scrollTop()) {
                $('.btn').addClass('black');
            } else {
                $('.btn').removeClass('black');
            }
        })


        // Scroll To Top

        $(document).ready(function() {
            // show hide button on scroll
            $(window).scroll(function() {
                if ($(this).scrollTop() > 200) {
                    $('.scrollToTop').fadeIn();
                } else {
                    $('.scrollToTop').fadeOut();
                }
            });

            // smooth scrolling to top
            $('.scrollToTop').click(function() {
                $('html,body').animate({
                    scrollTop: 0
                })
            })
        });

        // ----------------------Smooth Scroll Navigation
        // Select all links with hashes
        $('a[href*="#"]')
            // Remove links that don't actually link to anything
            .not('[href="#"]')
            .not('[href="#0"]')
            .click(function(event) {
                // On-page links
                if (
                    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                    location.hostname == this.hostname
                ) {
                    // Figure out element to scroll to
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    // Does a scroll target exist?
                    if (target.length) {
                        // Only prevent default if animation is actually gonna happen
                        event.preventDefault();
                        $('html, body').animate({
                            scrollTop: target.offset().top
                        }, 1000, function() {
                            // Callback after animation
                            // Must change focus!
                            var $target = $(target);
                            $target.focus();
                            if ($target.is(":focus")) { // Checking if the target was focused
                                return false;
                            } else {
                                $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                                $target.focus(); // Set focus again
                            };
                        });
                    }
                }
            });

// Menu Tabs

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();



// Nav resposinve 

$(document).ready(function () {
    $(".btn").click(function() {
        $("nav ul").slideToggle(500);
    })
})

//$(document).ready(function () {
//    $('.btn').click(function() {
//  $('nav ul').slideToggle(250, function() {
//    $('nav .socials').toggleClass('flex', $(this).is(':visible'));
//  });
//});
//})






