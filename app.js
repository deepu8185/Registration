const form = document.querySelector("#form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const cpassword = document.querySelector("#cpassword");

form.addEventListener("submit",(e)=>{

    if(!validateinputs()){
        e.preventDefault()
    }
})

function validateinputs(){
    const usernameval = username.value.trim();
    const emailval = username.value.trim();
    const passwordval = username.value.trim();
    const cpasswordval = username.value.trim();
    let success=true;

    if(usernameval === ''){
        seterror(username, 'Username is required');
        success=false;
    }else{
        setsuccess(username)
    }

    if(emailval === ''){
        seterror(email, 'Email is required');
        success=false;
    }else if(!validateEmail(emailval)){
        seterror(email, 'Please enter a valid email address');
        success=false;
    }else{
        setsuccess(email);
    }

    if(passwordval === ''){
        seterror(password, 'Password is required');
        success=false;
    }else if(passwordval.length<8){
        seterror(password, 'Password must be atleast 8 characters');
        success = false;
    }else{
        setsuccess(password)
    }

    if(cpasswordval === ''){
        seterror(cpassword, 'Confirm password is required');
        success=false;
    }else if(cpassword != passwordval){
        seterror(cpassword, 'Password does not match');
        success = false;
    }else{
        setsuccess(cpassword);
    }
}

function seterror(element,message){
    const inputgroup = element.parentElement;
    const errorelement = inputgroup.querySelector(".error");
    errorelement.innerText = message;

    inputgroup.classList.add("error");
    inputgroup.classList.remove("success");
}

function setsuccess(element){
    const inputgroup = element.parentElement;
    const errorelement = inputgroup.querySelector(".error");
    errorelement.innerText = '';

    inputgroup.classList.add("success");
    inputgroup.classList.remove("error");
}



const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
    };