		function toMove(x){
			$('html, body').animate({
				scrollTop: (parseInt($("#"+x).offset().top) - 150) + "%"
				  }, 1500);	
		}
		var cont = 0;
		function teste(){
			alert(cont);
			cont++;
		}