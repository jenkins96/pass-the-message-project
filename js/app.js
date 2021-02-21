/*
"The submit event fires when the user clicks a submit button 
(<button> or <input type="submit">) or presses Enter while editing a field"

"preventDefault() method tells the user agent that if the event does not get 
explicitly handled, its default action should not be taken as it normally would be.
 The event continues to propagate as usual"

 "A DOMTokenList representing the contents of the element's class attribute. 
 If the class attribute is not set or empty, it returns an empty DOMTokenList, 
 i.e. a DOMTokenList with the length property equal to 0.
The DOMTokenList itself is read-only, although you can modify it using the add() 
and remove() methods"

*/

(function(){
    // Reference form itself
    const form = document.getElementById("message-form");
    // Form Function
    form.addEventListener("submit", (event) => {
        // First we have to prevent the submit action
        event.preventDefault()
        // User input
        const message = document.getElementById("message");
        const feedback = document.querySelector(".feedback");
        const messageContent = document.querySelector(".message-content")
        // Setting up the alert if submitting an empty string
        if(message.value === ""){
            feedback.classList.add("show")
            setTimeout(function(){
                feedback.classList.remove("show")
                }, 2000)
        }else {
            // Change message and clear content
            messageContent.innerHTML = message.value;
            message.value = "";
        }
    })
}) ()
