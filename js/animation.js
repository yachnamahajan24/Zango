$(document).ready(function(){
			$(".container #post-content #topImage").css({"background-image": 'url( ./images/houses/house1.jpg)'});         
			$("#house1, #house2, #house3, #house4, #house5, #house6").click(function(e){
			   var image = $(e.currentTarget).find("img").attr("src");
			   $("#topImage").css({"background-image": 'url( ./'+image});
			   $("#topImage").css({"transition": 'background-image 3s'});
			   $(".container").find("h1").text( $(e.currentTarget).find("h1").text());
			   $(".container").find("h2").text( $(e.currentTarget).find("h2").text());
                $(".container").find(".p_scnd").text( $(e.currentTarget).find(".p_third").text());
			   $('html,body').animate({scrollTop:0},0);
                
			});         		  
});