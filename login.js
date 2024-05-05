function signup()
{
    document.querySelector(".login-form-container").style.cssText = "display: none;";
    document.querySelector(".signup-form-container").style.cssText = "display: block;";
    document.querySelector(".container").style.cssText = "background: #f0edcf";
    document.querySelector(".button-1").style.cssText = "display: none";
    document.querySelector(".button-2").style.cssText = "display: block";
    document.querySelector(".hello").style.cssText = "color: black";
};

function login()
{
    document.querySelector(".signup-form-container").style.cssText = "display: none;";
    document.querySelector(".login-form-container").style.cssText = "display: block;";
    document.querySelector(".container").style.cssText = "background: linear-gradient(to bottom, rgb(6, 108, 224),  rgb(14, 48, 122));";
    document.querySelector(".button-2").style.cssText = "display: none";
    document.querySelector(".button-1").style.cssText = "display: block";
    document.querySelector(".hello").style.cssText = "color: white";
}
function showAlert(message) {
    var alert = document.getElementById('alert');
    var alertMessage = document.getElementById('alert-message');

    alertMessage.innerHTML = message;
    alert.classList.add('show');

    setTimeout(function() {
        alert.classList.remove('show');
    }, 1500);
}