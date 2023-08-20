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
        document.getElementById('email_error').style.display = 'block';
        allRight = false;
    } else {
        document.getElementById('input_email').style.border = 'none';
        document.getElementById('email_error').style.display = 'none';
    }

    if(password == '') {
        document.getElementById('input_password').style.border = '1px solid rgb(171, 11, 11)';
        document.getElementById('email_error').style.display = 'block';
        allRight = false;
    } else {
        document.getElementById('input_password').style.border = 'none';
        document.getElementById('email_error').style.display = 'none';
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
        document.getElementById('email_error').style.display = 'block';
        return;
    } else {
        document.getElementById('input_email').style.border = 'none';
        document.getElementById('email_error').style.display = 'none';
    }

    alert(`Email: ${email}`);
}


const signUp = () => {
    let name = document.getElementById('input_name').value;
    let email = document.getElementById('input_email').value;
    let password = document.getElementById('input_password').value;
    let passwordConfirm = document.getElementById('input_password_confirmation').value;

    let allRight = true;

    console.log("name: ", name);
    
    if(name == '') {
        document.getElementById('input_name').style.border = '1px solid rgb(171, 11, 11)';
        document.getElementById('name_error').style.display = 'block';
        allRight = false;
    } else {
        document.getElementById('input_name').style.border = 'none';
        document.getElementById('name_error').style.display = 'none';
    }

    if(!validateEmail(email)) {
        document.getElementById('input_email').style.border = '1px solid rgb(171, 11, 11)';
        document.getElementById('email_error').style.display = 'block';
        allRight = false;
    } else {
        document.getElementById('input_email').style.border = 'none';
        document.getElementById('email_error').style.display = 'none';
    }

    if(password == '') {
        document.getElementById('input_password').style.border = '1px solid rgb(171, 11, 11)';
        document.getElementById('password_error').style.display = 'block';
        allRight = false;
    } else {
        document.getElementById('input_password').style.border = 'none';
        document.getElementById('password_error').style.display = 'none';
    }

    if(passwordConfirm != password) {
        document.getElementById('input_password_confirmation').style.border = '1px solid rgb(171, 11, 11)';
        document.getElementById('password_confirmation_error').style.display = 'block';
        allRight = false;
    } else {
        document.getElementById('input_password_confirmation').style.border = 'none';
        document.getElementById('password_confirmation_error').style.display = 'none';
    }

    if(!allRight) {
        return;
    }

    alert(`Email: ${email} Password: ${password}`);
}

const checkPermissions = () => {
    alert('OK');
}