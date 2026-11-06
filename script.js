// Generate CAPTCHA

let currentCaptcha = "";

function generateCaptcha() {

    const characters = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

    currentCaptcha = "";

    for (let i = 0; i < 6; i++) {
        currentCaptcha += characters.charAt(
            Math.floor(Math.random() * characters.length)
        );
    }

    document.getElementById("captcha").innerText = currentCaptcha;
}


// Check Demo Result

function checkResult() {

    const roll = document.getElementById("roll").value.trim();

    const registration = document.getElementById("registration").value.trim();

    const captchaInput = document.getElementById("captchaInput").value.trim();

    const error = document.getElementById("error");

    error.style.color = "red";

    if (
        roll === "DEMO123" &&
        registration === "DEMO456" &&
        captchaInput.toUpperCase() === currentCaptcha
    ) {

        error.style.color = "green";

        error.innerText = "Demo verification successful!";

        setTimeout(function () {
            window.location.href = "result.html";
        }, 1000);

    } else {

        error.innerText = "Results Not Found";

        generateCaptcha();

        document.getElementById("captchaInput").value = "";
    }
}


// Generate CAPTCHA when page opens

window.onload = function () {
    if (document.getElementById("captcha")) {
        generateCaptcha();
    }
};
