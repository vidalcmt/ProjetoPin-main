const x = document.querySelector(".ham");
const y = document.querySelector(".nav-menu");
let count = 1;

x.addEventListener("click", () => {
    x.classList.toggle('active');
    y.classList.toggle('active');
})

document.getElementById("radio1").checked = true;

setInterval(function() {
    nextImage();
}, 5000)

function nextImage() {
    count++;
    if(count>3) {
        count = 1;
    }

    document.getElementById("radio" + count).checked = true;
}

function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }