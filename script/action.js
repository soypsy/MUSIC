let winW = $(window).width()
$(window).resize(function(){
    winW = $(window).width()
})


$('.gnb').mouseenter(function(){
    if(winW >= 1025){
        $('.nav_box').stop().fadeIn(200)
    }
})
$('.gnb').mouseleave(function(){
    if(winW >= 1025){
        $('.nav_box').stop().fadeOut(200)
    }
})
$('.nav_box').mouseenter(function(){
    if(winW >= 1025){
        $('.nav_box').stop().fadeIn(200)
    }
})
$('.nav_box').mouseleave(function(){
    if(winW >= 1025){
        $('.nav_box').stop().fadeOut(200)
    }
});




$('header .menu_box .menu > li > a').click(function(){
    $('.submenu').slideUp()
    $(this).parent().find('.submenu').stop().slideToggle();

    return false
})

$('.hambuger').click(function(){
    // $('body').toggleClass('on')
    $('.hambuger').toggleClass('on')
    $('.nav_box').fadeToggle(200)
})



// $('.main_position_bar a').eq(0).click(function(){
//     $('html').animate({scrollTop:0});
// });
// $('.main_position_bar a').eq(1).click(function(){
//     $('html').animate({scrollTop:1000});
// });
// $('.main_position_bar a').eq(2).click(function(){
//     $('html').animate({scrollTop:1800});
// });
// $('.main_position_bar a').eq(3).click(function(){
//     $('html').animate({scrollTop:2800});
// });



// $('.main_position_bar a').eq(0).click(function(){
//     let slideTop = $('#slide_box').offset().top;
//     $('html').animate({scrollTop:slideTop});
// });
// $('.main_position_bar a').eq(1).click(function(){
//     let sec1Top = $('#section1').offset().top;
//     $('html').animate({scrollTop:sec1Top});
// });
// $('.main_position_bar a').eq(2).click(function(){
//     let sec2Top = $('#section2').offset().top;
//     $('html').animate({scrollTop:sec2Top});
// });
// $('.main_position_bar a').eq(3).click(function(){
//     let sec3Top = $('#section3').offset().top; 
//     $('html').animate({scrollTop:sec3Top});
// });


$('.main_position_bar a').click(function(){
    let ssoyung = $(this).attr('href');
    
    let sso = $(ssoyung).offset().top
    $('html').animate({scrollTop:sso});

     return false
});
// 메인변수
let slideTop, sec1Top, sec2Top, sec3Top

// 서브변수
let tabTop, textLeft

//메인페이지 판단 코드 
if($('#section_box').length > 0){
   slideTop = $('#slide_box').offset().top;  //0
   sec1Top = $('#section1').offset().top;   //919
   sec2Top = $('#section2').offset().top;   //1768.34375
   sec3Top = $('#section3').offset().top;   //2769.34375
} 


if($('.tabmenu').length > 0){
    tabTop = $('.tabmenu').offset().top;
}

if($('.year_box').length > 0){
    yearBoxTop = $('.year_box').offset().top;
}

$(window).scroll(function(){
    let scrT = $(window).scrollTop();  //스크롤값



    // if(scrT >= slideTop - 100){
    //     $('.main_position_bar span').css({top:0})
    // }
    // if(scrT >= sec1Top - 100){
    //     $('.main_position_bar span').css({top:50})        
    // }
    if(scrT >= sec2Top - 100){
        // $('.main_position_bar span').css({top:100});
        $('#section2 img.color').fadeIn(500)
    } else {
        $('#section2 img.color').fadeOut(500)
    }
    // if(scrT >= sec3Top - 100){
    //     $('.main_position_bar span').css({top:150})
    // }




    //세로형 스크롤량 구하기 - 방법1) 스크롤량을 전체높이의 %로 구한다
    let winH = $(window).height()
    let docH = $(document).height();  //전체높이 5000
    let dap = (scrT) / (docH - winH) * 100 //전체높이에 스크롤값을 %로구하기
    $('.main_position_bar span').css({height:dap+'%'})
    $('.garobar span').css({width:dap+'%'})

    
    // 가로형 스크롤량 구하기  -  방법2) 비율을 구해서 스크롤값에 곱한다
    //전체높이:전체너비 = 100:x  
    //docH:winW = 100:x
    //(winW*100)/docH = x
    //(winW*100)/(docH-winH) = x

    //let winW = $(window).width();
    //let dap2 = (winW)/(docH-winH)
    // $('.garobar span').css({width:dap2*scrT})
    



    // top으로 가기
    if(scrT >= winH/1.5) {
        $('.go_top').css({opacity:1, visibility: 'visible'})
    } else {
        $('.go_top').css({opacity:0, visibility: 'hidden'})
    }


    $('.st0').css({strokeDashoffset:450-scrT});

    // let lastTextTop = $('.history .year_box :last-child ul:last-child li.text').outerHeight(true)
    // textLeft = $('.history .text').offset().left;
    // if (scrT >= tabTop){
    //     $('.history .now').css({top:scrT-yearBoxTop+74})

    //     if(scrT >= docH-winH-2){
    //         $('.history .now').css({top:'auto',bottom:0+lastTextTop-10})
    //     }

    // } else {
    //     $('.history .now').css({top:'',bottom:'auto'})
    
    // }

    $('.go_top').text(Math.round(scrT))
})

$('.go_top').click(function(){
    $('html').animate({scrollTop:0})






})


let total = 210
let k = 0
$('.real_circle').each(function(){
    let circleValue = $(this).attr('data-circleValue');
    let value = (circleValue / 100) * total;
    let degVal = (value / total) * 180; // 0부터 180도까지의 범위에서 각도를 계산
    let $this = $(this)

    $(this).find('.st3').css({strokeDashoffset:total - value})

    setInterval(function(){
        if(k <circleValue){
                k++
                $this.siblings('.circleNumber').text(k + '%');
                console.log(k)
        }
    },3000/value)

    $(this).siblings('.dot_box').css({transform:'rotate('+degVal+'deg)'})
})



$('.tabmenu li').click(function(){
    $(this).addClass('active').siblings().removeClass()

    let dataTab = $(this).attr('data-tab');
    $('.year_box .all').hide()
    $('.year_box .'+dataTab).show()



    return false
})



    




