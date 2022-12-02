function validationsignup() {
    var username= document.forms["signup"]["username"].value;
    var email = document.forms["signup"]["email"].value;
    var password = document.forms["signup"]["password"].value;
    var confirmpassword = document.forms["signup"]["confirmpassword"].value;


    if (username == "" || email == "" || password == "" || confirmpassword != password) {
        if (username == ""){
            alert("Please fill username.");
        }
        
        if(email == ""){
            alert("Please fill email.");
        }
        
        if(password == ""){
            alert("Please fill password.");
        }
        
    if(confirmpassword != password){
        alert("Please check confirm password.");
        }

        return false;
    }

    if (username != "" && password != "" && confirmpassword != "" && email != ""){
        alert("Register Successful");
        return true;
    }
}

function validationsignin() {
    var usernameoremail = document.forms["login"]["user_email"].value;
    var password = document.forms["login"]["password"].value;

    if (usernameoremail == "" || password == "") {
        if (usernameoremail == "") {
            alert("Please fill username or email.");
        }
        
        if(password == ""){
            alert("Please fill password.");
        }

        return false;
    }

    if (usernameoremail != "" && password != ""){
        alert("Login Successful");
        return true;
    }
}