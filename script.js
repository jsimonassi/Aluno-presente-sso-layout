

const doLogin = () => {
    let email = document.getElementById('input_email').value;
    let password = document.getElementById('input_password').value;

    let allRight = true;

    if(email == '') {
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