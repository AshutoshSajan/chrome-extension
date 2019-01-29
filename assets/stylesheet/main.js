var imageArray = ["./assets/media/slide01.jpg",
"./assets/media/slide02.jpg",
"./assets/media/slide03.jpg",
"./assets/media/slide04.jpg",
"./assets/media/slide05.jpg",
"https://images.unsplash.com/photo-1496715976403-7e36dc43f17b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
];

function randomBg(){
	var random = Math.floor(Math.random() * (imageArray.length - 1));
	document.body.style.background = `url(${imageArray[random]})`;
	document.body.style.backgroundSize = "cover";
}
randomBg();
setInterval(randomBg, 10000);

function login(){
	var loginDiv = document.createElement("div");
	loginDiv.setAttribute("class", "login-container");
	var  loginPage = document.createElement("input");
	var label = document.createElement("label")
	label.setAttribute("for", "input");
	label.innerText = "what is your name";

	document.body.appendChild(loginDiv)
	document.body.appendChild(loginPage);
	document.body.appendChild(label);

}

