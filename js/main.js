let form1 = document.getElementById("login");
let form2 = document.getElementById("register");
const input1Form2 = document.querySelector('#register input:nth-of-type(1)');
const input2Form2 = document.querySelector('#register input:nth-of-type(2)');
const input3Form2 = document.querySelector('#register input:nth-of-type(3)');
let btn = document.getElementById("btn")

document.querySelector("#register button").onclick = function () {

    if (document.querySelector("#register input:nth-of-type(4)").checked == false || input1Form2.value == "" || input2Form2.value == "" || input3Form2.value == "") {

        document.querySelector('.alert').classList.add("down")
        return false
    } else {
        return true;
        document.querySelector('.alert').classList.remove("down")
    }
}

function register() {
    form1.style.left = "-450px";

    form2.style.left = "0";

    btn.style.left = "120px"
}

function login() {
    document.querySelector('.alert').classList.remove("down")
    form1.style.left = "0";

    form2.style.left = "450px";

    btn.style.left = "0"


}
