function palindrome() //defining the function and setting the parameters for it
{
    var str1 = document.getElementById("userStr").value; //make a variable from what the user inputs into the submission box
    var splitStr1 = str1.split(""); //this is going to take the user input and parse it letter by letter

    var reverse = splitStr1.reverse (); //takes the string (after its been split) and flips the word backwards to forwards
    var joinStr1 = reverse.join(""); //joins the string after its been parsed and reversed

    if (str1 == joinStr1) //conditional check comparing the beginning user input to the reverse string
        {
            document.getElementById("palindrome").innerHTML = "Yup, it sure is!"; //informs user they have a palindrome
        }
    else 
    {
            document.getElementById("palindrome").innerHTML = "Sorry, try again"; //informs user they don't have a palindrome
    }
}