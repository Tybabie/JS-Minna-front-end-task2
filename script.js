function validateFirstName() {
    const firstName = document.getElementById("firstName").value;
    if (firstName.length == '' || firstName.search(/[0-9]/) != -1 ) {
        document.getElementById('nameMessage').innerHTML = 'Please enter a valid name'
        //document.getElementById('btn').disabled=false
    }else{
        document.getElementById('nameMessage').innerHTML = ''
    } 
}

function validateLastName() {
    const lastName = document.getElementById("lastName").value;
    if (lastName.length == '' || lastName.search(/[0-9]/) != -1 ) {
        document.getElementById('lastnameMessage').innerHTML = 'Please enter a valid name'

    }else{
        document.getElementById('lastnameMessage').innerHTML = ''
}
}
function validateEmail() {
    const email = document.getElementById("email").value;
    if (email.length < 11 || email.indexOf("@") ==-1) {
        document.getElementById('emailMessage').innerHTML= 'Invalid email address'
    }else{
        document.getElementById('emailMessage').innerHTML= '' 
    } 
}

function validatePassword() {
    const password = document.getElementById("password").value;
    if ( password.length < 8 || password.search(/[A-Z]/) == -1 || 
    password.search(/[0-9]/) == -1 || password.search(/[!\@\#\$\%\^\&\*\(\)\_\-\+\=\'\"\:\;\<\>\.\,]/) == -1 ) {
        document.getElementById('passwordMessage').innerHTML 
        = "Password must be at least 8 characters and must contain at least 1 capital letter, 1 number and 1 special character";
    } else {
        document.getElementById('passwordMessage').innerHTML = ''
    }
}
function validateConfirmPassword() {
    const confirmPassword = document.getElementById("confirmPassword").value;
    const password = document.getElementById("password").value;
    if (confirmPassword !== password) {
        document.getElementById('confirmMessage').innerHTML = 'Password does not match'
    } else{
        document.getElementById('confirmMessage').innerHTML = ''
    }
}
function validateLoginPassword() {
    const password = document.getElementById("password").value;
    if ( password.length < 8 || password.search(/[A-Z]/) == -1 || 
    password.search(/[0-9]/) == -1 || password.search(/[!\@\#\$\%\^\&\*\(\)\_\-\+\=\'\"\:\;\<\>\.\,]/) == -1 ) {
        document.getElementById('passwordMessage').innerHTML 
        = "Invalid password";
    } else {
        document.getElementById('passwordMessage').innerHTML = ''
    }
}
function formValidation() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (firstName.length == '' || firstName.search(/[0-9]/) != -1 ) {
        return false
    }
     if (lastName.length == '' || lastName.search(/[0-9]/) != -1 ) {
        return false
    }

    if (email.length < 11 || email.indexOf("@") ==-1) {
        return false
    }
     if ( password.length < 8 || password.search(/[A-Z]/) == -1 || 
    password.search(/[0-9]/) == -1 || password.search(/[!\@\#\$\%\^\&\*\(\)\_\-\+\=\'\"\:\;\<\>\.\,]/) == -1 ) {
        return false
       
    }
    if (confirmPassword != password) {
       return false
    }
    return true
} 
function validateLogIn() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email.length < 11 || email.indexOf("@") ==-1) {
        return false
    }
     if ( password.length < 8 || password.search(/[A-Z]/) == -1 || 
    password.search(/[0-9]/) == -1 || password.search(/[!\@\#\$\%\^\&\*\(\)\_\-\+\=\'\"\:\;\<\>\.\,]/) == -1 ) {
        return false
       
    }
    return true
}