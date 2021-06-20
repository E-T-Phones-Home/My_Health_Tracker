/*function myFunction() {
	alert('this works')
}
function yourFunction() {
	location.href = '/~/hydrangeahacks/home'
}*/
//To logout
window.logout = function () {
	fetch('/~/projects/hydrangeahacks/logout', { method: 'POST' });
	alert('Logged Out!')
	location.href = '/~/hydrangeahacks/index'
}
//Notes and questions and more
async function getNoteData() {
	const resp = await fetch('/~/hydrangeahacks/account/Notes?all=true')
	const json = await resp.json();
	const results = document.getElementById('results');
	const str = JSON.stringify(json);
	const arr = JSON.parse(str);
	var buf = "";
	for (let i = 0; i < arr.length; i++)
		buf += "<h3>Note " + (i + 1) + "</h3><strong>" + arr[i].date + "  " + arr[i].time + "</strong><br>" + arr[i].notes + "<br>"
	buf += "<br>"
	//	results.innerHTML = JSON.stringify(arr[0].notes);
	results.innerHTML = buf;
	//	results.innerHTML = JSON.stringify(json);
	//	results.innerHTML = JSON.parse(json);
}
getNoteData();
async function getQuestionData() {
	const resp = await fetch('/~/hydrangeahacks/account/Questions?all=true')
	const json = await resp.json();
	const results = document.getElementById('questionsresults');
	const str = JSON.stringify(json);
	const arr = JSON.parse(str);
	var buf = "";
	for (let i = 0; i < arr.length; i++)
		buf += "<h3>Question " + (i + 1) + "</h3><strong>" + arr[i].date + "  " + arr[i].time + "</strong><br>" + arr[i].questions + "<br>"
	buf += "<br>"
	results.innerHTML = buf;
}
getQuestionData();
async function getGoalData() {
	const resp = await fetch('/~/hydrangeahacks/account/Goals?all=true')
	const json = await resp.json();
	const results = document.getElementById('goalsresults');
	const str = JSON.stringify(json);
	const arr = JSON.parse(str);
	var buf = "";
	for (let i = 0; i < arr.length; i++)
		buf += "<h3>Goal " + (i + 1) + "</h3><strong>" + arr[i].date + "  " + arr[i].time + "</strong><br>" + arr[i].goals + "<br>"
	buf += "<br>"
	results.innerHTML = buf;
}
getGoalData();
async function getAchievementData() {
	const resp = await fetch('/~/hydrangeahacks/account/Achievements?all=true')
	const json = await resp.json();
	const results = document.getElementById('achievementsresults');
	const str = JSON.stringify(json);
	const arr = JSON.parse(str);
	var buf = "";
	for (let i = 0; i < arr.length; i++)
		buf += "<h3>Achievement " + (i + 1) + "</h3><strong>" + arr[i].date + "  " + arr[i].time + "</strong><br>" + arr[i].achievements + "<br>"
	buf += "<br>"
	results.innerHTML = buf;
}
getAchievementData();

//Dates and times
var d = new Date();
// Set date
document.getElementById("date")
	.value = d.toDateString();
// Set time
var hours = d.getHours();
var mins = d.getMinutes();
var seconds = d.getSeconds();
document.getElementById("time")
	.value = hours + ":" + mins + ":" + seconds;
// Today's date
var day = d.getDate();
var month = d.getMonth() + 1;
var year = d.getFullYear();
// Current date
document.getElementById("date")
	.value = month + "/" + day + "/" + year;

//Mood Code
var nScore = 0;
var pScore = 0;
// Get Id of variables//
var bm1 = document.getElementById("bm1");
var bm2 = document.getElementById("bm2");
var bm3 = document.getElementById("bm3");
var bm4 = document.getElementById("bm4");
var bm5 = document.getElementById("bm5");
var bm6 = document.getElementById("bm6");
var bm7 = document.getElementById("bm7");
var bm8 = document.getElementById("bm8");
var bm9 = document.getElementById("bm9");
var result = document.getElementById("result");
//Event Listeners
bm1.addEventListener("click", n);
bm2.addEventListener("click", n);
bm3.addEventListener("click", n);
bm4.addEventListener("click", n);
bm5.addEventListener("click", n);
bm6.addEventListener("click", p);
bm7.addEventListener("click", p);
bm8.addEventListener("click", p);
bm9.addEventListener("click", p);
bm1.addEventListener("click", disableQ1);
bm2.addEventListener("click", disableQ2);
bm3.addEventListener("click", disableQ3);
bm4.addEventListener("click", disableQ4);
bm5.addEventListener("click", disableQ5);
bm6.addEventListener("click", disableQ6);
bm7.addEventListener("click", disableQ7);
bm8.addEventListener("click", disableQ8);
bm9.addEventListener("click", disableQ9);

function n() {
	nScore = 1;
	updateResult();
}

function p() {
	pScore = 1;
	updateResult();
}

