/*
Navigatie sidebar is default hidden (css .nav-sidebar ul visibility: hidden;)
als style = hidden, klik op menu, style wordt visible
als style = visible, klik op menu, style wordt hidden

*/

function toggleNavigatie() {
    let navigatieSidebar = document.querySelector(".nav-sidebar ul");
    if (navigatieSidebar.style.visibility === "visible") {
        navigatieSidebar.style.visibility = "hidden";
    } else {
        navigatieSidebar.style.visibility = "visible";
    }
}

/*voorbeelden
Attach an event handler
.addEventListener("mousemove", myFunction);

<button type="button" onclick="myFunction()">Set background color</button>
function myFunction() {
document.body.style.backgroundColor = "red";
.innerHTML = "W3Schools";
*/

//click op een 'kleur' in de lijst, body style background color verandert
document.querySelector("#standaard").addEventListener("click", function () {
    document.body.style.backgroundColor = "#dee7ee";
    //verstop menu door functie
    toggleNavigatie();
});
//Schrijf naam kleur weg naar h2
document.querySelector("#standaard").addEventListener("click", function () {
    document.querySelector("h2").innerHTML = "Standaard kleur";
});

//Oranje    
document.querySelector("#oranje").addEventListener("click", function () {
    document.body.style.backgroundColor = "#f07902";
    toggleNavigatie();
});
document.querySelector("#oranje").addEventListener("click", function () {
    document.querySelector("h2").innerHTML = "Oranje";
});

//Rood
document.querySelector("#rood").addEventListener("click", function () {
    document.body.style.backgroundColor = "#fa0202";
    toggleNavigatie();
});
document.querySelector("#rood").addEventListener("click", function () {
    document.querySelector("h2").innerHTML = "Rood";
});

//Wit
document.querySelector("#wit").addEventListener("click", function () {
    document.body.style.backgroundColor = "#fcfcfc";
    toggleNavigatie();
});
document.querySelector("#wit").addEventListener("click", function () {
    document.querySelector("h2").innerHTML = "Wit";
});

//Blauw
document.querySelector("#blauw").addEventListener("click", function () {
    document.body.style.backgroundColor = "#0536e8";
    toggleNavigatie();
});
document.querySelector("#blauw").addEventListener("click", function () {
    document.querySelector("h2").innerHTML = "Blauw";
});

//Roze
document.querySelector("#roze").addEventListener("click", function () {
    document.body.style.backgroundColor = "#e305ab";
    toggleNavigatie();
});
document.querySelector("#roze").addEventListener("click", function () {
    document.querySelector("h2").innerHTML = "Roze";
});

//Geel
document.querySelector("#geel").addEventListener("click", function () {
    document.body.style.backgroundColor = "#f6fa02";
    toggleNavigatie();
});
document.querySelector("#geel").addEventListener("click", function () {
    document.querySelector("h2").innerHTML = "Geel";
});

//Paars
document.querySelector("#paars").addEventListener("click", function () {
    document.body.style.backgroundColor = "#9207e8";
    toggleNavigatie();
});
document.querySelector("#paars").addEventListener("click", function () {
    document.querySelector("h2").innerHTML = "Paars";
});


