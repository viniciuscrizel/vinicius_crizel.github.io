		function toMove(x){
			$('html, body').animate({
				scrollTop: (parseInt($("#"+x).offset().top) - 150) + "%"
				  }, 1500);	
		}