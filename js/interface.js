$(document).ready( function(){

	$(window).load(function(){
		setTimeout(function() { $('.search-box ').addClass('show') }, 500)
		
	});

	$('[data-target-show]').click(function(){
		var target=$(this).attr('data-target-show');
		$('[id="' + target + '"]').slideToggle(200)
		$(this).toggleClass('active');
		return false;
	});

	$('.selectpicker').selectpicker();

	$( ".ui-draggable" ).draggable({ revert: "valid" });

    $('input[type="checkbox"]:checked, input[type="radio"]:checked').closest('.radio, .radio-inline').addClass('checked');
 
    $('.checkbox, .checkbox-inline, .radio, .radio-inline').click(function(){
 	var radioName = $(this).find('input[type="radio"]').attr('name');

    if ($(this).find('input[type="checkbox"], input[type="radio"]').is(':checked')) { 
		$('input[name="' + radioName + '"]').closest('.radio, .radio-inline').removeClass('checked');
		$(this).addClass('checked');
    } 

    else { 
       $(this).removeClass('checked'); } 
     });

 $('.has-tooltip').tooltip();

	 function setColor(){

		$(".search-box").css({
			 opacity: $(".slider").val()/10
		});
	}

	var sliders = $('.slider');

	sliders.noUiSlider({
		 range: {
			'min': 3,
			'max': 10
		}
		,start: 10
	
		
	});

	sliders.on('slide', setColor);

});
