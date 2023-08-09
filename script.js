const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

const doLogin = () => {
    let email = document.getElementById('input_email').value;
    let password = document.getElementById('input_password').value;

    let allRight = true;

    if(!validateEmail(email)) {
        document.getElementById('input_email').style.border = '1px solid rgb(171, 11, 11)';
        document.getElementById('emailError').style.display = 'block';
        allRight = false;
    } else {
        document.getElementById('input_email').style.border = 'none';
        document.getElementById('emailError').style.display = 'none';
    }

    if(password == '') {
        document.getElementById('input_password').style.border = '1px solid rgb(171, 11, 11)';
        document.getElementById('passwordError').style.display = 'block';
        allRight = false;
    } else {
        document.getElementById('input_password').style.border = 'none';
        document.getElementById('passwordError').style.display = 'none';
    }

    if(!allRight) {
        return;
    }

    alert(`Email: ${email} Password: ${password}`);
}


const recoverPassword = () => {
    let email = document.getElementById('input_email').value;

    if(!validateEmail(email)) {
        document.getElementById('input_email').style.border = '1px solid rgb(171, 11, 11)';
        document.getElementById('emailError').style.display = 'block';
        return;
    } else {
        document.getElementById('input_email').style.border = 'none';
        document.getElementById('emailError').style.display = 'none';
    }

    alert(`Email: ${email}`);
}