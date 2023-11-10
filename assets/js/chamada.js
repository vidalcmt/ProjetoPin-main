const x = document.querySelector(".ham");
const y = document.querySelector(".nav-menu");

x.addEventListener("click", () => {
    x.classList.toggle('active');
    y.classList.toggle('active');
})

function alert() {
  Swal.fire({
     position: "center",
     icon: "success",
     title: "Pauta Salva Com Sucesso!",
     showConfirmButton: false,
     timer: 1800
   });
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




