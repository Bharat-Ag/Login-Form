

let signupBTn = document.querySelector(".sign-up-btn");
let formDiv = document.querySelector(".form");
let bg = document.querySelector(".bg");

function signUpBtn() {

    formDiv.classList.add("active");
    bg.classList.add("active");

}

let loginAgainBtn = () => {
    formDiv.classList.remove("active");
    bg.classList.remove("active");
}

// -------------------------------------------------------------show hide password funtion

let pwField = document.querySelectorAll("#password")

let passEye = document.querySelectorAll(".showHide")

passEye.forEach(icon => {
    icon.addEventListener("click", () => {
        pwField.forEach(pwfield => {
            if (pwfield.type === "password") {

                pwfield.setAttribute("type", "text")
            }
            else {
                pwfield.setAttribute("type", "password")

            }
        })
    })
})


//----------------------------------------show/hide for confirm pass field

let confirmPass = document.querySelector("#Cpassword");

let cEye = document.querySelector(".conformPassEye")

cEye.addEventListener("click", () => {
    if (confirmPass.type === "password") {
        confirmPass.setAttribute("type", "text");
    }
    else {
        confirmPass.setAttribute("type", "password");
    }

})