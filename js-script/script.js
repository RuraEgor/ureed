'use strict';

//----- VARRIAL GLOBAL ----
let slJobCountSl = 3;
let slJobViewSl = 4;

function sliderJob(step = 1, numbInRow = 1) {
	
	const nameElem = '#slider-job-type';
	
	const $elem = $(nameElem);
	const $slManage = $('.slider__manag_job-type');
	
  const $blSlideNubm = $('.slider__manag_numb-js_job');
  const $blSlideCount = $('.slider__count-js_job');

  const $arrowSlLeft = $('.js-sl-arrow-lf_job');
  const $arrowSlRight = $('.js-sl-arrow-rt_job');

	const countElem = $elem.contents('.slider__item').length;
	const paramEasing = 'spring(1, 45, 11, 2)';
	
	let elNumb = 0;
	let shiftWidth = 0;
	
	$elem.attr('data-cunt', countElem);
	$blSlideCount.text(countElem);
	$elem.attr('data-numb', 0);

	$arrowSlRight.on('click', SliderMoveRight);
	$arrowSlLeft.on('click', SliderMoveLeft);
	
	$elem.swipe({
		swipeStatus: function(event, phase, direction) {
			if (phase=="end"){
				if (direction == 'left') {
					SliderMoveRight();
				}
				if (direction == 'right') {
					SliderMoveLeft();
				}
			}},
		triggerOnTouchEnd:false,
		threshold: 20
	});
	
	function SliderMoveRight() {
		step = slJobCountSl;
		numbInRow = slJobViewSl;
		
		const elWidth = $elem.contents('.slider__item').innerWidth();
		let leftElem = countElem - elNumb;
		
		$slManage.find('.slider__manag-arrow').removeClass('disable');
		
		if (leftElem == 0) {
			$(this).addClass('disable');
			return false;
		}
		
		let unFullStep = leftElem - numbInRow;
		
		if ( unFullStep <= step) {
			shiftWidth = (elNumb + unFullStep) * elWidth;
			elNumb += unFullStep;
			$elem.attr('data-numb', elNumb);
			$blSlideNubm.text(elNumb + 1);
			anime({
				targets: nameElem,
				translateX: -shiftWidth,
				easing: paramEasing
			});
			
			$(this).addClass('disable');
			
			return false;
		}
		
		if (leftElem > step) {
			shiftWidth = (elNumb + step) * elWidth;
			elNumb += step;
			$elem.attr('data-numb', elNumb);
			$blSlideNubm.text(elNumb + 1);
			anime({
				targets: nameElem,
				translateX: -shiftWidth,
				easing: paramEasing
			});
			
			return false;
		}
	}
	
	
	function SliderMoveLeft() {
		
		step = slJobCountSl;
		numbInRow = slJobViewSl;
		
		const elWidth = $elem.contents('.slider__item').innerWidth();
		$slManage.find('.slider__manag-arrow').removeClass('disable');
		
		if (elNumb == 0) {
			$(this).addClass('disable');
			return false;
		}
		
		let unFullStep = elNumb - step;
		
		if ( unFullStep <= 0) {
			elNumb = 0;
			$elem.attr('data-numb', elNumb);
			$blSlideNubm.text(1);
			anime({
				targets: nameElem,
				translateX: 0,
				easing: paramEasing
			});
			
			$(this).addClass('disable');
			
			return false;
		}
		
		if ( unFullStep < step) {
			shiftWidth = unFullStep * elWidth;
			elNumb = unFullStep;
			$elem.attr('data-numb', elNumb);
			$blSlideNubm.text(elNumb + 1);
			anime({
				targets: nameElem,
				translateX: -shiftWidth,
				easing: paramEasing
			});
			
			return false;
		}
		
		if (elNumb > step) {
			shiftWidth = (elNumb - step) * elWidth;
			elNumb -= step;
			$elem.attr('data-numb', elNumb);
			$blSlideNubm.text(elNumb + 1);
			anime({
				targets: nameElem,
				translateX: -shiftWidth,
				easing: paramEasing
			});
			
			return false;
		}
	}
}

