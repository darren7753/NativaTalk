// NAVBAR
var toggle_btn;
var big_wrapper;
var hamburger_menu;

function declare() {
  toggle_btn = document.querySelector(".toggle-btn");
  big_wrapper = document.querySelector(".big-wrapper");
  hamburger_menu = document.querySelector(".hamburger-menu");
}

const main = document.querySelector("main");

declare();

let dark = false;

function toggleAnimation() {
  // Clone the wrapper
  dark = !dark;
  let clone = big_wrapper.cloneNode(true);
  if (dark) {
    clone.classList.remove("light");
    clone.classList.add("dark");
  } else {
    clone.classList.remove("dark");
    clone.classList.add("light");
  }
  clone.classList.add("copy");
  main.appendChild(clone);

  document.body.classList.add("stop-scrolling");

  clone.addEventListener("animationend", () => {
    document.body.classList.remove("stop-scrolling");
    big_wrapper.remove();
    clone.classList.remove("copy");
    // Reset Variables
    declare();
    events();
  });
}

function events() {
  toggle_btn.addEventListener("click", toggleAnimation);
  hamburger_menu.addEventListener("click", () => {
    big_wrapper.classList.toggle("active");
  });
}

events();

// Sticky Navbar
window.addEventListener("scroll", function() {
  var header = this.document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
})

// Smooth Scrolling
$('.links a').on('click', function (e) {
  if (this.hash !== '') {
    e.preventDefault();

    const hash = this.hash;

    $('html, body')
      .animate({
        scrollTop: $(hash).offset().top
      },800);
  }
});

$('.cta a').on('click', function (e) {
  if (this.hash !== '') {
    e.preventDefault();

    const hash = this.hash;

    $('html, body')
      .animate({
        scrollTop: $(hash).offset().top
      },800);
  }
});
// NAVBAR

// LOG IN
const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
// const loginLink = document.querySelector("form .login-link a");
signupBtn.onclick = (()=>{
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
});
loginBtn.onclick = (()=>{
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
});
signupLink.onclick = (()=>{
  signupBtn.click();
  return false;
});
// loginLink.onclick = (()=>{
//   loginBtn.click();
//   return false;
// });

function toggle() {
  var blur = document.getElementById('blur');
  blur.classList.toggle('show');
  var popup = document.getElementById('popup');
  popup.classList.toggle('show');
  // var popup_contact_us = document.getElementById('popup-contact-us');
  // popup_contact_us.classList.toggle('muncul');
}

function toggle2() {
  var blur = document.getElementById('blur');
  blur.classList.toggle('show');
  var popup_contact_us = document.getElementById('popup-contact-us');
  popup_contact_us.classList.toggle('show');
}
// LOG IN

// ALASAN
(function( $ ){
  "use strict";

  $.fn.counterUp = function( options ) {

    // Defaults
    var settings = $.extend({
        'time': 400,
        'delay': 10
    }, options);

    return this.each(function(){

        // Store the object
        var $this = $(this);
        var $settings = settings;
        var $originalText = $this.text();

        var counterUpper = function() {
            var nums = [];
            var divisions = $settings.time / $settings.delay;
            var num = $originalText;
            var isComma = /[0-9]+,[0-9]+/.test(num);
            num = num.replace(/,/g, '');
            var isInt = /^[0-9]+$/.test(num);
            var isFloat = /^[0-9]+\.[0-9]+$/.test(num);
            var decimalPlaces = isFloat ? (num.split('.')[1] || []).length : 0;

            // Generate list of incremental numbers to display
            for (var i = divisions; i >= 1; i--) {

                // Preserve as int if input was int
                var newNum = parseInt(num / divisions * i);

                // Preserve float if input was float
                if (isFloat) {
                    newNum = parseFloat(num / divisions * i).toFixed(decimalPlaces);
                }

                // Preserve commas if input had commas
                if (isComma) {
                    while (/(\d+)(\d{3})/.test(newNum.toString())) {
                        newNum = newNum.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
                    }
                }

                nums.unshift(newNum);
            }

            $this.data('counterup-nums', nums);
            $this.text('0');

            // Updates the number until we're done
            var f = function() {
                $this.text($this.data('counterup-nums').shift());
                if ($this.data('counterup-nums').length) {
                    setTimeout($this.data('counterup-func'), $settings.delay);
                } else {
                    delete $this.data('counterup-nums');
                    $this.data('counterup-nums', null);
                    $this.data('counterup-func', null);
                }
            };
            $this.data('counterup-func', f);

            // Start the count up
            setTimeout($this.data('counterup-func'), $settings.delay);
        };

        // Perform counts when the element gets into view
        $this.waypoint(counterUpper, { offset: '100%', triggerOnce: true });
    });

  };

})( jQuery );

