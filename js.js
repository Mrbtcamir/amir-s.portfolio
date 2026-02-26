d// ==========================
// LOGIN PAGE
// ==========================
const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const role = document.getElementById("role").value;

        if (!role) {
            alert("Please select a role");
            return;
        }

        localStorage.setItem("userRole", role);
        window.location.href = "dashboard.html";
    });
}

// ==========================
// DASHBOARD PAGE
// ==========================
const roleTitle = document.getElementById("roleTitle");

if (roleTitle) {
    const role = localStorage.getItem("userRole");

    if (!role) {
        window.location.href = "index.html";
    }

    roleTitle.innerText =
        role.charAt(0).toUpperCase() + role.slice(1) + " Dashboard";

    const roleContent = document.getElementById("roleContent");

    if (role === "admin") {
        roleContent.innerHTML = `
            <h2>Administration Panel</h2>
            <p>Manage events, users, teams and reporting.</p>
        `;
    } else if (role === "teacher") {
        roleContent.innerHTML = `
            <h2>Teacher Panel</h2>
            <p>Monitor teams, validate progress and manage absences.</p>
        `;
    } else if (role === "student") {
        roleContent.innerHTML = `
            <h2>Student Panel</h2>
            <p>Track your project, deadlines and requests.</p>
        `;
    }
}

// ==========================
// LOGOUT
// ==========================
const logoutBtn = document.getElementById("logout");

if (logoutBtn) {
    logoutBtn.addEventListener("click", function () {
        localStorage.clear();
        window.location.href = "index.html";
    });
}
