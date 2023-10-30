const x = document.querySelector(".ham");
const y = document.querySelector(".nav-menu");

x.addEventListener("click", () => {
    x.classList.toggle('active');
    y.classList.toggle('active');
});

const form = document.querySelector("form"),
                nextBtn = form.querySelector(".nextBtn"),
                backBtn = form.querySelector(".backBtn"),
                allInput = form.querySelectorAll(".first input");

nextBtn.addEventListener("click", ()=> {
    allInput.forEach(input => {
        if(input.value != "") {
            form.classList.add('secActive');
        } else {
            form.classList.remove('secActive');

        }
    });
});

backBtn.addEventListener("click", () => form.classList.remove('secActive'));

function autoFill() {
    document.getElementById('user-name').value = "João Pedro";
    document.getElementById('user-lastname').value = "Pereira dos Santos";
    document.getElementById('user-birth').valueAsDate = new Date();
    document.getElementById('user-sex').value = "user-sex2";
    document.getElementById('user-email').value = "zjoaopedrosantosz@gmail.com";
    document.getElementById('user-phone').value = 45998411805;
    document.getElementById('user-function').value = "Auxiliar Administrativo";
    document.getElementById('user-profile').value = "user-profile5";
    document.getElementById('user-admission').valueAsDate = new Date();
    document.getElementById('user-id').value = 505184;
    document.getElementById('user-password').value = "1234";
    document.getElementById('confirm-password').value = "1234";

    document.getElementById('user-cep').value = "85863-715";
    document.getElementById('user-address').value = "Travessa  Jorge Amado";
    document.getElementById('address-number').value = 60;
    document.getElementById('address-complement').value = "Casa";
    document.getElementById('user-block').value = "Polo Centro";
    document.getElementById('user-city').value = "user-city2";
    document.getElementById('user-relationship').value = "user-relationship2";
    document.getElementById('user-kids').value = 0;
    document.getElementById('user-money').value = 90586;
    document.getElementById('user-medic').value = "Não";
    document.getElementById('emergency-name').value = "Fernanda Chini";
    document.getElementById('emergency-phone').value = 40028922;
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("send-btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
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