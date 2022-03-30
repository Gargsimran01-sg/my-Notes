

showNote();
// impNote();

let addBtn = document.getElementById("add-btn");
let textArea = document.getElementById("textarea");



addBtn.addEventListener("click", function () {
  let notes = localStorage.getItem("notes")

  if (notes == null) {
    notesObj = [];
  }
  else {
    notesObj = JSON.parse(notes);
  }




  notesObj.push(textArea.value)

  localStorage.setItem("notes", JSON.stringify(notesObj))

  textArea.value = "";
  
  showNote();

})

function showNote() {
  let notes = localStorage.getItem("notes")
  if (notes == null) {
    notesObj = [];
  }
  else {
    notesObj = JSON.parse(notes);
  }
  let html = "";

  notesObj.forEach(function (element, index) {

    html += ` <div class="noteNos" style="
      width: 12rem;
      border: 4px solid whitesmoke;
      margin: 1% 0%;">
 

  <h2>Note ${index + 1}</h2>
                <p style = "font-weight:bold ; font-size:1.2rem ">${element}</p>
              <button id="${index}" onclick="deleteNote(this.id)" style="background-color: blue;
              color: beige;
              padding:1% 2%;
              margin:1% 5%;
              border-color: bisque;">Delete Note</button>
              <button class ="important" id="${index}"  onload="impNote(this.id)"  style="background-color: red;
              color: beige;
              padding:1% 2%;
              margin:1% 5%;
              border-color: bisque;">Important</button>
              </div>`
  });
  let noteNos = document.getElementById("saved-notes")
  if (notesObj.length != 0) {
    noteNos.innerHTML = html;
  }
  else {
    noteNos.innerHTML = "please add a note"
  }
};

// function to delete note

function deleteNote(index){
  let notes = localStorage.getItem("notes")
  if (notes == null) {
    notesObj = [];
  }
  else {
    notesObj = JSON.parse(notes);
  }

notesObj.splice(index,1);
localStorage.setItem("notes" ,JSON.stringify(notesObj));
 showNote();
}

// for search in navigation barr
let searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input" , function(){

let inputVal = searchInput.value.toLowerCase();

let noteSearch = document.getElementsByClassName("noteNos");
Array.from(noteSearch).forEach(function(element){

  let noteText = element.getElementsByTagName("p")[0].innerText; 
   if(noteText.includes(inputVal)){
     element.style.display ="block"
   }
   else{
    element.style.display ="none"
   }

})

})


// marking important

let importantNote = document.getElementsByClassName("important");


Array.from(importantNote).forEach(function (element) {
  
   element.addEventListener("click" , function(){   
   if(element.parentNode.style.backgroundColor != "red"){
   element.parentNode.style.backgroundColor = "red"
   element.innerText = " not important";
   element.style.backgroundColor = "green";
      }
  
   else{
   element.parentNode.style.backgroundColor = "inherit"
    element.innerText = " important"
   element.style.backgroundColor = "red"
   }
  
  })
});










