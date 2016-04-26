		function toMove(x){
			var i = x;
			$('html, body').animate({
			 scrollTop: $("#"+x).offset().top
			  }, 1500);	
			document.getElementById('bigthree').style.display = 'none';
		}

function openThree(){
	 var display = document.getElementById('bigthree').style.display;
    if(display == "none")
        document.getElementById('bigthree').style.display = 'block';
    else
        document.getElementById('bigthree').style.display = 'none';
}
function closeThree(){
	document.getElementById('bigthree').style.display = 'none';
}