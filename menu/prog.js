log1 = document.getElementById('name');
pass1 = document.getElementById('password');
otvet = document.getElementById('ne');

function Check() {

    if (log1.value == 'login' && pass1.value == 'pass') {
        document.location.href = "sekret.html";
    }
    else {
        otvet.innerHTML = "Пароль не правильный!";
    }
}