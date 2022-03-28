
$(function(){
    $('.info-list li').click(function(){
        $(this).addClass('selected').siblings().removeClass('selected');
        $('.info-content div').hide();
        $('.' + $(this).data('class')).fadeIn()
    });
    $('.control-about li').click(function(){
        $(this).addClass('selected').siblings().removeClass('selected');
        $('.' + $(this).data('class')).removeClass('hidden').siblings().addClass('hidden');
    });
    //testimonial
    $('.slider-image .image').click(function(){
        $(this).addClass('selected').siblings().removeClass('selected');
        $('.' + $(this).data('class')).addClass('active').siblings().removeClass('active');
        check();
    });
    $('.slider .fa-chevron-right').click(function(){
        $('.active').next().addClass('active').siblings().removeClass('active');
        $('.' + $('.active').data('class')).addClass('selected').siblings().removeClass('selected');
        check();
    });
    $('.slider .fa-chevron-left').click(function(){
        $('.active').prev().addClass('active').siblings().removeClass('active');
        $('.' + $('.active').data('class')).addClass('selected').siblings().removeClass('selected');
        check();
    });
    function check(){
        if($('.client:first').hasClass('active')){
            $('.slider .left').fadeOut(100);
        }else{
            $('.slider .left').fadeIn(100);
        }
        if($('.client:last').hasClass('active')){
            $('.slider .right').fadeOut(100);
        }else{
            $('.slider .right').fadeIn(100);
        }
    };
    check();
    // work
    $('.list').click(function(){
        var value = $(this).attr('data-filter');
        if (value == 'all'){
            $('.item-box').show('1000');
        }
        else{
            $('.item-box').removeClass('hidden');
            $('.item-box').not('.'+value).hide('1000');
            $('.item-box').filter('.'+value).show('1000');
        }
        $(this).addClass('active').siblings().removeClass('active');
    });
    $('.products .container button').click(function(){
        $('.item-box').removeClass('hidden');
    });
    
    
    let header = document.querySelector('header');
    let imgArray = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg'];
    
    setInterval(function(){
        let randomNumber = Math.floor(Math.random() * imgArray.length);
        header.style.backgroundImage = 'url("images/img2/' + imgArray[randomNumber]+ '")';
    }, 3000)

    $('.testimonial').height($(window).height);

    $('.fa-bars').click(function(){
        $('.nav-r').toggleClass('show');
    });


    VanillaTilt.init(document.querySelectorAll(".eng"), {
		max: 25,
		speed: 400
	});

    
})


