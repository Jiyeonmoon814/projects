let fill = document.querySelector('.fill');
let audios = ['./files/Covid-19.mp3', './files/Body Shake.mp3', './files/RAIN.mp3', './files/ACIIID.mp3', './files/Danzel.mp3'];
let covers = ['img/Marshmello.jpg', 'img/2.jpg', 'img/3.jpg'];
let currentTime = document.querySelector('.time');
let seekbar = document.querySelector('.seekbar');
let audio = document.getElementById("audio");
var currentSong = 0;
audio.setAttribute("src", audios[currentSong]);
audio.addEventListener("ended", nextAudio);

//Test
//let seekbar = document.querySelector(".seekbar");
//console.log(seekbar);
//console.log(seekbar.value);

function playSong() {
	audio.setAttribute("src", audios[currentSong]);
	audio.play();
	playBtn = document.querySelector(".play-btn");
	playBtn.innerHTML = '<i class="fa fa-pause"></i>';
	
	//change the title
	document.querySelector(".text").firstElementChild.innerHTML = audios[currentSong].replace('./files/', '').replace(".mp3", "");

}

let select = document.getElementById("select");
select.addEventListener('change',function(){
	console.log(select.value);
	audio.src = select.value;
	console.log(audio.src);
	for(let index in audios){
		if(select.value == audios[index]){
			currentSong = index;
			console.log(index);
		}
	}
	playSong();
});

let file = document.getElementById('file');
file.addEventListener('change',function(){
	//console.log(file.value);
    let i = file.value.substr(12);  // c://fake-rute//1.mp3
    audios.push("./files/"+i);
	console.log(audios);
	let eleOption = document.createElement("option");
	eleOption.appendChild(document.createTextNode("./files/"+i));
	document.getElementById("select").appendChild(eleOption);
});


function togglePlayPause(){
	if(audio.paused){
		playSong();
		let playBtn = document.querySelector('.play-btn');
		playBtn.innerHTML = '<i class="fa fa-pause"></i>';
	}else{
		audio.pause();
		let playBtn = document.querySelector('.play-btn');
		playBtn.innerHTML = '<i class="fa fa-play"></i>';
	}
}

audio.addEventListener('timeupdate', function(){
	let position = audio.currentTime / audio.duration;
	fill.style.width = position * 100 + '%';
	seekbar.value = position * 100;

	convertTime(Math.round(audio.currentTime));
	totalTime(Math.round(audio.duration));
});

function moveSeekBar(value){
	audio.currentTime = $('.seekbar').val() * audio.duration / 100;
}

function convertTime(seconds){
	let min = Math.floor(seconds / 60);
	let sec = seconds % 60;

	min = (min < 10) ? "0" + min : min;
	sec = (sec < 10) ? "0" + sec : sec;
	document.getElementById("flow").innerHTML = min + ':' + sec;
}

function totalTime(seconds){
	let min = Math.floor(seconds / 60);
	let sec = seconds % 60;
	
	min = (min < 10) ? "0" + min : min;
	sec = (sec < 10) ? "0" + sec : sec;

	min = (isNaN(min)) ? "00" : min;
	sec = (isNaN(sec)) ? "00" : sec;

	document.getElementById("total").innerHTML = min + ":" + sec;
}

//next and prev buttons
function nextAudio(){
	let random = document.getElementById("random");
	if(random.getAttribute("class") == "random-active"){
		let num = Math.trunc(Math.random()*audios.length);
		currentSong = num;
		playSong();
	}else{
		currentSong++;
		if(currentSong == audios.length){
			currentSong = 0;
		}
		playSong();
	}
	
	//document.querySelector('.img').children[0].setAttribute('src', covers[currentSong]);
}

function prevAudio() {
	currentSong--;
	if(currentSong < 0){
		currentSong = audios.length - 1;
	}
	playSong();
	playBtn = document.querySelector(".play-btn");
	playBtn.innerHTML = '<i class="fa fa-pause"></i>';

  //$(".img img").attr("src", covers[currentSong]);
}

function retweet(){
	let retweet = document.getElementById("retweet");
	if(retweet.getAttribute("class") == "retweet-inactive"){
		retweet.setAttribute("class", "retweet-active");
		alert("유료회원만 이용 가능합니다.");
	}else{
		retweet.setAttribute("class", "retweet-inactive");
		alert("유료회원만 이용 가능합니다.");
		
	}
}

function random(){
	let random = document.getElementById("random");
	if(random.getAttribute("class") == "random-inactive"){
		random.setAttribute("class", "random-active");
	}else{
		random.setAttribute("class", "random-inactive");
	}
}

function backward(){
	audio.currentTime -= 10;
}

function forward(){
	audio.currentTime += 10;
}

function changeVolume(){
	let vol = document.getElementById("volumeRange");
	audio.volume = vol.value / 100.0;
};

function toggleVolumeMute(){
	let vol = document.getElementById("volumeRange");
	if(audio.volume == 0){
		audio.volume = 0.5;
		vol.value = 50;
		let volumeBtn = document.querySelector('.volume-btn');
		volumeBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
	}else{
		audio.volume = 0;
		vol.value = 0;
		let volumeBtn = document.querySelector('.volume-btn');
		volumeBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
	}
}



