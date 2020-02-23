function displayNextImage() {
    x = (x === images.length - 1) ? 0 : x + 1;
    document.getElementById("img").src = images[x];
}

function displayPreviousImage() {
    x = (x <= 0) ? images.length - 1 : x - 1;
    document.getElementById("img").src = images[x];
}

function startTimer() {
    setInterval(displayNextImage, 3000);
}

var images = [], x = -1;
images[0] = "Logo.jpeg";
images[1] = "Class.jpeg";
images[3] = "Family.jpg";
images[4] = "YouthImage.jpg";
images[5] = "SliderLogo.jpg";
images[6] = "Testomonial.jpg";
