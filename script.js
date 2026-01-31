const form = document.getElementById("registerForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let isValid = true;

    isValid &= validateName();
    isValid &= validateEmail();
    isValid &= validatePassword();
    isValid &= validateConfirmPassword();

    if (isValid) {
        alert("Form submitted successfully!");
        form.reset();
        clearStyles();
    }
});

function showError(input, message) {
    const small = input.nextElementSibling;
    small.innerText = message;
    input.classList.add("error-input");
    input.classList.remove("success-input");
}

function showSuccess(input) {
    const small = input.nextElementSibling;
    small.innerText = "";
    input.classList.add("success-input");
    input.classList.remove("error-input");
}

function validateName() {
    if (nameInput.value.trim() === "") {
        showError(nameInput, "Name is required");
        return false;
    }
    showSuccess(nameInput);
    return true;
}

function validateEmail() {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(emailInput.value)) {
        showError(emailInput, "Invalid email format");
        return false;
    }
    showSuccess(emailInput);
    return true;
}

function validatePassword() {
    if (passwordInput.value.length < 6) {
        showError(passwordInput, "Password must be at least 6 characters");
        return false;
    }
    showSuccess(passwordInput);
    return true;
}

function validateConfirmPassword() {
    if (confirmPasswordInput.value !== passwordInput.value) {
        showError(confirmPasswordInput, "Passwords do not match");
        return false;
    }
    showSuccess(confirmPasswordInput);
    return true;
}

function clearStyles() {
    document.querySelectorAll("input").forEach(input => {
        input.classList.remove("success-input");
    });
}

/* Real-time validation */
nameInput.addEventListener("keyup", validateName);
emailInput.addEventListener("keyup", validateEmail);
passwordInput.addEventListener("keyup", validatePassword);
confirmPasswordInput.addEventListener("keyup", validateConfirmPassword);
