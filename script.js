let container = document.querySelector(".container"),
    showHide = document.querySelectorAll(".showHide"),
    pwField = document.querySelectorAll(".password"),
    signUp = document.querySelector(".signup-link"),
    login = document.querySelector(".login-link");



showHide.forEach(eyeIcon => {
    eyeIcon.addEventListener('click', () => {
        pwField.forEach(pwField => {
            if (pwField.type === "password") {
                pwField.type = "text";



                showHide.forEach(icon => {
                    icon.classList.replace("bx-low-vision", "bx-show");
                })
            } else {
                pwField.type = "password";

                showHide.forEach(icon => {
                    icon.classList.replace("bx-show", "bx-low-vision");
                })

            }
        })
    })
})

signUp.addEventListener('click', () => {
    container.classList.add("active")
})
login.addEventListener('click', () => {
    container.classList.remove("active")
})