//=======
function sliderEmployers(step = 1, numbInRow = 1) {
	
	const nameElem = '#slider-employers';
	
	const $elem = $(nameElem);
	const $slManage = $('.slider__manag_job-type');
	
	const $blSlideNubm = $('.slider__manag_numb-js_job');
	const $blSlideCount = $('.slider__count-js_job');
	
	const $arrowSlLeft = $('.js-sl-arrow-lf_job');
	const $arrowSlRight = $('.js-sl-arrow-rt_job');
	
	const countElem = $elem.contents('.slider__item').length;
	const paramEasing = 'spring(1, 45, 11, 2)';
	
	let elNumb = 0;
	let shiftWidth = 0;
	
	$elem.attr('data-cunt', countElem);
	$blSlideCount.text(countElem);
	$elem.attr('data-numb', 0);
	
	$arrowSlRight.on('click', SliderMoveRight);
	$arrowSlLeft.on('click', SliderMoveLeft);
	
	$elem.swipe({
		swipeStatus: function(event, phase, direction) {
			if (phase=="end"){
				if (direction == 'left') {
					SliderMoveRight();
				}
				if (direction == 'right') {
					SliderMoveLeft();
				}
			}},
		triggerOnTouchEnd:false,
		threshold: 20
	});
	
	function SliderMoveRight() {
		step = slJobCountSl;
		numbInRow = slJobViewSl;
		
		const elWidth = $elem.contents('.slider__item').innerWidth();
		let leftElem = countElem - elNumb;
		
		$slManage.find('.slider__manag-arrow').removeClass('disable');
		
		if (leftElem == 0) {
			$(this).addClass('disable');
			return false;
		}
		
		let unFullStep = leftElem - numbInRow;
		
		if ( unFullStep <= step) {
			shiftWidth = (elNumb + unFullStep) * elWidth;
			elNumb += unFullStep;
			$elem.attr('data-numb', elNumb);
			$blSlideNubm.text(elNumb + 1);
			anime({
				targets: nameElem,
				translateX: -shiftWidth,
				easing: paramEasing
			});
			
			$(this).addClass('disable');
			
			return false;
		}
		
		if (leftElem > step) {
			shiftWidth = (elNumb + step) * elWidth;
			elNumb += step;
			$elem.attr('data-numb', elNumb);
			$blSlideNubm.text(elNumb + 1);
			anime({
				targets: nameElem,
				translateX: -shiftWidth,
				easing: paramEasing
			});
			
			return false;
		}
	}
	
	
	function SliderMoveLeft() {
		
		step = slJobCountSl;
		numbInRow = slJobViewSl;
		
		const elWidth = $elem.contents('.slider__item').innerWidth();
		$slManage.find('.slider__manag-arrow').removeClass('disable');
		
		if (elNumb == 0) {
			$(this).addClass('disable');
			return false;
		}
		
		let unFullStep = elNumb - step;
		
		if ( unFullStep <= 0) {
			elNumb = 0;
			$elem.attr('data-numb', elNumb);
			$blSlideNubm.text(1);
			anime({
				targets: nameElem,
				translateX: 0,
				easing: paramEasing
			});
			
			$(this).addClass('disable');
			
			return false;
		}
		
		if ( unFullStep < step) {
			shiftWidth = unFullStep * elWidth;
			elNumb = unFullStep;
			$elem.attr('data-numb', elNumb);
			$blSlideNubm.text(elNumb + 1);
			anime({
				targets: nameElem,
				translateX: -shiftWidth,
				easing: paramEasing
			});
			
			return false;
		}
		
		if (elNumb > step) {
			shiftWidth = (elNumb - step) * elWidth;
			elNumb -= step;
			$elem.attr('data-numb', elNumb);
			$blSlideNubm.text(elNumb + 1);
			anime({
				targets: nameElem,
				translateX: -shiftWidth,
				easing: paramEasing
			});
			
			return false;
		}
	}
}