function updateResult() {
	var result = document.getElementById("result");
	updateNCount(nScore);
	if (nScore == 1) {
		result.innerHTML = "<br><p> Sorry that you're not feeling well. You can find some exciting activities to do! Simply hover over our logo in the navigation bar to get started. Once you find something to do, you may learn a thing or two 😎 Stay awesome!!</p>";
	} else {
		result.innerHTML = "<br><p> Glad to have you back! Let's keep that vibe pumping. Stay awesome!!</p>";
	}
}

// Disabling other options. 
function disableQ1() {
	document.getElementById("bm2")
		.disabled = true;
	document.getElementById("bm3")
		.disabled = true;
	document.getElementById("bm4")
		.disabled = true;
	document.getElementById("bm5")
		.disabled = true;
	document.getElementById("bm6")
		.disabled = true;
	document.getElementById("bm7")
		.disabled = true;
	document.getElementById("bm8")
		.disabled = true;
	document.getElementById("bm9")
		.disabled = true;
}

function disableQ2() {
	document.getElementById("bm1")
		.disabled = true;
	document.getElementById("bm3")
		.disabled = true;
	document.getElementById("bm4")
		.disabled = true;
	document.getElementById("bm5")
		.disabled = true;
	document.getElementById("bm6")
		.disabled = true;
	document.getElementById("bm7")
		.disabled = true;
	document.getElementById("bm8")
		.disabled = true;
	document.getElementById("bm9")
		.disabled = true;
}

function disableQ3() {
	document.getElementById("bm1")
		.disabled = true;
	document.getElementById("bm2")
		.disabled = true;
	document.getElementById("bm4")
		.disabled = true;
	document.getElementById("bm5")
		.disabled = true;
	document.getElementById("bm6")
		.disabled = true;
	document.getElementById("bm7")
		.disabled = true;
	document.getElementById("bm8")
		.disabled = true;
	document.getElementById("bm9")
		.disabled = true;
}

function disableQ4() {
	document.getElementById("bm1")
		.disabled = true;
	document.getElementById("bm2")
		.disabled = true;
	document.getElementById("bm3")
		.disabled = true;
	document.getElementById("bm5")
		.disabled = true;
	document.getElementById("bm6")
		.disabled = true;
	document.getElementById("bm7")
		.disabled = true;
	document.getElementById("bm8")
		.disabled = true;
	document.getElementById("bm9")
		.disabled = true;
}

function disableQ5() {
	document.getElementById("bm1")
		.disabled = true;
	document.getElementById("bm2")
		.disabled = true;
	document.getElementById("bm3")
		.disabled = true;
	document.getElementById("bm4")
		.disabled = true;
	document.getElementById("bm6")
		.disabled = true;
	document.getElementById("bm7")
		.disabled = true;
	document.getElementById("bm8")
		.disabled = true;
	document.getElementById("bm9")
		.disabled = true;
}

function disableQ6() {
	document.getElementById("bm1")
		.disabled = true;
	document.getElementById("bm2")
		.disabled = true;
	document.getElementById("bm3")
		.disabled = true;
	document.getElementById("bm4")
		.disabled = true;
	document.getElementById("bm5")
		.disabled = true;
	document.getElementById("bm7")
		.disabled = true;
	document.getElementById("bm8")
		.disabled = true;
	document.getElementById("bm9")
		.disabled = true;
}

function disableQ7() {
	document.getElementById("bm1")
		.disabled = true;
	document.getElementById("bm2")
		.disabled = true;
	document.getElementById("bm3")
		.disabled = true;
	document.getElementById("bm4")
		.disabled = true;
	document.getElementById("bm5")
		.disabled = true;
	document.getElementById("bm6")
		.disabled = true;
	document.getElementById("bm8")
		.disabled = true;
	document.getElementById("bm9")
		.disabled = true;
}

function disableQ8() {
	document.getElementById("bm1")
		.disabled = true;
	document.getElementById("bm2")
		.disabled = true;
	document.getElementById("bm3")
		.disabled = true;
	document.getElementById("bm4")
		.disabled = true;
	document.getElementById("bm5")
		.disabled = true;
	document.getElementById("bm6")
		.disabled = true;
	document.getElementById("bm7")
		.disabled = true;
	document.getElementById("bm9")
		.disabled = true;
}

function disableQ9() {
	document.getElementById("bm1")
		.disabled = true;
	document.getElementById("bm2")
		.disabled = true;
	document.getElementById("bm3")
		.disabled = true;
	document.getElementById("bm4")
		.disabled = true;
	document.getElementById("bm5")
		.disabled = true;
	document.getElementById("bm6")
		.disabled = true;
	document.getElementById("bm7")
		.disabled = true;
	document.getElementById("bm8")
		.disabled = true;
}
//Cookies for mood code
function setCookie(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	var expires = "expires=" + d.toGMTString();
	//document.cookie = "nCount=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

function updateNCount(nScore) {
	var nCount = getCookie("nCount");
	var cnt = Number(nScore) + Number(nCount);
	setCookie("nCount", cnt, 30);
	if (nCount > 30) {
		alert("Hey there! We see that you have been feeling rather unhappy these days. Please go to the NIMH page to read more about mental health, and how you can feel better again! As always, stay awesome!! We love you ❤");
		setCookie(nCount = 0);
	}
}