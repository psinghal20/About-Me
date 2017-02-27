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
					$("#first_div_content").css({"transform":"translate(0px,0px)"});
					$("#second_div_content").css({"transform":"translate(0px,-1962px)"});
					break;
				}
		case 25:{
					$("#first_div_content").css({"transform":"translate(0px,-654px)"});
					$("#second_div_content").css({"transform":"translate(0px,-1308px)"});
					break;
				}
		case 50:{
					$("#first_div_content").css({"transform":"translate(0px,-1308px)"});
					$("#second_div_content").css({"transform":"translate(0px,-654px)"});
					break;
				}
		case 75:{
					$("#first_div_content").css({"transform":"translate(0px,-1962px)"});
					$("#second_div_content").css({"transform":"translate(0px,0px)"});
					break;
				}		
	}
});
function about(){
	document.getElementById("first_div_content").style.transform="translate(0px,0px)";
	document.getElementById("second_div_content").style.transform="translate(0px,-1962px)";
}
function interests(){
	document.getElementById("first_div_content").style.transform="translate(0px,-654px)";
	document.getElementById("second_div_content").style.transform="translate(0px,-1308px)";
}
function work(){
	document.getElementById("first_div_content").style.transform="translate(0px,-1308px)";
	document.getElementById("second_div_content").style.transform="translate(0px,-654px)";	
}
function contact(){
	document.getElementById("first_div_content").style.transform="translate(0px,-1962px)";
	document.getElementById("second_div_content").style.transform="translate(0px,0px)";
}