$(document).ready(function(){
  $('.counter').counterUp({
    // delay: 10,
    // time: 1200,
    delay: 30,
    time: 1200,
});
})
// ALASAN

// PAYMENT
// var Form1 = document.getElementById("Form1");
// var Form2 = document.getElementById("Form2");
// var Form3 = document.getElementById("Form3");

// var Next1 = document.getElementById("Next1");
// var Next2 = document.getElementById("Next2");
// var Back1 = document.getElementById("Back1");
// var Back2 = document.getElementById("Back2");

// Next1.onclick = function() {
//   Form1.style.left = "-450px";
//   Form2.style.left = "40px";
// }
// PAYMENT

// FAQ
$(document).ready(function() {
  $(".kartu-header").click(function() {
    // Self-clicking close
    if($(this).next(".kartu-body").hasClass("active")) {
      $(this).next(".kartu-body").removeClass("active").slideUp()
      $(this).children("span").removeClass("fa-minus").addClass("fa-plus")
    }
    else {
      $(".kartu .kartu-body").removeClass("active").slideUp()
      $(".kartu .kartu-header span").removeClass("fa-minus").addClass("fa-plus");
      $(this).next(".kartu-body").addClass("active").slideDown()
      $(this).children("span").removeClass("fa-plus").addClass("fa-minus")
    }
  })
})
// FAQ

// REVIEW
function initParadoxWay() {
  "use strict";

  if ($(".testimonials-carousel").length > 0) {
      var j2 = new Swiper(".testimonials-carousel .swiper-container", {
          preloadImages: false,
          slidesPerView: 1,
          spaceBetween: 20,
          loop: true,
          grabCursor: true,
          mousewheel: false,
          centeredSlides: true,
          pagination: {
              el: '.tc-pagination',
              clickable: true,
              dynamicBullets: true,
          },
          navigation: {
              nextEl: '.listing-carousel-button-next',
              prevEl: '.listing-carousel-button-prev',
          },
          breakpoints: {
              1024: {
                  slidesPerView: 3,
              },
          }
      });
  }

  setInterval(function () {
      var size = randomValue(sArray);
      $('.bubbles').append('<div class="individual-bubble" style="left: ' + randomValue(bArray) + 'px; width: ' + size + 'px; height:' + size + 'px;"></div>');
      $('.individual-bubble').animate({
          'bottom': '100%',
          'opacity': '-=0.7'
      }, 4000, function () {
          $(this).remove()
      });
  }, 350);
}

$(document).ready(function () {
  initParadoxWay();
});
// REVIEW

// LEVEL
$(".step").click( function() {
  $(this).addClass("active").prevAll().addClass("active");
  $(this).nextAll().removeClass("active");
});

$(".step01").click( function() {
  $("#line-progress").css("width", "3%");
  $(".discovery").addClass("active").siblings().removeClass("active");
});

$(".step02").click( function() {
  $("#line-progress").css("width", "25%");
  $(".strategy").addClass("active").siblings().removeClass("active");
});

$(".step03").click( function() {
  $("#line-progress").css("width", "50%");
  $(".creative").addClass("active").siblings().removeClass("active");
});

$(".step04").click( function() {
  $("#line-progress").css("width", "75%");
  $(".production").addClass("active").siblings().removeClass("active");
});

$(".step05").click( function() {
  $("#line-progress").css("width", "100%");
  $(".analysis").addClass("active").siblings().removeClass("active");
});
// LEVEL