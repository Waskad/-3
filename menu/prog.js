log1 = document.getElementById('name');
pass1 = document.getElementById('password');
otvet = document.getElementById('ne');

function Check() {

    if (log1.value == 'login' && pass1.value == 'pass') {
        document.location.href = "sekretnoe.html";
    }
    else {
        otvet.innerHTML = "ответ";
    }
}
