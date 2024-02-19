//Burger
function burgerMenu(selector) {
	let menu = $(selector);
	let button = menu.find('.burger-menu_button', '.burger-menu_lines');
	let links = menu.find('.burger-menu_link');
	let overlay = menu.find('.burger-menu_overlay');
	
	button.on('click', (e) => {
	  e.preventDefault();
	  toggleMenu();
	});
	
	links.on('click', () => toggleMenu());
	overlay.on('click', () => toggleMenu());
	
	function toggleMenu(){
	  menu.toggleClass('burger-menu_active');
	  
	  if (menu.hasClass('burger-menu_active')) {
		$('body').css('overlow', 'hidden');
	  } else {
		$('body').css('overlow', 'visible');
	  }
	}
  }
  
  burgerMenu('.burger-menu');

//Acordeon
$(document).ready(function () {
	$('.block__title').click(function (event) {
		if ($('.block').hasClass('one')) {
			// $('.block__title').not($(this)).removeClass('active');
			// $('.block__text').not($(this).next()).slideUp(300);
		}
		$(this).toggleClass('active').next().slideToggle(300);
	});

});
// FORM_TG
const TOKEN = "6955013348:AAEfj7LVNUQt9F7W1rn5YITf8MK_nS1JL6I";
const CHAT_ID = "-1002053483453";
const URI_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;
document.getElementById('tg').addEventListener('submit', function(e) {
    e.preventDefault();

    let message = `<b>Заявка с сайта!</b>\n`;
    message += `<b>Отправитель: </b> ${ this.user_name.value }\n`;
    message += `<b>Почта: </b> ${ this.user_phone.value }`;

	axios.post(URI_API, {
		chat_id: CHAT_ID,
		parse_mode: 'html',
		text: message
	})
});

// SLIDER
$('.slider__right').slick({
	infinite: true,
	arrows: true,
	fade: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	speed: 1000,
	asNavFor: ".slider__left",
	responsive: [
		{
			breakpoint: 775,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				adaptiveHeight: true,
				arrows: false
			}
		},
	],
});
$('.slider__left').slick({
	infinite: true,
	arrows: false,
	fade: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	speed: 1000,
	asNavFor: ".slider__right",
	responsive: [
		{
			breakpoint: 767,
			settings: {
				arrows: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				adaptiveHeight: true,
			}
		},
	],
});

let loadMoreBtn = document.querySelector('#load-more-btn');
let currentItem = 7;

loadMoreBtn.onclick = () => {
    let boxes = [...document.querySelectorAll('.blogers__content .blogers__box')];

    for (var i = currentItem; i < currentItem + 8; i++) {
        boxes[i].style.display = "inline-block";
    }

    currentItem += 7;

    if (currentItem >= boxes.length) {
        loadMoreBtn.style.display = "none"
    }

}

gsap.registerPlugin(ScrollTrigger);

 
const tlloader = gsap.timeline()
// Loader



tlloader
.set('.loader__item', { yPercent: -100})
.set('.loader__title', {opacity: 0})
.to('.loader__item',{
	delay: 0.7,
	yPercent: 0,
	duration: 0.5,
	stagger: 0.25,
})
.to('.loader__item', {
	yPercent: 100,
	duration: 0.5,
	stagger: 0.25,
})
.to('.loader__title', {
	opacity: 1,
	duration: 1,
	scale: 1.2,
})
.set('.loader__item', {
	yPercent: -100
})
.to('.loader__title',{
	opacity: 0,
	duration: 1,
	scale: 0.8
})
.to('.loader', {
	yPercent: -100,
	duration: 1
}, 
'-=0.2',)




//LAPTOP
// const laptopScreen = window.matchMedia('(min-width: 992px;)')
// if(laptopScreen.matches) {
	
// }

