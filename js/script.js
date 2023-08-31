// Carousel 
const jumbotron = document.querySelector('.jumbotron');
const backgroundImages = [
    'url("../assets/background1.jpg")',
    'url("../assets/background2.jpg")',
    'url("../assets/background3.jpg")'
];

let currentIndex = 0;

function changeBackgroundImage() {
    jumbotron.style.backgroundImage = backgroundImages[currentIndex];
    currentIndex = (currentIndex + 1) % backgroundImages.length;
}

setInterval(changeBackgroundImage, 3000);

// Validasi Form
function validateForm() {
    
    const name = document.forms["messageForm"]["name"].value;
    const birthday = document.forms["messageForm"]["birthday"].value;
    const gender = document.getElementById("gender").value;
    const message = document.forms["messageForm"]["message"].value;
    const now = new Date();

    if (name == "" || birthday == "" || gender == "" || message == "") {
        alert("Tidak ada yang boleh kosong");
        return false;
    }

    setSenderUI(name, birthday, gender, message, now)

    return false;

    function setSenderUI(name, birthday, gender, message, now) {
        document.getElementById("currentTime").innerHTML = now
        document.getElementById("senderName").innerHTML = name
        document.getElementById("nameGuest").innerHTML = name
        document.getElementById("senderBirthday").innerHTML = birthday
        document.getElementById("senderGender").innerHTML = gender
        document.getElementById("senderMessages").innerHTML = message
    }
}