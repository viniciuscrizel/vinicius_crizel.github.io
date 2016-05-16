		function toMove(x){
			$('html, body').animate({
				scrollTop: (parseInt($("#"+x).offset().top) - 200) + "%"
				  }, 1500);	
		}