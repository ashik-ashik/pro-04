



    $(document).ready(function(){

        // gototop
        $(window).scroll(function(){
            if($(this).scrollTop()>200){
                document.querySelector('.gototop').style.visibility = "visible";
                $('.gototop').fadeIn();
            }else{
                $('.gototop').fadeOut(); 
            }
        });
    
        $('.gototop').click(function(){
            $('html, body').animate({scrollTop:0}, 1000)
        })
    
        // slider


        $('.flexslider.top_slider').flexslider({
          animation: "fade",
          controlNav: true,
          directionNav: true,
          prevText: "&larr;",
          nextText: "&rarr;"
      });
        $('#recent-slider').owlCarousel({
            loop:true,
            margin:10,
            // autoplay:true,
            dots:false,
            responsive:{
                0:{
                    items:1,
                },
                767:{
                    items:1,
                    nav:true,
                },
                992:{
                    items:2,
                    nav:true,
                },
                1024:{
                    items:4,
                    nav:true,
                }
            }
        });
        $('#testimonial-slider').owlCarousel({
            loop:true,
            margin:10,
            autoplay:true,
            speed:10000,
            nav:false,
            responsive:{
                0:{
                    items:1,
                    dots:true,
                },
                700:{
                    items:1,
                    dots:true,
                },
                1024:{
                    items:1,
                    dots:true,
                }
            }
        });


        // proggress bar
        $('.progress_skill .bar').data('width', $(this).width()).css({
          width : 100,
          height:50
      });
        $(window).scroll(function() {
            $('.progress_skill .bar').each(function() {
                if (goScrolling($(this))) {
                    $(this).css({
                        width : $(this).attr('data-value') + '%',
                        height : $(this).attr('data-height') + '%'
                    });
                }
            });
        });


    

    // Init AOS
    function aos_init() {
        AOS.init({
          duration: 800,
        //   easing: "ease-in-out",
          once: true
        });
      }
      $(window).on('load', function() {
        aos_init();
      });
    
 });

