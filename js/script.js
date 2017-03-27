$(document).ready(
    function() {
        pagebytes = $('html').html().length;
        kbytes = pagebytes / 1024;
        // console.log(kbytes)
    }
);

document.onreadystatechange = function() {
    if (document.readyState === 'complete') {
        $('.mainContainer').css('display', 'block');
        $('#loader').css('display', 'none');
    } else {
        $('#loader').css('display', 'block');
        $('.mainContainer').css('display', 'none');
    }
}



var mainContainer = document.querySelector(".mainContainer")
var currency = document.querySelector('ul.exc-countries');
var buy = document.querySelector('ul.exc-buy');
var sell = document.querySelector('ul.exc-sell');
var overlay = document.querySelector('.overlay');
var over = 0;
currency.style.top = 0;
buy.style.top = 0;
sell.style.top = 0;
var i = 0;

var t = setInterval(function() {
    change(currency)
}, 2000)

var t = setInterval(function() {
    change(buy)
}, 2000)

var t = setInterval(function() {
    change(sell)
}, 2000)

function change(c) {
    c.style.top = parseInt(c.style.top) - 18 + 'px';
    if (parseInt(c.style.top) < -36) {
        c.style.top = 0 + 'px';
    }
}


///////////////////////////////////////slide-left function/////////////////////////////////////////////////

function slideLeft(param) {
    param.style.left = window.innerWidth + 'px';
    var velocity = parseInt(param.style.left);
    intervalSide = setInterval(function() {
        var rt = parseInt(param.style.left) + parseInt(param.style.width);
        param.style.display = 'block';
        velocity -= 4;
        param.style.left = velocity + 'px';
        if (window.innerWidth >= rt) {
            ferq = window.innerWidth - rt + 7;
            console.log(ferq);
            mainContainer.classList.add("padding");
            param.style.left = velocity + ferq + 'px';
            clearInterval(intervalSide);
        }
    }, 1);
}


function slideHide(param) {
    param.style.left = window.innerWidth + 'px';
    var velocity = parseInt(param.style.left);
    intervalSide = setInterval(function() {
        console.log(param.style.left);
        var lt = parseInt(param.style.left);
        param.style.display = 'block';
        velocity += 4;
        param.style.left = velocity + 'px';
        if (window.innerWidth <= lt) {
            ferq = lt - window.innerWidth + 7;
            console.log(ferq);
            mainContainer.classList.remove("padding");
            param.style.left = velocity - ferq + 'px';
            overlay.style.display = 'none';
            clearInterval(intervalSide);
        }
    }, 1);
}


function sldr(param) {


}



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////-----Search input eventlistener----------/////////////////////////////

var inp = document.querySelector('.searchCont input');
var misc = document.querySelector('.miscCont');
inp.addEventListener('focus', function() {
    misc.style.opacity = 1;
    misc.style.display = 'flex';
})