//=======
function sliderFreelanceMob(step = 1, numbInRow = 1) {
	
	const nameElem = '#slider-freelanc_mob';
	
	const $elem = $(nameElem);
	const $slManage = $('.slider__manag_job-type');
	
	const $blSlideNubm = $('.slider__manag_numb-js_job');
	const $blSlideCount = $('.slider__count-js_job');
	
	const $arrowSlLeft = $('.js-sl-arrow-lf_job');
	const $arrowSlRight = $('.js-sl-arrow-rt_job');
	
	const countElem = $elem.contents('.slider__item').length;
	const paramEasing = 'spring(1, 45, 11, 2)';
	
	let elNumb = 0;
	let shiftWidth = 0;
	
	$elem.attr('data-cunt', countElem);
	$blSlideCount.text(countElem);
	$elem.attr('data-numb', 0);
	
	$arrowSlRight.on('click', SliderMoveRight);
	$arrowSlLeft.on('click', SliderMoveLeft);
	
	$elem.swipe({
		swipeStatus: function(event, phase, direction) {
			if (phase=="end"){
				if (direction == 'left') {
					SliderMoveRight();
				}
				if (direction == 'right') {
					SliderMoveLeft();
				}
			}},
		triggerOnTouchEnd:false,
		threshold: 20
	});
	
	function SliderMoveRight() {
		step = slJobCountSl;
		numbInRow = slJobViewSl;
		
		const elWidth = $elem.contents('.slider__item').innerWidth();
		let leftElem = countElem - elNumb;
		
		$slManage.find('.slider__manag-arrow').removeClass('disable');
		
		if (leftElem == 0) {
			$(this).addClass('disable');
			return false;
		}
		
		let unFullStep = leftElem - numbInRow;
		
		if ( unFullStep <= step) {
			shiftWidth = (elNumb + unFullStep) * elWidth;
			elNumb += unFullStep;
			$elem.attr('data-numb', elNumb);
			$blSlideNubm.text(elNumb + 1);
			anime({
				targets: nameElem,
				translateX: -shiftWidth,
				easing: paramEasing
			});
			
			$(this).addClass('disable');
			
			return false;
		}
		
		if (leftElem > step) {
			shiftWidth = (elNumb + step) * elWidth;
			elNumb += step;
			$elem.attr('data-numb', elNumb);
			$blSlideNubm.text(elNumb + 1);
			anime({
				targets: nameElem,
				translateX: -shiftWidth,
				easing: paramEasing
			});
			
			return false;
		}
	}
	
	
	function SliderMoveLeft() {
		
		step = slJobCountSl;
		numbInRow = slJobViewSl;
		
		const elWidth = $elem.contents('.slider__item').innerWidth();
		$slManage.find('.slider__manag-arrow').removeClass('disable');
		
		if (elNumb == 0) {
			$(this).addClass('disable');
			return false;
		}
		
		let unFullStep = elNumb - step;
		
		if ( unFullStep <= 0) {
			elNumb = 0;
			$elem.attr('data-numb', elNumb);
			$blSlideNubm.text(1);
			anime({
				targets: nameElem,
				translateX: 0,
				easing: paramEasing
			});
			
			$(this).addClass('disable');
			
			return false;
		}
		
		if ( unFullStep < step) {
			shiftWidth = unFullStep * elWidth;
			elNumb = unFullStep;
			$elem.attr('data-numb', elNumb);
			$blSlideNubm.text(elNumb + 1);
			anime({
				targets: nameElem,
				translateX: -shiftWidth,
				easing: paramEasing
			});
			
			return false;
		}
		
		if (elNumb > step) {
			shiftWidth = (elNumb - step) * elWidth;
			elNumb -= step;
			$elem.attr('data-numb', elNumb);
			$blSlideNubm.text(elNumb + 1);
			anime({
				targets: nameElem,
				translateX: -shiftWidth,
				easing: paramEasing
			});
			
			return false;
		}
	}
}

