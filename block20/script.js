const NAME = "that is actually very cool"

function main() {
    // get the div with the id of "root"
    const root = document.getElementById("root");

    // create a new element that says "Winnie"
    const h1 = document.createElement("h1");
    h1.innerHTML = NAME;

    // append the h1 element to the root div
    root.appendChild(h1);
    h1.setAttribute('class', 'purple')
}
// call the main function

main();