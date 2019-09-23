$( document ).ready(function() {

    var Page1 = document.getElementById( 'fp-nav' ).getElementsByTagName( 'a' )[0];
    var Page2 = document.getElementById( 'fp-nav' ).getElementsByTagName( 'a' )[1];
    var Page3 = document.getElementById( 'fp-nav' ).getElementsByTagName( 'a' )[2];
    var Page4 = document.getElementById( 'fp-nav' ).getElementsByTagName( 'a' )[3];
    var Page5 = document.getElementById( 'fp-nav' ).getElementsByTagName( 'a' )[4];

    document.getElementsByTagName('body')[0].onscroll = function() {
    	setTimeout(function() {
    		if (Page2.classList.contains('active'))
	    	{
	    		$('a > span').removeClass('fp-sr-only-white');
	    		$('a > span').addClass('fp-sr-only-blue');
	    	}
    	}, 100)	
	};

	setInterval(function() 
	{

		if(Page1.classList.contains('active'))
        {
        	$('a > span').removeClass('fp-sr-only-blue');
            $('a > span').addClass('fp-sr-only-white');
            $('.soc-icons > a').removeClass('blue-color');
	    	$('.soc-icons > a').addClass('white-color');
        }

        if(Page2.classList.contains('active'))
        {
            $('a > span').removeClass('fp-sr-only-white');
	    	$('a > span').addClass('fp-sr-only-blue');
	    	$('.soc-icons > a').removeClass('blue-color');
	    	$('.soc-icons > a').addClass('white-color');
        }

        if(Page3.classList.contains('active'))
        {
        	$('a > span').removeClass('fp-sr-only-white');
	    	$('a > span').addClass('fp-sr-only-blue');
	    	$('.soc-icons > a').removeClass('white-color');
	    	$('.soc-icons > a').addClass('blue-color');
        }

        if(Page3.classList.contains('active') || Page4.classList.contains('active') || Page5.classList.contains('active'))
        {
        	$('a > span').removeClass('fp-sr-only-white');
	    	$('a > span').addClass('fp-sr-only-blue');
	    	$('.soc-icons > a').removeClass('white-color');
	    	$('.soc-icons > a').addClass('blue-color');
        }

    }, 250);

    $switchToCalculator = document.getElementById('switcher');

    $switchToCalculator.addEventListener('click', function() {
    	alert('is');
    });

});

