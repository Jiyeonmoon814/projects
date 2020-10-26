var draggableElements = document.querySelectorAll(".draggable"); //배열만들기
var droppableElements = document.querySelectorAll(".droppable");
draggableElements.forEach(elem => {
  elem.addEventListener("dragstart", dragStart); // Fires as soon as the user starts dragging an item - This is where we can define the drag data
  //elem.addEventListener("drag", drag);
  // elem.addEventListener("dragend", dragEnd); // Fires when a drag operation ends (such as releasing a mouse button or hitting the Esc key) - After the dragend event, the drag and drop operation is complete
});

droppableElements.forEach(elem => {
  elem.addEventListener("dragenter", dragEnter); // Fires when a dragged item enters a valid drop target
  elem.addEventListener("dragover", dragOver); // Fires when a dragged item is being dragged over a valid drop target, repeatedly while the draggable item is within the drop zone
  elem.addEventListener("dragleave", dragLeave); // Fires when a dragged item leaves a valid drop target
  elem.addEventListener("drop", drop); // Fires when an item is dropped on a valid drop target
});

// Drag and Drop Functions

//Events fired on the drag target

function dragStart(event) {
  event.dataTransfer.setData("text/html", event.target.id); // or "text/plain" but just "text" would also be fine since we are not setting any other type/format for data value

}

//Events fired on the drop target

function dragEnter(event) {
  if(!event.target.classList.contains("dropped")) {
    event.target.classList.add("droppable-hover");
  }
}

function dragOver(event) {
if(!event.target.classList.contains("dropped")) {
    event.preventDefault(); // Prevent default to allow drop
  }

}

function dragLeave(event) {
  if(!event.target.classList.contains("dropped")) {
    event.target.classList.remove("droppable-hover");
  }
}

function drop(event) {
  event.preventDefault();

  event.target.classList.remove("droppable-hover");
  var draggableElementData = event.dataTransfer.getData("text/html");
  const draggableElement = document.getElementById(draggableElementData);

    var nodeCopy = document.getElementById(draggableElementData).cloneNode(true);
    nodeCopy.id = "newId"; /* We cannot use the same ID */
    event.target.appendChild(nodeCopy);

  event.target.classList.add("dropped");
  var box1 =document.getElementById("box1");
  var box2 =document.getElementById("box2");
  var box3 =document.getElementById("box3");
  var box4 =document.getElementById("box4");
  var box5 =document.getElementById("box5");
  var box6 =document.getElementById("box6");
  var box7 =document.getElementById("box7");
  var box8 =document.getElementById("box8");
  var drag = document.getElementById("drag");
  if(event.target.children[0].children[0].innerText ==="?"){
    //event.target.children[0].children[0].innerText=number;
    var int = /^[0-9]{1,6}$/;
  //const number = Number(prompt("원하는 숫자를 적어주세요"));
   //event.target.children[0].children[0].innerText=number;
  while(true){
  const number = Number(prompt("원하는 숫자를 적어주세요"));
  if(int.test(number) ){
  event.target.children[0].children[0].innerText=number;
  break;
  }else{
    alert("6자리이하의 숫자만 넣어주세요")
  }
  }
  }

  if(box1.classList.contains("dropped") && box2.classList.contains("dropped")){
    var answer1 = Number(box1.children[0].children[0].innerText);
    var answer2 = Number(box2.children[0].children[0].innerText);
    var answer = answer1 + answer2
    document.getElementById('answer').innerText = answer;
}

  if(box3.classList.contains("dropped") && box4.classList.contains("dropped")){
  var answer1 = Number(box3.children[0].children[0].innerText);
  var answer2 = Number(box4.children[0].children[0].innerText);
  var answer = answer1 - answer2
  document.getElementById('answer2').innerText = answer;
}
  if(box5.classList.contains("dropped") && box6.classList.contains("dropped")){
  var answer1 = Number(box5.children[0].children[0].innerText);
  var answer2 = Number(box6.children[0].children[0].innerText);
  var answer = answer1 * answer2
  document.getElementById('answer3').innerText = answer;
}
  if(box7.classList.contains("dropped") && box8.classList.contains("dropped")){
  var answer1 = Number(box7.children[0].children[0].innerText);
  var answer2 = Number(box8.children[0].children[0].innerText);
  var answer = answer1 / answer2
  document.getElementById('answer4').innerText = answer.toFixed(1);
}

}
  function reset(){
    location.reload(); };
