'use strict';

//----- VARRIAL GLOBAL ----

function sliderJob(step = 1, numbInRow = 1) {
	const nameElem = '#slider-job-type';
	const $elem = $(nameElem);
    const $blSlideNubm = $('.slider__manag_numb-js_job');
    const $blSlideCount = $('.slider__count-js_job');

    const $arrowSlLeft = $('.js-sl-arrow-lf_job');
    const $arrowSlRight = $('.js-sl-arrow-rt_job');

	const countElem = $elem.contents('.slider__item').length;
	const paramEasing = 'spring(1, 50, 11, 2)';
	
	let elNumb = 0;
	let shiftWidth = 0;
	
	$elem.attr('data-cunt', countElem);
    $blSlideCount.text(countElem);
	$elem.attr('data-numb', 0);

    $arrowSlLeft.on('click', function () {
		const elWidth = $elem.contents('.slider__item').width();
		let leftElem = countElem - elNumb;

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
	});


    $arrowSlRight.on('click', function () {
        const elWidth = $elem.contents('.slider__item').width();

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
    });
}

//=======
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

    $arrowSlLeft.on('click', function () {
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

        anime({
            targets: `${nameElem} ${getFirstSl}`,
            opacity: 0,
            duration: 350,
            complete: function () {
                anime({
                    targets: `${nameElem}`,
                    translateX: -elWidth,
                    easing: paramEasing,
                    duration: 1200,
                    complete: function () {
                        $elem.contents(getFirstSl).remove();
                        $elem.append(copyElem);
                        $elem.css({'transform': 'translateX(0)'});
                        anime({
                            targets: `${nameElem} ${getLastSl}`,
                            opacity: 1,
                            duration: 100,
                            complete: function () {
                                workSl = true;
                            }
                        })
                    }
                })
            }
        });
    });


    $arrowSlRight.on('click', function () {
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
        $elem.css({'transform': `translateX(-${elWidth}px)`});

        anime({
            targets: nameElem,
            translateX: 0,
            easing: paramEasing,
            complete: function () {
                anime({
                    targets: `${nameElem} ${getFirstSl}`,
                    opacity: 1,
                    duration: 350,
                    complete: function () {
                        workSl = true;
                    }
                })
            }
        });
    });
}

//-------------------------
$(function () {

    sliderFreelance();
	sliderJob(3, 4);
	
	let wow = new WOW({
		boxClass: 'wow',
		offset: 100,
		callback: function (box) {

			$(box).removeClass('sect-bl-vis__none');
			
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
	
	wow.init("#wow");
});



//===== TWIN-MAX
function anim_freelance() {
	const tm = new TimelineMax();
	const tm_2 = new TimelineMax();
	
	const timeAnim = 0.4;
	const ltAnim = 0.04;
	
	tm.add(TweenMax.from(".js-anim__tx_freel", timeAnim, {opacity: 0, y: 50, delay: 0.8 }, ltAnim));
	tm.add(TweenMax.staggerFrom(".js-anim__tx-1_freel", timeAnim, {opacity: 0, y: 50, delay: -0.3 }, ltAnim));
	tm.add(TweenMax.staggerFrom(".js-anim__tx-2_freel", timeAnim, {opacity: 0, y: 50, delay: -0.5 }, ltAnim));
	tm.add(TweenMax.staggerFrom(".js-anim__tx-2_freel", timeAnim, {opacity: 0, y: 50, delay: -0.5 }, ltAnim));
	
	tm_2.add(TweenMax.from(".js-anim__com-1_freel", 0.8, {opacity: 0, x: -40, delay: 1.5 }));
	tm_2.add(TweenMax.staggerFrom(".js-anim__com-2_freel", 0.8, {opacity: 0, x: 40, delay: 0.2 }));
}

function anim_employer() {
	const tm = new TimelineMax();
	
	const timeAnim = 0.4;
	const ltAnim = 0.04;
	
	tm.add(TweenMax.staggerFrom(".js-anim__tx_empl", timeAnim, {opacity: 0, y: 50, delay: 0.8 }, ltAnim));
}

function anim_job() {
	const tm = new TimelineMax();
	
	const timeAnim = 0.4;
	const ltAnim = 0.04;
	
	tm.add(TweenMax.staggerFrom(".js-anim__tx_job", timeAnim, {opacity: 0, y: 50, delay: 0.8 }, ltAnim));
}

function anim_powerful() {
	const tm = new TimelineMax();
	
	const timeAnim = 0.4;
	const ltAnim = 0.04;
	
	tm.add(TweenMax.from(".js-anim__tx_power", timeAnim, {opacity: 0, y: 50, delay: 0.8 }, ltAnim));
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


let tmDurSpotAn = 4000;
let tmDurSpotAnMax = 3000;
let tmDurSpotAnMin = 1500;

spotAnim('#sect-freel-green');
spotAnim('#sect-freel-blue');

spotAnim('#sect-job-blue');
spotAnim('#sect-job-red');

function spotAnim(nameSel) {
    // M30,20  C80,-25 147,03 170,20  S260,52 230,150  S170,252 140,240  S-75,270 30,20z
    let znSpot = `M30,20
        C80,-25 ${147 + Math.random()*80 - 40},03 170,20
        S${260 + Math.random()*80 - 40},${50 + Math.random()*50 - 25} 230,150
        S${170 + Math.random()*40 - 20},${250 + Math.random()*60 - 30} 140,${240 + Math.random()*20}
        S-${75 + Math.random()*30 - 15},${270 + Math.random()*60 - 30} 30,20
        z`;

    let prZn = $(`${nameSel} .svg-path`).attr('d');

    if (!prZn) {
        $(`${nameSel} .svg-path`).attr('d', znSpot);
    }

    // anime({
    //     targets: `${nameSel} .svg-path`,
    //     d: [
    //         {value: znSpot},
    //     ],
    //     easing: 'linear',
    //     duration: (function () {
    //         return (tmDurSpotAn + Math.random()* tmDurSpotAnMax - tmDurSpotAnMin)
    //     })(),
    //     delay: (function () {
    //         return (Math.random()* 1000)
    //     })(),
    //     complete: function () {
    //         spotAnim(nameSel)
    //     }
    // });
}