//=======
function sliderFreelance() {
    const nameElem = '#slider-freelance';
    const $elem = $(nameElem);
    const $blSlideNubm = $('.slider__manag_numb-js_power');
    const $blSlideCount = $('.slider__count-js_power');

    const $arrowSlLeft = $('.js-sl-arrow-lf_power');
    const $arrowSlRight = $('.js-sl-arrow-rt_power');

    const getFirstSl = '.slider__item:first-of-type';
    const getLastSl = '.slider__item:last-of-type';
    
    const countElem = $elem.contents('.slider__item').length;
    const paramEasing = 'spring(1, 50, 11, 2)';

    let workSl = true;
    let elNumb = 0;

    $elem.attr('data-cunt', countElem);
    $blSlideCount.text(countElem);
    $elem.attr('data-numb', 0);

    $arrowSlRight.on('click', sliderMoveRight);
		$arrowSlLeft.on('click', sliderMoveLeft);
	
		$elem.swipe({
			swipeStatus: function(event, phase, direction) {
				if (phase=="end"){
					if (direction == 'left') {
						sliderMoveRight();
					}
					if (direction == 'right') {
						sliderMoveLeft();
					}
				}},
				triggerOnTouchEnd:false,
				threshold: 20
		});
	
	
		function sliderMoveRight() {
				if (!workSl) return false;
				workSl = false;
				
				const elWidth = $elem.contents('.slider__item').innerWidth();
				
				if (countElem < 3) {
					$(this).addClass('disable');
					return false;
				}
				
				if ((elNumb + 1) < countElem) {
					elNumb++;
				} else {
					elNumb = 0;
				}
				
				$elem.attr('data-numb', elNumb);
				$blSlideNubm.text(elNumb + 1);
				
				let copyElem = $elem.contents(getFirstSl).clone();
				copyElem.css({'opacity': 0});
				
				const timeAnim = 0.4;
				const ltAnim = 0.04;
				
				const tl = new TimelineMax();
				
				tl.add(TweenMax.to(`${nameElem} ${getFirstSl}`, 0.8, { opacity: 0, onComplete: function() { }}));
				
				tl.add(TweenMax.to(`${nameElem}`, 1.4, { x: -elWidth, delay: -0.7, ease: Back.easeOut.config(0.7), onComplete: function() {
					$elem.contents(getFirstSl).remove();
					$elem.append(copyElem);
					TweenMax.set(`${nameElem}`, {x:0});
					TweenMax.to(`${nameElem} ${getLastSl}`, 0.2, { opacity: 1, onComplete: function() {
						workSl = true;
					}});
				}}));
				
				tl.add(TweenMax.to(`${nameElem} ${getFirstSl}`, 1.4, { x: elWidth, delay: -1.4, ease: Back.easeOut.config(0.7) }));
		}
	
	
		function sliderMoveLeft() {
				if (!workSl) return false;
				workSl = false;
				
				const elWidth = $elem.contents('.slider__item').innerWidth();
				
				if (countElem < 3) {
					$(this).addClass('disable');
					return false;
				}
				
				if ((elNumb + 1) > 1) {
					elNumb--;
				} else {
					elNumb = countElem - 1;
				}
				
				$elem.attr('data-numb', elNumb);
				$blSlideNubm.text(elNumb + 1);
				
				let copyElem = $elem.contents(getLastSl).clone();
				copyElem.css({'opacity': 0});
				
				$elem.contents(getLastSl).remove();
				$elem.prepend(copyElem);
				TweenMax.set(`${nameElem}`, {x: -elWidth});
				TweenMax.set(`${nameElem} ${getFirstSl}`, {x: elWidth});
				
				
				const tl = new TimelineMax();
				
				tl.add(TweenMax.to(`${nameElem}`, 1.4, { x: 0, ease: Back.easeOut.config(0.7), onComplete: function() {
						
						TweenMax.to(`${nameElem} ${getFirstSl}`, 0.3, { opacity: 1, onComplete: function() {
							workSl = true;
						}})
					} }
				));
				
				tl.add(TweenMax.to(`${nameElem} ${getFirstSl}`, 1.4, { x: 0, delay: -1.4, ease: Back.easeOut.config(0.7) }));
				tl.add(TweenMax.to(`${nameElem} ${getFirstSl}`, 0.8, { opacity: 1, delay: -1.4 }));
		}
	
}

