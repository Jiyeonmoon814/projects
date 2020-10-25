let myVideo = document.getElementById("video1");
let list = ["mov_bbb.mp4", "video2.mp4", "video3.mp4"];
let mylist = document.getElementById("list");
let index = 0
let videofile=document.getElementById("videofile");

function playPause() {
    if (myVideo.paused) {
        myVideo.play();
        console.log(myVideo.currentTime);
    } else {
        myVideo.pause();
        console.log(myVideo.currentTime);
    }
}
function skippr() {
    myVideo.currentTime-=5;
}
function skipFw() {
    myVideo.currentTime+=5;
}
document.getElementById("skipfw").addEventListener("click",skipFw);
document.getElementById("skipbw").addEventListener("click",skippr);

function makeBig() {
    myVideo.width += 100;
}

function makeSmall() {
    myVideo.width -= 100;
}

function makeFull(){
    myVideo.webkitRequestFullscreen(); //only for chrome
}

function makeNormal() {
    myVideo.width = 540;
}

function volumeUp(){
    myVideo.volume+=0.2;
}
function volumeDown(){
    myVideo.volume-=0.2;
}

function capture() {
    //draw the current instance of the video element on the canvas and then 
    //retrieve the blob from canvas and use that blob 
    //as source for image or upload the blob directly to storage like AWS or any other service.
    var canvas = document.getElementById("canvas");
    canvas.width = myVideo.videoWidth;
    canvas.height = myVideo.videoHeight;
    canvas.getContext('2d').drawImage(myVideo, 0, 0, myVideo.videoWidth, myVideo.videoHeight);
    //We are drawing the video element on the canvas using drawImage function of canvas element.
    var img = document.createElement('img');
    canvas.toBlob((blob) => {
        //Canvas element gives a callback to listen to the event 
        //after blob is prepared from canvas and is ready to be consumed.
        img.src = URL.createObjectURL(blob);
        // //Canvas element gives a callback to listen to the event 
        //window object comes with static function of URL class that can be used to get URL from blob.
    }); 
}

document.getElementById("prv").onclick = () => {
    if (index == 0) {
        index = list.length;
    }
    myVideo.setAttribute("src", list[--index]);
}

document.getElementById("next").onclick = () => {
    if (++index == list.length) {
        index = 0;
    }
    myVideo.setAttribute("src", list[index]);
}

function makeList(){
    for (let index in list) {
        let textNode = document.createTextNode(list[index]);
        let aele = document.createElement("a");
        aele.setAttribute("href", "#");
        aele.appendChild(textNode);
        mylist.appendChild(aele);
        mylist.appendChild(document.createElement("br"));
        mylist.getElementsByTagName("a")[index].onclick = () => {
            myVideo.setAttribute("src", list[index]);
            }
        }
}

function showList() {
    if (mylist.childElementCount == 1) {
        makeList();
        }else {
        while(mylist.hasChildNodes()){
            mylist.removeChild(mylist.firstChild);
        }
        makeList();
        (mylist.style.display == "none") ? mylist.style.display = "block" : mylist.style.display = "none";
    }
}
function slow(speed){
	if(speed == 3){
	myVideo.playbackRate += 2;
	}else if(speed ==1){
    myVideo.playbackRate -= 0.7;
	}else{
	myVideo.playbackRate = 1;
	}
}

function addPlaylist(){
    let i = videofile.value.substr(12);
    list.push(i);

}

submit.addEventListener("click",addPlaylist);

myVideo.onended=() =>{
    if (++index == list.length) {
        index = 0;
    }
    myVideo.setAttribute("autoplay",true);
    myVideo.setAttribute("src", list[index]);
    
}

