//Opdracht 1
const verfMuur = function () {
    console.log("The wall has been painted red");
};
verfMuur();

//Opdracht2
const verfMuur1 = function (colour) {
    console.log("The wall has been painted " + colour); // String concatenation
};
verfMuur1("green");
verfMuur1("blue");

//Opdracht3
const verfMuur2 = function (muur, colour) {
    console.log("The " + muur + " wall has been painted " + colour); // String concatenation
};
verfMuur2("south-east", "grey");
verfMuur2("north", "orange");