const form=document.getElementById("form");
const username=document.getElementById("username");
const password=document.getElementById("password");
const checkpassword=document.getElementById("checkpassword");
const email=document.getElementById("email");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    checkInputs();
});

function checkInputs()
{
    const userValue=username.value.trim();
    const passValue=password.value.trim();
    const emailValue=email.value.trim();
    const checkpassValue=checkpassword.value.trim();
    
    if(userValue==="")
    {
        SetError(username,"UserName can't be blank");
    }else{
        SetSuccess(username);
    }

    if(emailValue === '') {
		SetError(email, "Email Can't be blank");
	} else if (!isEmail(emailValue)) {
		SetError(email, 'Not a valid email');
	} else {
		SetSuccess(email);
	}
    
    if(passValue===''){
        SetError(password,"Password Can't be blank");
    }else{
        SetSuccess(password);
    }
    
    if(checkpassValue==='')
    {
        SetError(checkpassword,"check password can't be blank");
    }else if(checkpassValue!==passValue)
    {
        SetError(checkpassword,"password doesn't match");
    }else{
        SetSuccess(checkpassword);
    }
}
function SetError(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function SetSuccess(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}