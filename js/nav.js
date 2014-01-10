// Toggle Nav JS

	var navTop = document.querySelector('.nav-top');
	
	document.querySelector('.nav-btn').addEventListener('click', function(e){
		e.preventDefault(); 
	
	
		if (navTop.getAttribute('data-state') == 'expanded'){
			
			navTop.setAttribute('data-state', 'collapsed');
		
		}else{
		
			navTop.setAttribute('data-state', 'expanded');
		
		}
	});
	
	$(document).ready(function(){
		$('.cast-link').click(function(){
            //$('.members').slideUp();
            $('.members').hide();
            $(this).next().fadeIn();
            //$(this).next().toggle();
            $('.cast-link.active').removeClass('active');
            $(this).addClass('active');

			return false;
		});

        $('.flexslider').flexslider({
            animation: "slide"
        });
	});