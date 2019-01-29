function clock (){
	date = new Date();
	// var month = date.getMonth();
	var hours = date.getHours();
	var min = date.getMinutes();
	var sec = date.getSeconds();
	var time = document.querySelector(".date-header");
	time.innerText = `${hours}: ${min}: ${sec}`;
	var greetingTxt = document.createElement("p");

	// if (hours == 0 && hours <= 12){
	// 	greetingTxt.innerText = "good morning";
	// 	document.body.appendChild(greetingTxt);
	// }else if(hours > 12 && hours < 16) {
	// 	greetingTxt.innerText = "good afternoon";
	// }
}
clock();
setInterval(clock, 1000);

