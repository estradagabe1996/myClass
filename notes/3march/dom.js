
function buttonClick() {
    let cereal = document.getElementsByTagName(`body`);
    let button = document.getElementById(`button1`);
    button.innerText = "Button was pressed";
    button.style.background = "green";

    let newButton = document.createElement("button");
    newButton.innerText = "newly created button";
    cereal[0].appendChild(newButton);

    console.log(cereal);
    console.log(button);
}