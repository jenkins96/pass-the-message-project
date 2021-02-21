//After you enter text into the input box, upon pressing the “Enter” key, your message should show up in the “Last Message Delivered” Section.
//After the “Enter” key is pressed, the text box value should return to an empty text box.
//If no input is submitted, an alert should show (using the ‘show' class in the CSS file) in the “Last Message Delivered” section and then disappear after 2 second.


let input = document.getElementById("message");
let button = document.getElementById("submitBtn");

input.addEventListener("keydown", function(event){
    if(event.keyCode === 13){
        document.body.style.background = "red";
        event.preventDefault();
    // Trigger the button element with a click
    button.click();
    }
})