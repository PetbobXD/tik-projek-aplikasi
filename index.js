var hour = document.getElementById("clock-hour")
var minutes = document.getElementById("clock-minutes")
var seconds = document.getElementById("clock-seconds")

var clock = setInterval(
    function time() {
        var date_now = new Date();
        var hr = date_now.getHours();
        var min = date_now.getMinutes();
        var sec = date_now.getSeconds();

        if (hr < 10) {
            hr = "0" + hr;
        }

        if (min < 10) {
            min = "0" + min;
        }

        if (sec < 10) {
            min = "0" + sec;
        }

        hour.textContent = hr;
        minutes.textContent = min;
        seconds.textContent = sec;
    }, 1000
);

function onclickli1() {
    location.href = "index.html"
}
function onclickli2() {
    location.href = "calender.html"
}
function onclickli3() {
    location.href = "reminder.html"
}
function onclickli4() {
    location.href = "calculator.html"
}
function onclickli5() {
    location.href = "notepad.html"
}
function onclickhome() {
    location.href = "index.html"
}


let menuBtn=document.getElementById('menu-btn')
let navbar=document.querySelector(".nav")

menuBtn.onclick= () =>{
  menuBtn.classList.toggle("fa-times");
  navbar.classList.toggle('show')
  console.log(navbar)
}



let newTask=document.getElementById("newTaskForm")
let body=document.body
let addTask=document.getElementById('add-task')
let Tasks= document.getElementById('Tasks')


function onclickadd(){
    newTask.style.display="block"
    Tasks.style.display='none'
}

function formCancel(){
    newTask.style.display="none"
    Tasks.style.display='block'
}


//delete button
var myTasklist = document.getElementsByClassName("li-task");
var i;
for (i = 0; i < myTasklist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "delete";
  span.appendChild(txt);
  myTasklist[i].appendChild(span);
}

// Add radio button to li element
function addRadioButton(li) {
  var radio = document.createElement("input");
  radio.type = "radio";
  radio.name = "taskList";
  li.prepend(radio);
  radio.addEventListener("click", function () {
    li.remove();
  });
}

function formSubmit(event){
    event.preventDefault()
    newTask.style.display='none'
    Tasks.style.display='block'


// Get the input value and the due date value
var inputedTasks = document.getElementById("taskInput").value;
var inputedDueDate = document.getElementById("taskDate").value;
var inputedDueTime = document.getElementById("taskTime").value;

// Create a new li element
var li = document.createElement("li");
li.className = 'li-task'

// Create a new span element for the to-do text
var todoSpan = document.createElement("span");
var todoText = document.createTextNode(inputedTasks);
todoSpan.appendChild(todoText);

// Add the todo span to the li element
li.appendChild(todoSpan);
todoSpan.className='taskSpan'

// If a due date is entered, create a new span element for the date and add it to the li element
if (inputedDueDate !== '') {
  var dateSpan = document.createElement("span");
  var dueDate = new Date(inputedDueDate);
  var formattedDate = dueDate.getDate() + '-' + (dueDate.getMonth() + 1) + '-' + dueDate.getFullYear();
  var dateText = document.createTextNode(formattedDate + ', ' + inputedDueTime);
  var dueToText = document.createTextNode('Due To: ');
  var dueToSpan = document.createElement('span');
  var br = document.createElement('br')
  li.appendChild(br)
  dueToSpan.appendChild(dueToText);
  li.appendChild(dueToSpan);
  dateSpan.appendChild(dateText);
  dateSpan.className = 'date-span';
  li.appendChild(dateSpan);
}

// If input value is empty, show an alert message, else append the li to the list
if (inputedTasks === '') {
  alert("You must write something!");
} else {
  document.getElementById("Tasks").appendChild(li);
}

// Add radio button to li element
addRadioButton(li);

// Clear the input fields
document.getElementById("taskInput").value = "";
document.getElementById("taskDate").value = "";
document.getElementById("taskTime").value = "";

// Create the close button for the li element
var span = document.createElement("SPAN");
var txt = document.createTextNode("\u00D7");
span.className = "delete";
span.appendChild(txt);
li.appendChild(span);

// Add the functionality to the close button
var close = document.getElementsByClassName("delete");
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}
}