//-------------------------
$(function () {
	
	sliderFreelance();
	sliderFreelanceMob(slJobCountSl, slJobViewSl);
	sliderJob(slJobCountSl, slJobViewSl);
	sliderEmployers(slJobCountSl, slJobViewSl);
	
	let wow = new WOW({
		boxClass: 'wow',
		offset: 100,
		callback: function (box) {

			$(box).removeClass('sect-bl-vis__none sect-bl-vis__none_app');
			
			//====  SECTION FREELANCE
			if ( $(box).hasClass("wow_freelance") ) {
				$(box).removeClass('active');
				anim_freelance();
			}
			
			//====  SECTION EMPLOYERS
			if ( $(box).hasClass("wow_employer") ) {
				$(box).removeClass('active');
				anim_employer();
			}
			
			//====  SECTION EMPLOYERS
			if ( $(box).hasClass("wow_job") ) {
				anim_job();
			}
			
			//====  SECTION POWERFUL
			if ( $(box).hasClass("wow_powerful") ) {
				anim_powerful();
			}
			
			//====  SECTION POWERFUL
			if ( $(box).hasClass("wow_app") ) {
				anim_app();
				$(box).closest('.page-bl_app').removeClass('active')
			}
			
			//====  SECTION START
			if ( $(box).hasClass("wow_start") ) {
				anim_start();
			}
		}
	});
	
	
	isPageAnim(wow);
	
	
	$('.js-cookie-accept').on('click', function () {
		TweenLite.to('.page-bl-cookie', 0.6, { opacity: 0, onComplete: function () {
			$('.page-bl-cookie').remove();
			$('.main-wrap').removeClass('bl-coolie-active');
		}});
	});
	
	
	managHeader();
	
	$(document).scroll(function(){
			managHeader();
	});
	
	
	parSlider();
	
	$(window).resize(function(){
			parSlider();
	});
	
});



//===== TWIN-MAX
function anim_freelance() {
	const tm = new TimelineMax();
	const tm_2 = new TimelineMax();
	
	const timeAnim = 0.4;
	const ltAnim = 0.04;
	
	tm.add(TweenMax.staggerFrom(".js-anim__tx_freel", timeAnim, {opacity: 0, y: 50, delay: 0.6 }, ltAnim));
	tm.add(TweenMax.staggerFrom(".js-anim__tx-1_freel", timeAnim, {opacity: 0, y: 50, delay: -0.3 }, ltAnim));
	tm.add(TweenMax.staggerFrom(".js-anim__tx-2_freel", timeAnim, {opacity: 0, y: 50, delay: -0.5 }, ltAnim));
	tm.add(TweenMax.staggerFrom(".js-anim__tx-3_freel", timeAnim, {opacity: 0, y: 50, delay: -0.5 }, ltAnim));
	// tm.timeScale(2);

	tm_2.add(TweenMax.from(".js-anim__com-1_freel", 0.9, {opacity: 0, x: -40, delay: 0.1 }));
	tm_2.add(TweenMax.staggerFrom(".js-anim__com-2_freel", 0.9, {opacity: 0, x: 40, delay: 0.1 }));
}

function anim_employer() {
	const tm = new TimelineMax();
	
	const timeAnim = 0.4;
	const ltAnim = 0.04;
	
	tm.add(TweenMax.staggerFrom(".js-anim__tx_empl", timeAnim, {opacity: 0, y: 50, delay: 0.6 }, ltAnim));
}

function anim_job() {
	const tm = new TimelineMax();
	
	const timeAnim = 0.4;
	const ltAnim = 0.04;
	
	tm.add(TweenMax.staggerFrom(".js-anim__tx_job", timeAnim, {opacity: 0, y: 50, delay: 0.6 }, ltAnim));
}

function anim_powerful() {
	const tm = new TimelineMax();
	
	const timeAnim = 0.4;
	const ltAnim = 0.04;
	
	tm.add(TweenMax.from(".js-anim__tx_power", timeAnim, {opacity: 0, y: 50, delay: 1.2 }, ltAnim));
}

