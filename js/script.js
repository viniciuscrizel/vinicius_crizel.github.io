		function toMove(x){
			$('html, body').animate({
				scrollTop: $("#"+x).offset().top
				  }, 1500);	
		}
		function aparece(){
			var i = document.getElementsByTagName('head').offsetTop;
			alert(i);
		}