function updateClock() {
const now = new Date();
var hours = now.getHours();
var minutes = now.getMinutes();
var seconds = now.getSeconds();
if (hours > 12){
	hours = hours-12;
	var time = "The time is: " + hours + ":" + minutes + ":" + seconds + " PM";
	document.getElementById("clock").innerHTML=time;
	setTimeout(updateClock, 1000);
}
else{
var time = "The time is: " + hours + ":" + minutes + ":" + seconds;
document.getElementById("clock").innerHTML=time;
setTimeout(updateClock, 1000);
}
}

updateClock();

//---------------------------------------------------------------------------

//BUTTON 1
document.getElementById("button1").addEventListener("click", myFunction1);
function myFunction1(e) {
	e.preventDefault();
	var timer = prompt("Please enter number of minutes", "1");
	timer = timer * 60;
	function count(){
	  	if (timer <= 0){
	     clearInterval(timer);
	     hide(document.querySelectorAll('timer1'));
	     var pic = "https://media.giphy.com/media/Q8R0UpOLaxP68/giphy.gif"
	     document.getElementById('timer1').innerHTML="";
         document.getElementById('pic1').src = pic;
         document.getElementById('pic1').style.display='block';
	     return;
	  	}
	document.getElementById('timer1').innerHTML= timer + " seconds left!";
	timer=timer-1;
	}

	setInterval(count, 1000);
}

//BUTTON 2
document.getElementById("button2").addEventListener("click", myFunction2);
function myFunction2(e) {
	e.preventDefault();
	var timer2 = prompt("Please enter number of minutes", "1");
	timer2 = timer2 * 60;
	function count2(){
	  	if (timer2 <= 0){
	     clearInterval(timer2);
	     var pic = "https://media.giphy.com/media/26DOs997h6fgsCthu/giphy.gif"
	     document.getElementById('timer2').innerHTML="";
         document.getElementById('pic2').src = pic;
         document.getElementById('pic2').style.display='block';
	     return;
	  	}
	document.getElementById('timer2').innerHTML= timer2 + " seconds left!";
	timer2=timer2-1;
	}

	setInterval(count2, 1000);
}


//BUTTON 3
document.getElementById("button3").addEventListener("click", myFunction3);
function myFunction3(e) {
	e.preventDefault();
	var timer3 = prompt("Please enter number of minutes", "1");
	timer3 = timer3 * 60;
	function count3(){
	  	if (timer3 <= 0){
	     clearInterval(timer3);
	     var pic = "https://media.giphy.com/media/10QJW7DKfLeJb2/giphy.gif"
	     document.getElementById('timer3').innerHTML="";
         document.getElementById('pic3').src = pic;
         document.getElementById('pic3').style.display='block';
	     return;
	  	}
	document.getElementById('timer3').innerHTML= timer3 + " seconds left!";
	timer3 = timer3-1;
	}

	setInterval(count3, 1000);
}

//--------------------------------------------------------------------------- 