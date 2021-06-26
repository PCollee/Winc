const attachAlertButton = function () {

    const alertButton = document.getElementById("alert-button");
    alertButton.addEventListener("click", function () {
        alert("button clicked");
    });

};

const attachBackgroundButton = function () {

    const changeBackgroundButton = document.getElementById("change-background-button");
    changeBackgroundButton.addEventListener("click", function () {
        toggleBackground();
    });

};

const toggleBackground = function () {

    const bodyElement = document.body;
    bodyElement.classList.toggle("red-background");

};


attachAlertButton();
attachBackgroundButton();