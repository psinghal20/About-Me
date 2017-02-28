var index=1;
$(document).on('mousewheel',function (evt) {
      var delta = evt.originalEvent.wheelDelta;
      console.log('scroll ' + delta, evt + index);
	if(delta<0){
		if(index<75)
			index++;
	}
	else{
		if(index>1)
			index--;
	}
	switch(index){
		case 1:{
					$("#first_div_content").css({"transform":"translate(0,0)"});
					$("#second_div_content").css({"transform":"translate(0,-300%)"});
					break;
				}
		case 25:{
					$("#first_div_content").css({"transform":"translate(0,-100%)"});
					$("#second_div_content").css({"transform":"translate(0,-200%)"});
					break;
				}
		case 50:{
					$("#first_div_content").css({"transform":"translate(0,-200%)"});
					$("#second_div_content").css({"transform":"translate(0,-100%)"});
					break;
				}
		case 75:{
					$("#first_div_content").css({"transform":"translate(0,-300%)"});
					$("#second_div_content").css({"transform":"translate(0,0)"});
					break;
				}		
	}
});
function about(){
	document.getElementById("first_div_content").style.transform="translate(0,0)";
	document.getElementById("second_div_content").style.transform="translate(0,-300%)";
}
function interests(){
	document.getElementById("first_div_content").style.transform="translate(0,-100%)";
	document.getElementById("second_div_content").style.transform="translate(0,-200%)";
}
function work(){
	document.getElementById("first_div_content").style.transform="translate(0,-200%)";
	document.getElementById("second_div_content").style.transform="translate(0,-100%)";	
}
function contact(){
	document.getElementById("first_div_content").style.transform="translate(0,-300%)";
	document.getElementById("second_div_content").style.transform="translate(0,0)";
}
