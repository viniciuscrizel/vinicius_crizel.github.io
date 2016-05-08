		function toMove(x){
			$('html, body').animate({
				scrollTop: (parseInt($("#"+x).offset().top) - 145) + "%"
				  }, 1500);	
		}
		function somemenu(){
			alert(document.getElementById('menu').offsetTop);
			//if (document.getElementById('menu').offsetTop < 200){
				//document.getElementById('menu').className = 'header-temp';
				//document.getElementById('container').style = "display: none;";
			//}
		}