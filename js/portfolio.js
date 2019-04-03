$(document).ready(function(){
			$(".readyfade").animate({'opacity':'1'},1000);
			//For changing navbarcolor when scrolled
			var scroll_start = 0;
			var startchange = $('#startchange');
			var offset = startchange.offset();
			if (screen.width >= 769) {
				$(document).scroll(function() { 
					scroll_start = $(this).scrollTop();
					if(scroll_start > offset.top) {
					$('#navbar1').css('background-color', '#364357');
					//$('.navbar-text').html('Luis Contreras');
					} else {
						$('#navbar1').css('background-color', 'transparent');
						//$('.navbar-text').empty();
					}
				});
			}
			//Collapses Navbar when link is clicked
			$(".navbar-nav li a").click(function(event) {
				$(".navbar-collapse").collapse('hide');
			});
		});
		$(document).ready(function() {
			/* Every time the window is scrolled ... */
			$(window).scroll( function(){
				/* Check the location of each desired element */
				$('.hideme').each( function(i){
					
					var top_of_object = $(this).position().top;
					var bottom_of_window = $(window).scrollTop() + $(window).height();
					
					/* If the object is completely visible in the window, fade it it */
					if( bottom_of_window > top_of_object ){
						
						$(this).animate({'opacity':'1'},800);
							
					}
					
				}); 
			});
		});