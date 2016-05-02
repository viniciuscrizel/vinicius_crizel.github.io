		function toMove(x){
			$('html, body').animate({
				scrollTop: (parseInt($("#"+x).offset().top) - 150) + "%"
				  }, 1500);	
		}
		function aparece(){
			var i = document.getElementsByTagName('head').offsetTop;
			alert(i);
		}