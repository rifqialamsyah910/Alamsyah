document.addEventListener("DOMContentLoaded", () => {
    const validUser = {
        username: "alamsyah910",
        password: "password123"
    };

    const loginPage = document.getElementById("login-page");
    const lmsApp = document.getElementById("lms-app");
    const loginForm = document.getElementById("login-form");
    const loginError = document.getElementById("login-error");

    const sections = {
        dashboard: document.getElementById("dashboard"),
        courses: document.getElementById("courses"),
        assignments: document.getElementById("assignments")
    };

    const navLinks = {
        "dashboard-link": sections.dashboard,
        "courses-link": sections.courses,
        "assignments-link": sections.assignments
    };

    // Tampilkan hanya login page saat halaman dimuat
    lmsApp.style.display = "none";

    // Login Form Submission
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const username = document.getElementById("alamsyah910").value;
        const password = document.getElementById("password123").value;

        // Validasi login
        if (username === validUser.username && password === validUser.password) {
            loginPage.classList.remove("active");
            lmsApp.style.display = "block"; // Tampilkan dashboard
            sections.dashboard.style.display = "block"; // Tampilkan dashboard sebagai halaman utama
            loginError.textContent = ""; // Hapus pesan error
        } else {
            loginError.textContent = "Username atau Password salah!"; // Tampilkan error
        }
    });

    // Navigation Logic
    Object.keys(navLinks).forEach((id) => {
        document.getElementById(id).addEventListener("click", (e) => {
            e.preventDefault();
            Object.values(sections).forEach((section) => (section.style.display = "none"));
            navLinks[id].style.display = "block";
        });
    });

    // Logout Logic
    document.getElementById("logout-link").addEventListener("click", (e) => {
        e.preventDefault();
        lmsApp.style.display = "none"; // Sembunyikan dashboard
        loginPage.classList.add("active"); // Kembali ke halaman login
    });
});
