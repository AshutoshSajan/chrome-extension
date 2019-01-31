// =========================================================================
// random bg function
// =========================================================================

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
	document.body.style.transition = `background 4s ease-out`;
}
randomBg();
setInterval(randomBg, 10000);

// =========================================================================
// login function
// =========================================================================

var userName =  localStorage.getItem("userInfo") || '';

function login(){
	var loginDiv = document.createElement("div");
	loginDiv.setAttribute("class", "login-container");
	var  loginPage = document.createElement("input");
	loginPage.placeholder = "what is your name";

	loginPage.addEventListener("keyup", (e) => {
		if(e.keyCode === 13){
			var p = document.createElement("p");
			p.innerText = `Hello ${loginPage.value}`;
			loginDiv.replaceChild(p, loginPage);
			localStorage.setItem("userInfo", userName);
		}
	})
	localStorage.setItem("userInfo", userName);
	document.body.appendChild(loginDiv)
	loginDiv.appendChild(loginPage);
}
login();



