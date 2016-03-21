/* ###### init skrol to point  ######*/
/* ###### bower i page-scroll-to-id  ######*/
/*(function($){
    $(window).load(function(){
        $("a[rel='m_PageScroll2id']").mPageScroll2id({
				    offset:200,
				    highlightClass:"left-nav-el-active"
				});
    });
 })(jQuery);*/ 

$(document).ready(function(){

	$('.minus').click(function () {
	        var $input = $(this).parent().find('input');
	        var count = parseInt($input.val()) - 1;
	        count = count < 1 ? 0 : count;
	        $input.val(count);
	        $input.change();
	        return false;

	    });

	$('.plus').click(function () {
	    var $input = $(this).parent().find('input');
	    $input.val(parseInt($input.val()) + 1);
	    $input.change();
	    return false;

	});

	$('.header-menu-toggle').click(function(){
		$('.header-menu').slideToggle(function(){
			if ($(this).is(':visible'))
			$(this).css('display','flex');
		})
	})
	$('.header-menu-el-service').click(function(){
		$('.header-menu-sub-menu').slideToggle();
	})
	
	/* ###### init EasyDropDown style for selects  ######*/
	/* ###### bower i easydropdown  ######*/
	/*<select class="dropdown"> add class (dropdown)
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
    <option value="4">Option 4</option>
	</select>
*/

	/* ###### init bpopup  ######*/
	/* ###### bower i bpopup  ######*/
	// Add class hide
	// $('.section-main-form button').click(function(){
	//	$('.section-modal').bPopup({
	// 			closeClass:'section-modal-but',
	//			position:['auto','auto'], // position center
	//			follow: [true,false],
	// 	}); 
	//})


	/* ###### init stickUp  ######*/
	/* ###### bower i sticky  ######*/
	/*$(".header").sticky({topSpacing:0});
	if ($(window).width() <= '768'){
		$(".header").on('sticky-start', function() {
			$('.header-logo').slideToggle()
			$('.header-contact').slideToggle()
		});
		$(".header").on('sticky-end', function() {
			$('.header-logo').slideToggle()
			$('.header-contact').slideToggle()
		});
	}
*/
	/* ###### init OwlCarousel2  ######*/
	/*!!! add class owlCarousel !!!*/
	/* ###### bower i OwlCarousel2 ######*/
	$(".slider-food-wraper").owlCarousel({
	 	items : 3,
	 	responsive : {
	 		0:{
			 	items : 1
		 	},
		 	768:{
			 	items : 2
		 	},
		 	960:{
			 	items : 2
		 	},
		 	1280:{
			 	items : 3
		 	}
		 	
	  },
	 	margin:50,
	 	pagination : false,
	 	autoPlay : true,
	 	nav:true,
		navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']
	 	}
	 ); 	
	$(".review-slider").owlCarousel({
	 	items : 1,
	 	pagination : false,
	 	autoPlay : true,
	 	nav:true,
		navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']
	 	}
	 ); 	

	/* ###### init validate form  ######*/
	/* ###### bower i jquery-validation ######*/
	/*$('#myform').validate({
			rules:{ //правила для полей 
				name:{
					required:true,
					minlength:5 //минимальное значение поля
				},
				phone:{
					required:true,
					number:true
				}
			},
			messages:{
				name:{
					required: 'Это поле обязатлеьно для заполнения', //какое сообщение будет выводиться
					minlength:'Имя должно быть не меньше 5 символов'
				},
				phone:{
					required: 'Это поле обязатлеьно для заполнения',
					number:'Введите правильный телефон'
				},
				
			}
			submitHandler:function(){ //выполнять если все валидно
					alert('Форма заполнена правильно');
				}
	})*/

	/* ###### init animatedModal  ######*/
	/* ###### bower i animatedModal  ######*/
	// $(".play").animatedModal({
	//  	 animatedIn:'lightSpeedIn',
	//     animatedOut:'bounceOutDown',
	//     color:'#0394c7'
	//  	});

	/* ###### init responsive-tabs  ######*/
	/* ###### bower i responsive-tabs  ######*/
    
    if ($(window).width() > '640'){
			$('.vacancy-wraper').responsiveTabs({
        collapsible: true,
        setHash: true,
        animation: 'slide',
        duration: 300
        //scrollToAccordion: true
        
    	})
		}
		else{
			$('.vacancy-wraper').responsiveTabs({
        collapsible: true,
        setHash: true,
        animation: 'slide',
        duration: 300,
        scrollToAccordion: true,
        startCollapsed: true
    	});
		}

	/* ###### init fancybox  ######*/
	/* ###### bower i fancybox  ######*/
	// $(".play").fancybox();
	// a(href="img/item-house-1.png" rel="group-element(для объединения в группу)") - image in a
	//	img(src="img/item-house-1.png", alt="")
	
})