gsap.to(".gsap__video", {
	scrollTrigger: ".gsap__video",
	duration: 1,
	delay: 1,
	stagger: 0.1,
	x: 0,
	opacity: 1
});
// gsap.to(".number",{
// 		scrollTrigger: {
// 			trigger: '.number',
// 			start: 'top top',
// 			scrub: true
// 		},
// 		css: {
// 			backgroundColor: 'red',
// 		}
// });
gsap.to(".intro__left",{
			scrollTrigger: {
				trigger: '.intro__left',
				start: 'top top',
				scrub: true
			},
			css: {
				yPercent: -30
			}
	});

gsap.to(".intro__img",{
			scrollTrigger: {
				trigger: '.intro__img',
				start: '30px top',
				scrub: true
			},
			css: {
				scale: 1.4
			}
	});
	
	gsap.to(".mobile__img",{
		
			scrollTrigger: {
				trigger: '.mobile',
				start: '-250px top',
				scrub: true
			},
			css: {
				scale: 1.45
			}
	});
	
	gsap.to(".counters", {
		scrollTrigger: ".counters",
		delay: 1,
		duration: 1,
		stagger: 0.2,
		x: 0,
		opacity: 1
	});

gsap.to(".mobile__trigger", {
		scrollTrigger: ".mobile__img",
		duration: 0.5,
		delay: 1,
		stagger: 0.2,
		y: 0,
		opacity: 1
	});
gsap.to(".gsap__mobile-text1",{		
		scrollTrigger: {
			trigger: '.mobile__border',
			start: '-750px top',
			scrub: true
		},
		css: {
			yPercent: -300
		}
});
gsap.to(".gsap__mobile-text2",{		
	scrollTrigger: {
		trigger: '.mobile__border',
		start: '-650px top',
		scrub: true
	},
	css: {
		yPercent: -300
	}
});
gsap.to(".gsap__mobile-text3",{		
	scrollTrigger: {
		trigger: '.mobile__border',
		start: '-450px top',
		scrub: true,
	},
	css: {
		yPercent: -300
	}
});
gsap.to(".gsap__done", {
	scrollTrigger: ".gsap__done",
	duration: 1,
	delay: 1,
	opacity: 1
});
gsap.to(".gsap__video-img", {
	scrollTrigger: ".gsap__video-img",
	duration: 1,
	opacity: 1,
	scale: 1
});
gsap.to(".gsap__arrow", {
	scrollTrigger: ".gsap__arrow",
	duration: 1.2,
	opacity: 1,
	x: 0
});
gsap.to(".gsap__service", {
	scrollTrigger: ".gsap__service",
	duration: 1,
	stagger: 0.15,
	scale: 1,
	opacity: 1
});
gsap.to(".gsap__accordeon", {
	scrollTrigger: ".gsap__accordeon",
	duration: 1,
	delay: 0.2,	
	stagger: 0.2,
	opacity: 1
});
gsap.to(".gsap__mark", {
	scrollTrigger: ".gsap__mark",
	duration: 40,
	x: -2000,
	repeat: -1
});
gsap.to(".gsap__slider", {
	scrollTrigger: ".gsap__slider",
	duration: 1,
	delay: 1,
	x: 0,
	opacity: 1
});
gsap.to(".gsap__slider-right", {
	scrollTrigger: ".gsap__slider-right",
	duration: 1,
	delay: 1,
	x: 0,
	opacity: 1
});
gsap.to(".gsap__blog", {
	scrollTrigger: ".gsap__blog",
	duration: 1,
	stagger: 0.1,
	scale: 1,
	opacity: 1
});
gsap.to(".gsap__blogers", {
	scrollTrigger: ".gsap__blogers",
	duration: 1,
	stagger: 0.1,
	scale: 1,
	opacity: 1
});
gsap.to(".gsap__blogers-btn", {
	scrollTrigger: ".gsap__blogers",
	duration: 1.5,
	opacity: 1,
	scale: 1,

});

gsap.to(".gsap__form", {
	scrollTrigger: ".gsap__form",
	duration: 1,
	stagger: 0.2,
	scale: 1,
	opacity: 1
});
gsap.to(".gsap__footer", {
	scrollTrigger: ".gsap__footer",
	duration: 1,
	stagger: 0.2,
	scale: 1,
	opacity: 1
});

		


