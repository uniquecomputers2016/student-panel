// =========================
// LOGIN
// =========================

document.getElementById("loginForm").addEventListener("submit", function(e) {

    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    if (username === "admin" && password === "1234") {

        message.style.color = "green";
        message.textContent = "Login successful...";

        setTimeout(function() {

            window.location.href = "dashboard.html";

        }, 500);

    } else {

        message.style.color = "red";
        message.textContent = "Username অথবা Password ভুল!";

    }

});


// =========================
// NOTICE MANAGEMENT
// =========================

// আপনার Google Apps Script Web App URL
const API_URL =
"https://script.google.com/macros/s/AKfycbyfrW8wj6HlNr_ImgUk3nzKjGvr2WSEYpd_7usbFKApgEEcS8_Fs1j1acBQbzlMdmnf/exec";


// OPEN NOTICE
function openNotice() {

    document.querySelectorAll(".section").forEach(function(section) {

        section.style.display = "none";

    });

    const noticeSection =
        document.getElementById("noticeSection");

    if (noticeSection) {

        noticeSection.style.display = "block";

        loadNoticeHistory();

    }

}


// SAVE NOTICE
function saveNotice() {

    const title =
        document.getElementById("noticeTitle").value.trim();

    const description =
        document.getElementById("noticeDescription").value.trim();


    if (title === "") {

        alert("Please enter Notice Title");
        return;

    }


    if (description === "") {

        alert("Please enter Notice Description");
        return;

    }


    const data = {

        action: "saveNotice",
        title: title,
        description: description

    };


    fetch(API_URL, {

        method: "POST",

        body: JSON.stringify(data)

    })

    .then(function(response) {

        return response.json();

    })

    .then(function(result) {

        if (result.success) {

            alert("Notice saved successfully!");

            document.getElementById("noticeTitle").value = "";

            document.getElementById("noticeDescription").value = "";

            loadNoticeHistory();

        } else {

            alert(
                result.message ||
                "Failed to save notice"
            );

        }

    })

    .catch(function(error) {

        console.error(error);

        alert("Error saving notice");

    });

}


// LOAD NOTICE HISTORY
function loadNoticeHistory() {

    fetch(API_URL + "?action=notice")

    .then(function(response) {

        return response.json();

    })

    .then(function(data) {

        renderNotice(data);

    })

    .catch(function(error) {

        console.error(error);

        alert("Failed to load notices");

    });

}


// DISPLAY NOTICE
function renderNotice(data) {

    const tbody =
        document.querySelector("#noticeTable tbody");


    if (!tbody) {

        return;

    }


    tbody.innerHTML = "";


    if (!data || data.length === 0) {

        tbody.innerHTML = `

            <tr>

                <td colspan="4">
                    No Notice Found
                </td>

            </tr>

        `;

        return;

    }


    data.forEach(function(row, index) {

        const tr =
            document.createElement("tr");


        tr.innerHTML = `

            <td>${row[0]}</td>

            <td>${row[1]}</td>

            <td>${row[2]}</td>

            <td>

                <button
                    onclick="deleteNotice(${index + 2})"
                    class="delete-btn"
                >
                    🗑 Delete
                </button>

            </td>

        `;


        tbody.appendChild(tr);

    });

}


// SEARCH NOTICE
function filterNotice() {

    const searchInput =
        document.getElementById("noticeSearch");


    if (!searchInput) {

        return;

    }


    const search =
        searchInput.value.toLowerCase();


    const rows =
        document.querySelectorAll(
            "#noticeTable tbody tr"
        );


    rows.forEach(function(row) {

        const text =
            row.innerText.toLowerCase();


        if (text.includes(search)) {

            row.style.display = "";

        } else {

            row.style.display = "none";

        }

    });

}


// DELETE NOTICE
function deleteNotice(rowNumber) {

    if (
        !confirm(
            "Are you sure you want to delete this notice?"
        )
    ) {

        return;

    }


    fetch(
        API_URL +
        "?action=deleteNotice&id=" +
        rowNumber
    )

    .then(function(response) {

        return response.json();

    })

    .then(function(result) {

        if (result.success) {

            alert(
                "Notice deleted successfully!"
            );

            loadNoticeHistory();

        } else {

            alert(
                result.message ||
                "Failed to delete notice"
            );

        }

    })

    .catch(function(error) {

        console.error(error);

        alert("Error deleting notice");

    });

}