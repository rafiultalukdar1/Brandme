(function($){
	$(document).ready(function() {	

		// Scroll to Top
		jQuery('.scrolltotop').click(function(){
			jQuery('html').animate({'scrollTop' : '0px'}, 400);
			return false;
		});
		
		jQuery(window).scroll(function(){
			var upto = jQuery(window).scrollTop();
			if(upto > 500) {
				jQuery('.scrolltotop').fadeIn();
			} else {
				jQuery('.scrolltotop').fadeOut();
			}
			if(upto > 150) {
				jQuery(".header-area").addClass("header-fixed");
			}else {
				jQuery(".header-area").removeClass("header-fixed");
			}
		});

		$('.hero-scroll-btn a').on('click', function (e) {
			e.preventDefault();

			var target = $($(this).attr('href'));
			var offset = 100;

			if (target.length) {
				$('html, body').animate({
				scrollTop: target.offset().top - offset
				}, 600);
			}
		});

		//   counter js 

		$('.counter').each(function () {
			var $this = $(this);
			var countTo = $this.attr('data-count');
			
			$({ countNum: $this.text() }).animate(
			  { countNum: countTo },
			  {
				duration: 2000, // animation time in ms
				easing: 'swing',
				step: function () {
				  $this.text(Math.floor(this.countNum));
				},
				complete: function () {
				  $this.text(this.countNum); // final number
				}
			  }
			);
		  });
		

				
		// testimonials slider 

		const swiper = new Swiper('.swiper', {
			spaceBetween: 50,
			loop: true,
			autoplay: true,
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			breakpoints: {
				0: {
				slidesPerView: 1,
				},
				640: {
				slidesPerView: 2,
				},
				1024: {
				slidesPerView: 3,
				},
			},
		});
		
		
		
		// footer accordion 

		function handleAccordion() {
			if ($(window).width() < 768) {
				// Enable accordion
				$('.footer-block-title').off('click').on('click', function () {
					$(this).next('.accordion-content').slideToggle(200);
					$(this).toggleClass('active');
				});
				// Hide contents initially (if needed)
				$('.accordion-content').hide();
			} else {
				// Disable accordion and show all content
				$('.footer-block-title').off('click');
				$('.accordion-content').show();
			}
		}

		// Run on load
		handleAccordion();

		// Run on resize
		$(window).resize(function () {
			handleAccordion();
		});


		// tab js
		$('.tab').click(function(){
		var target = $(this).data('target');
		$('.tab').removeClass('active');
		$(this).addClass('active');
		$('.tab-content.active').fadeOut(200, function(){
			$(this).removeClass('active');
			$(target).fadeIn(200).addClass('active');
		});
		});

		$('.tab-content').not('.active').hide();
		


		// roatate bar slider 	
		$(".text-slider").slick({
			infinite: true,
			variableWidth: true, 
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 0,      
			speed: 4000,
			dots: false,
			cssEase: 'linear',
			arrows: false,
			pauseOnHover: true,
			pauseOnFocus: true,
			draggable: false,
			waitForAnimate: true,
			useTransform: false,
			easing: 'linear',
			lazyLoad: 'progressive',
			swipe: false,
			touchMove: false,
			adaptiveHeight: false,
			accessibility: false,
			respondTo: 'slider',
			responsive: [
					{
						breakpoint: 577,
						settings: {
							speed: 2500,
						},
					}
				],
		});

		
		
	});
})(jQuery);



function initCareersSlider() {
	const $slider = $(".service-block");

	if ($(window).width() < 992) {
		if (!$slider.hasClass('slick-initialized')) {
			$slider.slick({
				infinite: true,
				slidesToShow: 2,
				slidesToScroll: 1,
				autoplay: true,
				autoplaySpeed: 1000,
				speed: 4000,
				dots: false,
				arrows: false,
				responsive: [
					{
						breakpoint: 577,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
							speed: 4000,
						},
					}
				],
			});
		}
	} else {
		if ($slider.hasClass('slick-initialized')) {
			$slider.slick('unslick');
		}
	}

	const $slider2 = $(".feature-slider");

	if ($(window).width() < 992) {
		if (!$slider2.hasClass('slick-initialized')) {
			$slider2.slick({
				infinite: true,
				slidesToShow: 2.5,
				slidesToScroll: 1,
				autoplay: true,
				autoplaySpeed: 0,
				speed: 4000,
				dots: false,
				cssEase: 'linear',
				arrows: false,
				pauseOnHover: true,
				pauseOnFocus: true,
				draggable: false,
				waitForAnimate: true,
				useTransform: false,
				easing: 'linear',
				lazyLoad: 'progressive',
				swipe: false,
				touchMove: false,
				adaptiveHeight: false,
				accessibility: false,
				respondTo: 'slider',
				responsive: [
					{
						breakpoint: 577,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 1,
							cssEase: "linear",
							speed: 4000,
						},
					}
				],
			});
		}
	} else {
		if ($slider2.hasClass('slick-initialized')) {
			$slider2.slick('unslick');
		}
	}


	// branding page offer slider 

	const $offter = $(".offer-slider");

	if ($(window).width() < 768) {
		if (!$offter.hasClass('slick-initialized')) {
			$offter.slick({
				infinite: true,
				slidesToShow: 2,
				slidesToScroll: 1,
				autoplay: true,
				autoplaySpeed: 1000,
				speed: 4000,
				dots: false,
				arrows: false,
				responsive: [
					{
						breakpoint: 577,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
							speed: 4000,
						},
					}
				],
			});
		}
	} else {
		if ($offter.hasClass('slick-initialized')) {
			$offter.slick('unslick');
		}
	}
	

	
}

// Initialize on page load
$(document).ready(function () {
	initCareersSlider();
});

// Re-check on window resize
$(window).on('resize', function () {
	initCareersSlider();
});



//   preloader 
window.paceOptions = {
    ajax: true,
    document: true,
    eventLag: true,
    restartOnPushState: false
};

$(window).on('load', function() {
    setTimeout(function() {
      if (typeof Pace !== 'undefined' && !Pace.done) {
        Pace.stop();
      }
    }, 300);
});

const img = new Image();
img.src = "images/preloader-img.gif";


// Nav Active
const currentPath = location.pathname.split("/").pop();

document.querySelectorAll('.nav-links').forEach(link => {
  const linkPath = link.getAttribute("href");
  if (linkPath === currentPath) {
    link.classList.add("active");
    link.style.color = getComputedStyle(document.documentElement)
      .getPropertyValue('--primary-color');
  }
});


document.addEventListener("DOMContentLoaded", function () {
  let currentPath = location.pathname.split("/").pop();
  if (currentPath === "") {
    currentPath = "index.html";
  }
  document.querySelectorAll('.list-unstyled .nav-link').forEach(link => {
    let linkPath = link.getAttribute("href");
    if (linkPath === currentPath) {
      link.classList.add("active");
    }
  });
});



new WOW().init();
