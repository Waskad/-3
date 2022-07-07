log1 = document.getElementById('name');
pass1 = document.getElementById('password');
otvet = document.getElementById('ne');

function Check() {

    if (log1.value == 'Валерия' && pass1.value == '140622') {
        document.location.href = "sekret.html";
    }
    else {
        otvet.innerHTML = "Пароль не правильный!";
    }
}