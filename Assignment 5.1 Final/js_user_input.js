function checkCreds() //this function is going to get the user input to check and verify the input matches the parameters listed below
{
    var HouseNumber = document.getElementById("hnum").value; 
    var Street = document.getElementById("Street").value; 
    var City = document.getElementById("City").value; 
    var State = document.getElementById("State").value; 
    var ZipCode = document.getElementById("zip").value; 


if (HouseNumber.length > 3 || HouseNumber.length < 1) //set the limit to 3 numbers to identify our "agents" house
{
    document.getElementById("loginStatus").innerHTML = "Impossible, no one has a house number like that! SPY! House Number > 3"
}

else if (Street.length > 15 || Street.length < 4) //the street length must be between 4 and 15 characters
{
    document.getElementById("loginStatus").innerHTML = "Street > 15 or street < 4"
}

else if (City.length > 9 || City.length < 4) //city can't exceed 9 characters and can't be less than 4
{
    document.getElementById("loginStatus").innerHTML = "WRONG! City length > 9 or < 4"
}

else if (State.length !== 2) //the state input will be the abbreviation for the state
{
    document.getElementById("loginStatus").innerHTML = "Abbreviations only...our agent would know that. Are you a....SPY!?"
}

else if (ZipCode.length !== 5) //zip code follows normal mailing protocol with 5 digits
{
    document.getElementById("loginStatus").innerHTML = "Must be 5 digits"
}

else //this reveals the message after successful user input. it scrolls from left to right (like in the movies) with the message TOP SECRET // NOFORN so our agent knows the classification level
{
    alert("Agent, expect details coming soon. The nation depends on you!")
    revealMessage("TOP SECRET // NOFORN", "secret-message", 100);
}
}

function revealMessage(text, elementId, interval) //created function revealMessage with 3 different arguments, the text, the id and the interval that will reveal the message
{
    const messageContainer = document.getElementById("secret-message")
    messageContainer.innerHTML = "";

//the below code sets the initial start point and then appends (adds) the letter to the right to be revealed using the indicated timer in the function
//the below code takes the text which is initially not shown and uses the appendChild to add the letter at the end of the code
    for (let i = 0; i < text.length; i++) {
        const span = document.createElement('span');
        span.textContent = text[i];
        span.style.visibility = 'hidden';
        messageContainer.appendChild(span);
    }
//the below portion sets the initial start point at the "0" location of the message
let currentIndex = 0;
//the revealNext function (shown below) takes the message and makes it viewable letter by letter to the user. 
function revealNext() 
{
    if (currentIndex < messageContainer.children.length) {
        messageContainer.children[currentIndex].style.visibility = 'visible';
        currentIndex++;
        setTimeout(revealNext, interval);
    }
}

revealNext();
}