function anim_app() {
	const tm = new TimelineMax();
	
	const timeAnim = 0.4;
	const ltAnim = 0.04;
	
	tm.add(TweenMax.staggerFrom(".js-anim__tx_app", timeAnim, {opacity: 0, y: 50, delay: 0.4 }, ltAnim));
}

function anim_start() {
	const tm = new TimelineMax();
	
	const timeAnim = 0.4;
	const ltAnim = 0.04;
	
	tm.add(TweenMax.from(".js-anim__tx_start", timeAnim, {opacity: 0, y: 50, delay: 0.4 }, ltAnim));
	tm.add(TweenMax.staggerFrom(".js-anim__tx-1_start", timeAnim, {opacity: 0, y: 50, delay: -0.4 }, ltAnim));
	tm.add(TweenMax.staggerFrom(".js-anim__tx-2_start", timeAnim, {opacity: 0, y: 50, delay: -0.35 }, ltAnim));
}

let tmDurSpotAn = 20000;
let tmDurSpotAnMax = 3000;
let tmDurSpotAnMin = 1500;

let maxDotJobRed = [
	'M4.44101 13.4267C23.9379 -10.5729 51.6583 2.14631 67.4444 16.4262C76.9585 24.9835 107.949 19.4263 112.949 49.4263C118.449 82.4263 73.9443 125.426 42.9443 115.426C11.9443 105.426 26.124 88.7287 18.9485 66.4263C14.2924 51.9263 -9.78006 30.9263 4.44101 13.4267Z',
	'M42.0483 23.0202C61.4585 -0.933133 80.2858 -6.49656 96.0017 7.75585C105.474 16.2966 126.253 41.8381 114.487 69.7908C101.997 99.4622 79.0153 106 58.0322 106C37.049 106 10.4693 99.9648 1.58903 72.3051C-7.93718 42.6336 27.8904 40.4861 42.0483 23.0202Z',
	'M37.1193 0.324757C65.8744 -2.88422 58.8052 18.402 74.5913 32.6819C84.1055 41.2392 106.801 33.2702 108.821 54.0216C110.841 74.773 95.7457 108.146 64.5456 106.97C33.3455 105.793 9.05517 76.324 1.87968 54.0216C-5.2958 31.7192 8.41735 3.53373 37.1193 0.324757Z',
	'M34.4929 39.499C53.9031 15.5456 51 7.22772 73.5 1.50009C96 -4.22754 125.766 25.0473 114 53C101.51 82.6714 112.491 108.999 89.9907 117.999C67.4907 126.999 11.982 123.35 3.50161 93.999C-9.49999 49.0001 20.335 56.9648 34.4929 39.499Z'
];

let maxDotJobBlue = [
	'M143.894 221C90.5164 221 89.9415 167.629 59.6879 157.266C33.4681 148.285 3.3775 145.627 0.194131 96.124C-3.83769 33.4268 55.6567 45.8622 111.119 8.5548C166.581 -28.7527 172.64 66.054 212.473 99.2325C260.375 139.131 200.942 221 143.894 221Z',
	'M218.132 180.981C176.511 217.664 128.529 228.177 79.4716 222.598C24.0225 216.291 46.6136 157.86 17.4051 124.676C-32.1546 68.3707 35.4214 14.0129 79.4716 3.74223C165.573 -16.3331 123.844 50.0367 172.58 68.3707C218.132 85.507 263.684 140.833 218.132 180.981Z',
	'M156.416 217.855C102.253 231.934 121.452 172.236 88.7789 168.437C33.3931 161.997 -9.13518 124.599 1.69313 81.2133C17.8763 16.372 75.8368 17.8369 134.24 3.91484C220.244 -16.5865 242.026 47.9472 215.211 92.6826C186.355 140.824 223.569 200.401 156.416 217.855Z',
	'M151.414 209.139C98.9388 224.231 109.339 175.546 87.0682 157.837C64.7979 140.129 26.2503 160.593 7.35424 113.394C-11.5418 66.1944 3.91208 22.8569 77.9077 5.92304C151.903 -11.0108 174.899 9.29289 205.351 54.9798C235.335 99.982 203.894 194.021 151.414 209.139Z'
];

