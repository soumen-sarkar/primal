$(window).load(function(){
	
	//Image carousel
	$('.carousel').carousel({
		interval: 4000
	})	
    
    //Navigation Dropdown onHover
    /*$('ul.nav li.dropdown').hover(function() {
        $(this).addClass('open');
        $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(300);
        }, function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(300);
    });*/
    
	//Space for useing another script
	var owl = $("#teamSlide");

      owl.owlCarousel({
          items : 4, //10 items above 1000px browser width
          itemsDesktop : [1300,4], //5 items between 1000px and 901px
          itemsDesktopSmall : [1024,3], // 3 items betweem 900px and 601px
          itemsTablet: [767,2], //2 items between 600 and 0;
          itemsMobile : [480,1], // itemsMobile disabled - inherit from itemsTablet option
          autoPlay : false
      });

      // Custom Navigation Events
      $(".next").click(function(){
        owl.trigger('owl.next');
      })
      $(".prev").click(function(){
        owl.trigger('owl.prev');
      })
      
          
    $('#teamSlide .item').on('click', function(){
        $('#teamSlide .item').removeClass('active');
        $(this).toggleClass('active');
    });

   
   
  
   $('.customNavigation .next').on('click', function(){	
      if($('.owl-item > .active').parent().next().hasClass('owl-item')){
         $('.owl-item > .active').parent().next().find('.item').addClass('active').parent().prev().find('.item').removeClass('active');
      }else{
        $('.owl-item').find('.item').removeClass('active');
        $('.owl-item:eq(0)').find('.item').addClass('active');
      }	
      
      $('.tab-pane').removeClass('active');
      var target_tab = $('.owl-item > .active').find('a').attr('href');
      $(target_tab).addClass('active');
   });
   $('.customNavigation .prev').on('click', function(){	
      if($('.owl-item > .active').parent().prev().hasClass('owl-item')){
         $('.owl-item > .active').parent().prev().find('.item').addClass('active').parent().next().find('.item').removeClass('active');
      }else{
         var max_item = $('.owl-item').length-1;
         $('.owl-item').find('.item').removeClass('active');
         $('.owl-item:eq('+max_item+')').find('.item').addClass('active');
      }
      $('.tab-pane').removeClass('active');
      var target_tab = $('.owl-item > .active').find('a').attr('href');
      $(target_tab).addClass('active');
   });	
	
	
});