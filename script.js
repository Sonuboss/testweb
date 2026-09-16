document.addEventListener("DOMContentLoaded", () => {
    const card = document.querySelector(".login-card");
    const loginForm = document.getElementById("fom");
    const forgotForm = document.getElementById("forgotForm");
    const passwordInput = document.getElementById("pwd");
    const togglePwdBtn = document.getElementById("togglePwd");
    const googleBtn = document.getElementById("googleBtn");
    const githubBtn = document.getElementById("githubBtn");
    const navLinks = document.querySelectorAll(".forgot-link");

    // 1. Smooth Animated Page Navigation
    navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            const targetUrl = link.getAttribute("href");
            
            if (targetUrl && targetUrl !== "#") {
                e.preventDefault();
                card.classList.add("page-exit");
                
                setTimeout(() => {
                    window.location.href = targetUrl;
                }, 250);
            }
        });
    });

    // 2. Toggle Password Visibility
    if (togglePwdBtn && passwordInput) {
        togglePwdBtn.addEventListener("click", () => {
            const isPassword = passwordInput.type === "password";
            passwordInput.type = isPassword ? "text" : "password";
            togglePwdBtn.textContent = isPassword ? "Hide" : "Show";
        });
    }

    // 3. Google OAuth Redirect
    if (googleBtn) {
        googleBtn.addEventListener("click", () => {
            const googleClientId = "YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com";
            const redirectUri = window.location.origin + window.location.pathname;
            const scope = "email profile";

            const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?` +
                `client_id=${encodeURIComponent(googleClientId)}` +
                `&redirect_uri=${encodeURIComponent(redirectUri)}` +
                `&response_type=token` +
                `&scope=${encodeURIComponent(scope)}`;

            window.location.href = googleAuthUrl;
        });
    }

    // 4. GitHub OAuth Redirect
    if (githubBtn) {
        githubBtn.addEventListener("click", () => {
            const githubClientId = "YOUR_GITHUB_CLIENT_ID";
            const redirectUri = window.location.origin + window.location.pathname;
            const scope = "user:email";

            const githubAuthUrl = `https://github.com/login/oauth/authorize?` +
                `client_id=${encodeURIComponent(githubClientId)}` +
                `&redirect_uri=${encodeURIComponent(redirectUri)}` +
                `&scope=${encodeURIComponent(scope)}`;

            window.location.href = githubAuthUrl;
        });
    }

    // 5. Login Submission
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const username = document.getElementById("uname").value.trim();
            const password = passwordInput.value.trim();

            if (!username || !password) {
                alert("Please fill in all required fields.");
                return;
            }

            alert(`Logged in successfully as: ${username}`);
        });
    }

    // 6. Forgot Password Submission
    if (forgotForm) {
        forgotForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const email = document.getElementById("resetEmail").value.trim();

            if (!email) {
                alert("Please enter a valid email address.");
                return;
            }

            alert(`Password reset link sent to ${email}`);
            forgotForm.reset();
        });
    }
});