let maxDotJobYellow = [
	'M10.4246 28.5541C27.2761 10.701 41.3856 28.5542 66.444 28.5542C91.9426 19.3864 87.851 -10.6765 120.189 3.94454C152.527 18.5656 156.619 77.2889 120.189 106.241C90.1206 130.138 49.1406 147.257 23.6343 120.235C-3.41954 94.6606 -6.42699 46.4073 10.4246 28.5541Z',
	'M49.8787 17.9132C85.6501 17.9132 87.081 -8.04145 121.422 2.53286C152.423 12.0791 161.962 56.8456 147.177 94.8164C131.83 134.229 93.6262 95.7453 68.0029 105.871C43.6783 115.484 14.1073 116.445 2.18349 75.5904C-7.63619 41.9454 16.969 17.9132 49.8787 17.9132Z',
	'M23.2873 10.6107C52.977 -9.17028 73.2806 1.56062 91.8038 19.5117C102.968 30.2689 143.189 33.9916 145.559 60.0778C147.929 86.164 141.981 110.046 97.1419 121.876C58.3895 132.1 21.1612 116.28 7.29998 88.2491C-5.43295 62.5003 -2.36096 27.6991 23.2873 10.6107Z',
	'M47.6762 0.412775C84.6093 -3.66592 75.5296 23.3894 95.8053 41.5396C108.025 52.4162 137.176 42.2874 139.77 68.663C142.364 95.0386 122.976 137.457 82.9026 135.962C42.8291 134.466 11.6305 97.0099 2.41427 68.663C-6.80195 40.316 10.8113 4.49147 47.6762 0.412775Z'
];


spotAnim('#sect-empl-green', maxDotJobRed);
spotAnim('#sect-job-red', maxDotJobRed);
spotAnim('#sect-app-red', maxDotJobRed);

spotAnim('#sect-freel-blue', maxDotJobBlue);
spotAnim('#sect-empl-yellow', maxDotJobBlue);
spotAnim('#sect-job-blue', maxDotJobBlue);
spotAnim('#sect-app-blue', maxDotJobBlue);

spotAnim('#sect-freel-green', maxDotJobYellow);
spotAnim('#sect-app-yellow', maxDotJobYellow);


function spotAnim(nameSel, masZn) {
	
	anime({
		targets: `${nameSel} .svg-path`,
		d: [
			{value: masZn[0]},
			{value: masZn[1]},
			{value: masZn[2]},
			{value: masZn[3]}
		],
		easing: 'linear',
		duration: (function () {
			return (tmDurSpotAn + Math.random()* tmDurSpotAnMax - tmDurSpotAnMin)
		})(),
		complete: function () {
			spotAnim(nameSel, masZn)
		}
	});
}


function managHeader() {
	let pgHeight = $(window).scrollTop();
	
	if (pgHeight < 60) {
		$('.header').removeClass('header_scroll');
	} else {
		$('.header').addClass('header_scroll');
	}
}


function parSlider() {
	let screenWidth = $(window).outerWidth();
	
	if (screenWidth > 1270) {
		slJobCountSl = 3;
		slJobViewSl = 4;
	}
	
	if (screenWidth <= 1270) {
		slJobCountSl = 3;
		slJobViewSl = 3;
	}
	
	if (screenWidth <= 970) {
		slJobCountSl = 2;
		slJobViewSl = 2;
	}
	
	if (screenWidth <= 600) {
		slJobCountSl = 1;
		slJobViewSl = 1;
	}
}


function isPageAnim(wow) {
	const screenWidth = $(window).outerWidth();
	
	if (screenWidth > 600) {
		wow.init("#wow");
	} else {
		$('.page-sect, .wow_app').removeClass('sect-bl-vis__none sect-bl-vis__none_app');
	}
}