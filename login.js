let email = "kitcopz118@gmail.com"
let password = "kitcopz118"

let inputEmail = document.getElementById('email');
let inputPassword = document.getElementById('password');


function login(userEmail, userPass){

    userEmail = inputEmail.value;
    userPass = inputPassword.value;

    if(userEmail != email){
        console.log('incorrect email')
        return
    }

    if (userPass != password){
        console.log('incorrect pass')
        return
    }

    console.log('Login Success')
    return
}

