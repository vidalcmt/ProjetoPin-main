const x = document.querySelector(".ham");
const y = document.querySelector(".nav-menu");

x.addEventListener("click", () => {
    x.classList.toggle('active');
    y.classList.toggle('active');
})

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}
  
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

const tableA = document.getElementById("tableA");
const tableB = document.getElementById("tableB");
const turmaSelect = document.getElementById("turma");

turmaSelect.addEventListener("change", () => {
  const turma = turmaSelect.value;

  
  if (turma === "A") {
    tableA.style.display = "table";
    tableB.style.display = "none";

  } else {
    tableA.style.display = "none";
    tableB.style.display = "table";
  }
});

 window.onload = function () {
  const turma = turmaSelect.value;  
  tableA.style.display = "table";
  tableB.style.display = "none";

 }




