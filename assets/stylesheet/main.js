// =========================================================================
// random bg function
// =========================================================================

// var imageArray = ["./assets/media/slide01.jpg",
// "./assets/media/slide02.jpg",
// "./assets/media/slide03.jpg",
// "./assets/media/slide04.jpg",
// "./assets/media/slide05.jpg",
// "https://images.unsplash.com/photo-1496715976403-7e36dc43f17b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
// ];

function randomBg(){
	if(navigator.onLine == true){
			document.body.style.background = `url(https://source.unsplash.com/random/1920×1080) no-repeat center`;
			document.body.style.backgroundSize = 'cover';

	} else if(navigator.onLine == !true){
		// // var random = Math.floor(Math.random() * (imageArray.length - 1));
		// // document.body.style.background = `url(${imageArray[random]})`;
		document.body.style.background = `url("../../assets/media/sunset.jpg") no-repeat center`;
		document.body.style.backgroundSize = 'cover';
		console.log("no internet connection");
	}
}

randomBg();

// =========================================================================
// login function
// =========================================================================

var userData =  localStorage.getItem("userInfo") || '';
var h2;
var timeText;
// console.log(timeText);
function login(data){
	if(data){
		h2 = document.createElement("h2");
		h2.innerText = `${timeText} ${data}`;
		h2.classList.add("greet");
		document.body.appendChild(h2);
		return;
	}else if(!data) {
		var loginDiv = document.createElement("div");
		loginDiv.setAttribute("class", "login-container");
		var  loginInput = document.createElement("input");
		loginInput.classList.add("loginInput");
		loginInput.placeholder = "Enter your name";

		loginInput.addEventListener("keyup", (e) => {
			if(e.keyCode === 13){
				var userName = e.target.value;
				var p = document.createElement("p");
				p.classList.add("welcm-txt")
				p.innerText = `Hello ${userName}`;
				loginDiv.replaceChild(p, loginInput);
				loginDiv.style.borderColor= "transparent";
				loginDiv.style.boxShadow = "none";
				localStorage.setItem("userInfo", userName);
			}
		})
	}
	// localStorage.setItem("userInfo", userName);
	document.body.appendChild(loginDiv)
	loginDiv.appendChild(loginInput);
	loginDiv ? document.body.setAttribute("id", "body") : document.body.style.background="#111"
	// console.log(document.body)
}

function timeGreet(){
	if(new Date().getHours() >= 0 && new Date().getHours() < 13){
		timeText = "Good Morning";
		login(userData);
	}else if(new Date().getHours() >= 12 && new Date().getHours() < 17){
		timeText = "Good Afternoon";
		login(userData);
	} else if(new Date().getHours() >= 16 && new Date().getHours() < 24){
		timeText = "Good Evening";
		login(userData);
	}
}

timeGreet()

// function checkTaskDecoration(){
// 	if(tododata.todoStatus === true){

// 	}
// }

