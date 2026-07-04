
// Toggle password
function togglePassword() {
    let p = document.getElementById("password");
    p.type = p.type === "password" ? "text" : "password";
}

// Dark mode
function toggleDarkMode() {
    document.body.classList.toggle("dark");
}

// Generate password
function generatePassword() {

    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
    let pass = "";

    for (let i = 0; i < 10; i++) {
        pass += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    document.getElementById("password").value = pass;
    liveCheck();
}

// Live check
function liveCheck() {
    checkPassword();
}

// Main check
function checkPassword() {

    let password = document.getElementById("password").value;

    let score = 0;
    let suggestions = "";

    if (password.length >= 8) score++; else suggestions += "• Min 8 chars\n";
    if (/[A-Z]/.test(password)) score++; else suggestions += "• Add uppercase\n";
    if (/[a-z]/.test(password)) score++; else suggestions += "• Add lowercase\n";
    if (/[0-9]/.test(password)) score++; else suggestions += "• Add number\n";
    if (/[!@#$%^&*]/.test(password)) score++; else suggestions += "• Add special char\n";

    let percent = (score * 100) / 5;

    let strength = "Weak";
    let color = "red";

    if (score > 2) { strength = "Medium"; color = "orange"; }
    if (score === 5) { strength = "Strong"; color = "green"; }

    document.getElementById("strength").innerText = "Strength: " + strength;
    document.getElementById("score").innerText = "Score: " + score + "/5";
    document.getElementById("percentage").innerText = "Percentage: " + percent + "%";

    document.getElementById("barFill").style.width = percent + "%";
    document.getElementById("barFill").style.background = color;

    document.getElementById("output").innerText =
        "Suggestions:\n" + suggestions +
        "\n\nStatistics:\n" +
        "Length: " + password.length + "\n" +
        "Uppercase: " + /[A-Z]/.test(password) + "\n" +
        "Lowercase: " + /[a-z]/.test(password) + "\n" +
        "Number: " + /[0-9]/.test(password) + "\n" +
        "Special: " + /[!@#$%^&*]/.test(password);
}