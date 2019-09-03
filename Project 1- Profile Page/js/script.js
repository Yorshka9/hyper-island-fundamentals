// adds the "unhide" class to "hidden" elements to simulate a delayed opacity transition

$('.hidden').addClass('unhide');



    // function for setting the opacity of elements with the class "hideme" when they are scrolled into view

    $(document).ready(function() {
      
        // every time the window is scrolled ...
        $(window).scroll( function(){
        
            // check the location of each desired element 
            $('.hideme').each( function(i){
                
                var bottom_of_object = $(this).position().top + $(this).outerHeight();
                var bottom_of_window = $(window).scrollTop() + $(window).height();
                
                // if the object is completely visible in the window, fade it it
                if( bottom_of_window > bottom_of_object ){
                    
                    $(this).animate({'opacity':'1'},1500);
                        
                }
                
            }); 
        
        });
        
    });