var txt = document.querySelector('.searchCont span');
var misc = document.querySelector('.miscCont');
var miscUl = document.querySelector('.miscCont ul');
var inp = document.querySelector('.inputCont input');
var qwe = '';
inp.addEventListener('click', function() {
    txt.style.top = -40 + 'px';
    txt.style.left = '-110px';
    txt.style.transform = 'scale(.5, .5)';
    miscUl.style.display = 'flex';
    miscUl.style.opacity = 1;
    inp.value = qwe;
});
window.addEventListener('click', function() {
    if (document.activeElement != inp) {
        txt.style.top = '5px';
        txt.style.left = '5px';
        txt.style.transform = 'scale(1,1)';
        misc.style.display = 'none';
        miscUl.style.opacity = 0;
        misc.style.opacity = 0;
        misc.style.display = 'none';
        qwe = inp.value;
        inp.value = '';
    }
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////SLIDER///////////////////////////////////////////////////////////////////////




var imgArr = ['img/slider1.jpg', 'img/slider2.jpg', 'img/slider3.jpg'];
var slider = document.querySelector('.sliderCont');
var buttons = document.querySelectorAll('.sliderButtons li');
k = 0;
for (i = 0; i < imgArr.length; i++) {
    buttons[i].addEventListener('click', function() {
        chg(this);
    });
}

a = setInterval(function() {
    chg(buttons[k]);
}, 2000);


function chg(arg) {
    for (i = 0; i < buttons.length; i++) {
        buttons[i].innerHTML = '<i class="fa fa-circle-thin" aria-hidden="true"></i>'
    }
    if (k == 2) {
        k = 0;
        document.querySelector('.sliderText').style.display = 'none'
        val = arg.getAttribute('value');
        slider.style.backgroundImage = 'url(' + imgArr[val] + ')';
        arg.innerHTML = '<i class="fa fa-circle" aria-hidden="true"></i>';
        if (val == 2) {
            document.querySelector('.sliderText').style.display = 'block'
        }
    } else {
        k++;
        document.querySelector('.sliderText').style.display = 'none'
        val = arg.getAttribute('value');
        slider.style.backgroundImage = 'url(' + imgArr[val] + ')';
        arg.innerHTML = '<i class="fa fa-circle" aria-hidden="true"></i>';
        if (val == 2) {
            document.querySelector('.sliderText').style.display = 'block'
        }
    }
}

/////////////////////////////////////////////////////SLIDER-right content hover//////////////////////////////////////////////////

var odeniw = document.querySelector('.odenisCont');
odeniw.addEventListener('mouseover', function() {
    odeniw.style.transform = 'scale(1.05)';
});
odeniw.addEventListener('mouseout', function() {
    odeniw.style.transform = 'scale(1)';
});


/////////////////////////////////////////////////////Contact us slider div///////////////////////////////////////////////////////////////////



$('.contactUs').css('left', window.innerWidth + 5);
$('.contactUs').css('top', '0px');
$('.bankOnline').css('left', window.innerWidth + 5);
$('.bankOnline').css('top', '0px');
$('.internetBank').css('left', window.innerWidth + 5);
$('.internetBank').css('top', '0px');
$('.searchHelp').css('left', window.innerWidth + 5);
$('.searchHelp').css('top', '0px');
$('.overlay').hide();


//**FUNCTIONS**////////////////////////////////////

function fadeLeft(target, range) {
    $('.overlay').show();
    $('.mainContainer').addClass('padding');
    target.css('left', window.innerWidth + 5);
    target.css('transform', 'translateX(-' + range + 'px)');
}

function fadeRight(target, range) {
    console.log(target);
    $('.mainContainer').removeClass('padding');
    target.css('transform', 'translate(' + range + 'px)')
    $('.overlay').hide();
}

// clicks

$('#elaqe').click(function() {
    fadeLeft($('.contactUs'), 360);
    over = 0;
});

$('#onlayn').click(function() {
    fadeLeft($('.bankOnline'), 360);
    over = 1;
})

$('.internet-bank').click(function() {
    fadeLeft($('.internetBank'), 360);
    over = 2;
});

$('.optionsIcon').click(function() {
    fadeLeft($('.searchHelp'), 720);
    over = 3;
});


//  fadeOut

$('.overlay').click(function() {
    if (over == 0) {
        fadeRight($('.contactUs'), 360)
    } else if (over == 1) {
        fadeRight($('.bankOnline'), 360)
    } else if (over == 2) {
        fadeRight($('.internetBank'), 360)
    } else if (over == 3) {
        fadeRight($('.searchHelp'), 720)
    }
});

$('.internet-bank').click(function() {
    fadeLeft($('.internetBank'), 360);
})

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//////////////////////////= Close Icons =///////////////////////////////////

$('.closeIcon').click(function() {
    if (over == 0) {
        fadeRight($('.contactUs'), 360)
    } else if (over == 1) {
        fadeRight($('.bankOnline'), 360)
    } else if (over == 2) {
        fadeRight($('.internetBank'), 360)
    } else if (over == 3) {
        fadeRight($('.searchHelp'), 720)
    }
})


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var k = 0;

$('#headerFerdi').click(function() {
    $('.hiddenKorp').css('opacity', '0');
    $('.mainContentHidden').addClass('cut');
    $('.mainContentHidden').css('opacity', '1');
    setTimeout(function() {
        $('.mainContent').css('top', '-500px');
        $('.hiddenFerdi').css('opacity', '1');
        $('.mainContent').css('opacity', '0');
        $('.mainContentHidden2').css('opacity', '0');
        // $('.hiddenKorp').css('opacity', '0');
        $('.imageContainer').css('opacity', '0.45')
        $('.imageContainer').css('top', '0');
        k = 1;
    }, 1000)





})

$('#headerKorp').click(function() {
    $('.mainContent').css('top', '-500px');
    if (k == 1) {
        $('.mainContentHidden').css('opacity', '1');
        $('.mainContent').css('opacity', '0');
        $('.mainContentHidden2').addClass('cut')
        setTimeout(function() {
            $('.mainContentHidden2').css('opacity', '1');
            $('.hiddenFerdi').css('opacity', '0');
            $('.hiddenKorp').css('opacity', '1');
            $('.imageContainer').show()
            $('.imageContainer').css('opacity', '0.45')
            $('.imageContainer').css('top', '-900px');
        }, 1000)
    }
})

/////////////////////////////////////////////////////////////////////////////////////////////////= Ferdi--Corp =//////////////////////////////////////////////////////////////////////////////////////

$('#corp').click(function() {
    if (over == 3) {
        $('.ferCorpCont').css('transform', 'translateX(-720px)');
        over = 4;
    }
})

$('#ferdi').click(function() {
    if (over == 4) {
        $('.ferCorpCont').css('transform', 'translateX(0px)');
        over = 3;
    }
})

$('.logo').click(function() {
    $('.mainContentHidden').css('opacity', '0');
    $('.mainContentHidden2').css('opacity', '0');
    $('.hiddenFerdi').css('opacity', '0');
    $('.hiddenKorp').css('opacity', '0');
    $('.imageContainer').css('opacity', '0');
    // $('.mainContent').fadeDown();
    $('.mainContentHidden').removeClass('cut')
    $('.mainContentHidden2').removeClass('cut')
    setTimeout(function() {

        $('.mainContent').css('top', '0px');
        $('.mainContent').css('opacity', '1');
    }, 1000)
})
