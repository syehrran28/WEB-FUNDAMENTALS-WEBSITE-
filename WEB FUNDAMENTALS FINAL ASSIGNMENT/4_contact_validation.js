function validation() {
    var Fname= document.forms["contact_form"]["first_name"].value;
    var Lname = document.forms["contact_form"]["last_name"].value;
    var Pnumber = document.forms["contact_form"]["phone_number"].value;
    var email = document.forms["contact_form"]["email"].value;
    var textarea = document.forms["contact_form"]["message"].value;

    if (Fname == "" || Lname == "" || Pnumber == "" || email == "" || textarea == "") {

        if (Fname == "") {
            alert("Please fill first name.");
        }
        
        if(Lname == ""){
            alert("Please fill last name.");
        }
    
        if (Pnumber == "") {
            alert("Please enter valid phone number.");
        }
         
        if (email == "") {
            alert("Please fill email.");
        }

        if (textarea == ""){
            alert("Please fill in the text area.")
        }

        return false;
    }

    if (Fname != "" && Lname != "" && Pnumber != "" && email != ""){
        alert("Thank You");
        return true;
    }
}


