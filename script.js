/* =====================================================
   UNIQUE COMPUTERS
   API URL
===================================================== */

const API_URL =
"https://script.google.com/macros/s/AKfycbyfrW8wj6HlNr_ImgUk3nzKjGvr2WSEYpd_7usbFKApgEEcS8_Fs1j1acBQbzlMdmnf/exec";


/* =====================================================
   CENTER LOGIN
===================================================== */

function openCenterLogin() {

    const modal =
        document.getElementById("centerLoginModal");

    const username =
        document.getElementById("centerUsername");

    const password =
        document.getElementById("centerPassword");

    const error =
        document.getElementById("centerLoginError");


    if (modal) {

        modal.style.display = "flex";

    }


    if (username) {

        username.value = "";

        setTimeout(function () {

            username.focus();

        }, 100);

    }


    if (password) {

        password.value = "";

    }


    if (error) {

        error.textContent = "";

    }


    document.body.style.overflow = "hidden";

}



function closeCenterLogin() {

    const modal =
        document.getElementById("centerLoginModal");


    if (modal) {

        modal.style.display = "none";

    }


    document.body.style.overflow = "auto";

}



function centerLogin() {

    const username =
        document.getElementById(
            "centerUsername"
        )?.value.trim();


    const password =
        document.getElementById(
            "centerPassword"
        )?.value;


    const error =
        document.getElementById(
            "centerLoginError"
        );


    /* =================================================
       LOGIN DETAILS
    ================================================= */

    const correctUsername = "admin";

    const correctPassword = "12345";


    /* =================================================
       EMPTY CHECK
    ================================================= */

    if (!username || !password) {

        if (error) {

            error.textContent =
                "Please enter Username and Password.";

        }

        return;

    }


    /* =================================================
       CHECK LOGIN
    ================================================= */

    if (
        username === correctUsername &&
        password === correctPassword
    ) {

        sessionStorage.setItem(
            "centerLoggedIn",
            "true"
        );


        window.location.href =
            "dashboard.html";

    }


    else {

        if (error) {

            error.textContent =
                "Invalid Username or Password.";

        }


        const passwordBox =
            document.getElementById(
                "centerPassword"
            );


        if (passwordBox) {

            passwordBox.value = "";

            passwordBox.focus();

        }

    }

}



/* =====================================================
   LOGIN MODAL EVENTS
===================================================== */

document.addEventListener(
    "keydown",
    function(event) {

        const modal =
            document.getElementById(
                "centerLoginModal"
            );


        if (!modal) {

            return;

        }


        if (
            event.key === "Enter" &&
            modal.style.display === "flex"
        ) {

            centerLogin();

        }


        if (
            event.key === "Escape" &&
            modal.style.display === "flex"
        ) {

            closeCenterLogin();

        }

    }
);



window.addEventListener(
    "click",
    function(event) {

        const modal =
            document.getElementById(
                "centerLoginModal"
            );


        if (
            modal &&
            event.target === modal
        ) {

            closeCenterLogin();

        }

    }
);



/* =====================================================
   UNIQUE COMPUTERS
   COURSE DETAILS
===================================================== */

const courseData = {


    /* =================================================
       BASIC
    ================================================= */

    basic: {

        title: "BASIC COURSE",

        duration: "3 Months",

        content: [

            "IT Fundamentals",

            "Computer Fundamentals",

            "Typing Master Pro",

            "Windows 7/10",

            "Office 2003/2007/2010",

            "Microsoft Word",

            "Microsoft Excel",

            "Microsoft PowerPoint",

            "Project Work (Word, Excel, PowerPoint)"

        ],

        eligibility:
            "Madhyamik Passed or 10+2 Passed",

        totalFee: "₹2,000/-",

        registration: "₹1,000/-",

        installment: "₹500 × 2 Months",

        oneTime: "₹1,800/-"

    },


    /* =================================================
       DIPLOMA
    ================================================= */

    diploma: {

        title:
            "DIPLOMA IN INFORMATION TECHNOLOGY (DIT)",

        duration: "12 Months",

        content: [

            "IT Fundamentals",

            "Computer Fundamentals",

            "Paint",

            "File & Folder Management",

            "Typing Master Pro",

            "Operating System (DOS & Windows)",

            "Windows 7/10",

            "Office 2003/2007/2010",

            "Microsoft Word",

            "Microsoft Excel Advanced",

            "Microsoft PowerPoint",

            "Microsoft Access",

            "HTML",

            "Bengali Fonts in Publication",

            "Internet Advanced",

            "E-mail, Browsing, Surfing & Chatting",

            "Project Work (Word, Excel, PowerPoint, Access)"

        ],

        eligibility:
            "Madhyamik Passed or 10+2 Passed",

        totalFee: "₹7,000/-",

        registration: "₹2,000/-",

        installment: "₹1,000 × 5 Months",

        oneTime: "₹6,300/-"

    },


    /* =================================================
       DTP
    ================================================= */

    dtp: {

        title:
            "DESKTOP PUBLISHING (DTP)",

        duration: "6 Months",

        content: [

            "IT Fundamentals",

            "Adobe PageMaker",

            "CorelDRAW",

            "Adobe Photoshop",

            "Bengali Fonts in Publication",

            "Internet",

            "Project Work"

        ],

        eligibility:
            "Madhyamik Passed or 10+2 Passed",

        totalFee: "₹6,000/-",

        registration: "₹2,000/-",

        installment: "₹1,000 × 4 Months",

        oneTime: "₹5,400/-"

    },


    /* =================================================
       TALLY
    ================================================= */

    tally: {

        title:
            "TALLY WITH GST",

        duration: "6 Months",

        content: [

            "Basics of Accounting",

            "Company Creation, Alteration & Deletion",

            "Group Creation, Alteration & Deletion",

            "Ledger Creation",

            "Order Processing",

            "VAT Ledgers & Stock Items",

            "Invoicing & Service Tax",

            "MIS Report, TDS, TCS & GST"

        ],

        eligibility:
            "Madhyamik Passed or 10+2 Passed",

        totalFee: "₹7,000/-",

        registration: "₹2,000/-",

        installment: "₹1,000 × 5 Months",

        oneTime: "₹6,300/-"

    },


    /* =================================================
       GRAPHICS PRO
    ================================================= */

    graphics: {

        title:
            "GRAPHICS PRO",

        duration: "6 Months",

        content: [

            "IT Fundamentals",

            "Adobe PageMaker",

            "CorelDRAW",

            "Adobe Illustrator",

            "Adobe Photoshop Advanced",

            "Bengali Fonts in Publication",

            "Internet",

            "Project Work"

        ],

        eligibility:
            "Madhyamik Passed or 10+2 Passed",

        totalFee: "₹8,000/-",

        registration: "₹2,000/-",

        installment: "₹1,000 × 6 Months",

        oneTime: "₹7,200/-"

    },


    /* =================================================
       WEB DESIGNING
    ================================================= */

    web: {

        title:
            "WEB DESIGNING",

        duration: "6 Months",

        content: [

            "IT Fundamentals & Computer Fundamentals",

            "Notepad",

            "WordPad",

            "Software Downloading & VS Code Setup",

            "Concept of Live Server",

            "Structure of an HTML Page",

            "Core HTML Tags",

            "HTML Text Formatting & Decoration",

            "HTML Image Insertion",

            "Hyperlink",

            "Web Page with CSS"

        ],

        eligibility:
            "Madhyamik Passed or 10+2 Passed",

        totalFee: "₹6,000/-",

        registration: "₹2,000/-",

        installment: "₹1,000 × 3 Months",

        oneTime: "₹4,500/-"

    },


    /* =================================================
       CHILD PACKAGE
    ================================================= */

    child: {

        title:
            "CHILD PACKAGE",

        duration: "12 Months",

        content: [

            "1st Semester:",

            "Fundamentals",

            "Computer Fundamentals",

            "Paint",

            "DOS & Windows",

            "File and Folder Management",

            "Typing Master Pro",

            "2nd Semester:",

            "Notepad",

            "3rd Semester:",

            "Microsoft Excel",

            "Microsoft PowerPoint",

            "Microsoft Access",

            "4th Semester:",

            "Bengali Font",

            "PageMaker",

            "E-Learning Online"

        ],

        eligibility:
            "Nursery to Class IX",

        totalFee: "—",

        registration: "₹1,000/-",

        installment: "₹400/- per month",

        oneTime: "—"

    },


    /* =================================================
       SMART AI
    ================================================= */

    smart: {

        title:
            "SMART AI",

        duration: "6 Months",

        content: [

            "Computer Fundamentals & Windows 10",

            "Typing Master Pro",

            "DOS / Windows",

            "Microsoft Word",

            "Introduction to Artificial Intelligence",

            "Uses of AI in Daily Life",

            "ChatGPT, Gemini & Copilot Overview",

            "Prompt (Basic to Advanced)",

            "Excel Formula & Data Analysis Using AI"

        ],

        eligibility: "—",

        totalFee: "₹6,000/-",

        registration: "₹2,000/-",

        installment: "₹1,000 × 4 Months",

        oneTime: "₹5,400/-"

    },


    /* =================================================
       ADVANCE EXCEL
    ================================================= */

    "advance-excel": {

        title:
            "ADVANCE EXCEL",

        duration: "3 Months",

        content: [

            "Computer & Excel Fundamentals",

            "Excel Workbook & Worksheet",

            "Data Entry & Data Formatting",

            "Basic & Advanced Excel Formulas",

            "SUM, AVERAGE, COUNT, MAX, MIN",

            "IF, AND, OR",

            "SUMIF, COUNTIF, AVERAGEIF",

            "VLOOKUP & HLOOKUP",

            "XLOOKUP",

            "INDEX & MATCH",

            "Conditional Formatting",

            "Data Validation",

            "Sort & Filter",

            "Advanced Filter",

            "Excel Tables",

            "Pivot Table",

            "Pivot Chart",

            "Charts & Graphs",

            "Data Analysis",

            "Dashboard Creation",

            "Printing & Page Setup",

            "Practical Project Work"

        ],

        eligibility:
            "Madhyamik Passed or 10+2 Passed",

        totalFee: "₹4,000/-",

        registration: "₹2,000/-",

        installment: "₹1,000 × 2 Months",

        oneTime: "₹3,600/-"

    },


    /* =================================================
       ADVANCED DIPLOMA
    ================================================= */

    advanced: {

        title:
            "ADVANCED DIPLOMA",

        duration: "12 Months",

        content: [

            "Computer Fundamentals & Windows 10",

            "Typing Master Pro",

            "DOS / Windows",

            "Microsoft Word",

            "Advanced Excel (Pivot, VLOOKUP, Dashboard)",

            "Microsoft PowerPoint",

            "Microsoft Access",

            "Google Workspace (Docs, Sheets, Drive)",

            "Internet, Email & Cyber Safety",

            "Basic AI Tools (ChatGPT, Copilot - Practical Use)",

            "Online Form Fill-up (Government & Private)",

            "Tally ERP9 with GST",

            "Basics of Accounting",

            "Company Creation, Alteration & Deletion",

            "Group Creation, Alteration & Deletion",

            "Ledger Creation",

            "Order Processing",

            "VAT Ledgers & Stock Items",

            "Invoicing & Service Tax",

            "MIS Report, TDS & GST",

            "Computer Office Executive"

        ],

        eligibility:
            "Madhyamik Passed or 10+2 Passed",

        totalFee: "₹12,000/-",

        registration: "₹5,000/-",

        installment: "₹1,000 × 7 Months",

        oneTime: "₹10,800/-"

    },


    /* =================================================
       MULTIMEDIA ANIMATION
    ================================================= */

    multimedia: {

        title:
            "MULTIMEDIA ANIMATION",

        packages: [

            {

                name: "Package 1 — 1 Year",

                duration: "1 Year",

                content: [

                    "Computer & Multimedia Fundamentals",

                    "Adobe Photoshop",

                    "CorelDRAW",

                    "Adobe Illustrator",

                    "Image Editing & Designing",

                    "2D Animation Fundamentals",

                    "Adobe Animate",

                    "Video Editing Fundamentals",

                    "Audio Editing Basics",

                    "Motion Graphics Basics",

                    "Project Work"

                ],

                eligibility:
                    "10+2 Passed or Above",

                totalFee:
                    "₹1,50,000/-",

                registration:
                    "₹30,000/-",

                installment:
                    "₹10,000 × 12 Months"

            },


            {

                name: "Package 2 — 2 Year",

                duration: "2 Year",

                content: [

                    "Advanced Multimedia Fundamentals",

                    "Advanced Graphic Designing",

                    "Adobe Photoshop Advanced",

                    "CorelDRAW Advanced",

                    "Adobe Illustrator",

                    "2D Animation",

                    "Advanced Adobe Animate",

                    "Video Editing",

                    "Audio Editing",

                    "Motion Graphics",

                    "Advanced Animation Techniques",

                    "Practical Project Work"

                ],

                eligibility:
                    "10+2 Passed or Above",

                totalFee:
                    "₹2,00,000/-",

                registration:
                    "₹30,000/-",

                installment:
                    "₹10,000 × 17 Months"

            }

        ]

    },


    /* =================================================
       VFX
    ================================================= */

    vfx: {

        title:
            "VFX",

        packages: [

            {

                name: "Package 3 — 3 Year",

                duration: "3 Year",

                content: [

                    "Computer & Multimedia Fundamentals",

                    "Adobe Photoshop",

                    "Video Editing",

                    "VFX Fundamentals",

                    "Green Screen / Chroma Key",

                    "Masking & Rotoscoping",

                    "Visual Effects Basics",

                    "Motion Tracking",

                    "Compositing",

                    "Basic 3D Concepts",

                    "Advanced VFX Techniques",

                    "Practical Project Work"

                ],

                eligibility:
                    "10+2 Passed or Above",

                totalFee:
                    "₹3,75,000/-",

                registration:
                    "₹55,000/-",

                installment:
                    "₹10,000 × 32 Months"

            }

        ]

    }

};


/* =====================================================
   SHOW COURSE DETAILS
===================================================== */

function showCourseDetails(course) {

    const data =
        courseData[course];


    if (!data) {

        console.error(
            "Course data not found:",
            course
        );

        return;

    }


    document.getElementById(
        "modalCourseTitle"
    ).textContent =
        data.title;


    let contentHTML = "";


    /* =================================================
       MULTIPLE PACKAGE COURSE
    ================================================= */

    if (data.packages) {


        data.packages.forEach(
            function(packageData, index) {


                contentHTML += `

                    <div class="course-info">

                        <h3>
                            📦 ${packageData.name}
                        </h3>

                    </div>


                    <div class="course-info">

                        <h3>
                            📅 Duration
                        </h3>

                        <p>
                            ${packageData.duration}
                        </p>

                    </div>


                    <div class="course-info">

                        <h3>
                            📚 Course Content
                        </h3>

                        <ul>
                `;


                packageData.content.forEach(
                    function(item) {

                        contentHTML +=
                            `<li>${item}</li>`;

                    }
                );


                contentHTML += `

                        </ul>

                    </div>


                    <div class="course-info">

                        <h3>
                            🎓 Eligibility
                        </h3>

                        <p>
                            ${packageData.eligibility}
                        </p>

                    </div>


                    <div class="course-fees">

                        <h3>
                            💰 Course Fees
                        </h3>

                        <p>
                            Total Course Fees:
                            <strong>
                                ${packageData.totalFee}
                            </strong>
                        </p>

                        <p>
                            Registration:
                            <strong>
                                ${packageData.registration}
                            </strong>
                        </p>

                        <p>
                            Installment:
                            <strong>
                                ${packageData.installment}
                            </strong>
                        </p>

                    </div>

                `;


                if (
                    index <
                    data.packages.length - 1
                ) {

                    contentHTML += `

                        <hr style="
                            margin:30px 0;
                            border:0;
                            border-top:2px solid #ddd;
                        ">

                    `;

                }

            }
        );


    }


    /* =================================================
       SINGLE COURSE
    ================================================= */

    else {


        contentHTML = `

            <div class="course-info">

                <h3>
                    📅 Duration
                </h3>

                <p>
                    ${data.duration}
                </p>

            </div>


            <div class="course-info">

                <h3>
                    📚 Course Content
                </h3>

                <ul>

        `;


        data.content.forEach(
            function(item) {


                if (
                    item.includes("Semester:")
                ) {

                    contentHTML += `

                        <li style="
                            list-style:none;
                            margin-left:-25px;
                            margin-top:12px;
                            font-weight:bold;
                            color:#1e3a8a;
                        ">

                            ${item}

                        </li>

                    `;

                }

                else {

                    contentHTML +=
                        `<li>${item}</li>`;

                }

            }
        );


        contentHTML += `

                </ul>

            </div>


            <div class="course-info">

                <h3>
                    🎓 Eligibility
                </h3>

                <p>
                    ${data.eligibility}
                </p>

            </div>


            <div class="course-fees">

                <h3>
                    💰 Course Fees
                </h3>

                <p>
                    Total Course Fees:
                    <strong>
                        ${data.totalFee}
                    </strong>
                </p>

                <p>
                    Registration:
                    <strong>
                        ${data.registration}
                    </strong>
                </p>

                <p>
                    Installment:
                    <strong>
                        ${data.installment}
                    </strong>
                </p>

                <p>
                    One Time Payment:
                    <strong>
                        ${data.oneTime}
                    </strong>
                </p>

            </div>

        `;

    }


    document.getElementById(
        "courseDetailsContent"
    ).innerHTML =
        contentHTML;


    document.getElementById(
        "courseModal"
    ).style.display =
        "block";


    document.body.style.overflow =
        "hidden";

}



/* =====================================================
   CLOSE COURSE DETAILS
===================================================== */

function closeCourseDetails() {

    const modal =
        document.getElementById(
            "courseModal"
        );


    if (modal) {

        modal.style.display =
            "none";

    }


    document.body.style.overflow =
        "auto";

}



/* =====================================================
   CLICK OUTSIDE COURSE MODAL
===================================================== */

window.addEventListener(
    "click",
    function(event) {

        const modal =
            document.getElementById(
                "courseModal"
            );


        if (
            modal &&
            event.target === modal
        ) {

            closeCourseDetails();

        }

    }
);



/* =====================================================
   ESC KEY FOR COURSE MODAL
===================================================== */

document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "Escape"
        ) {

            const loginModal =
                document.getElementById(
                    "centerLoginModal"
                );


            const courseModal =
                document.getElementById(
                    "courseModal"
                );


            /*
               If login modal is open,
               do not close course modal.
            */

            if (
                loginModal &&
                loginModal.style.display === "flex"
            ) {

                return;

            }


            if (
                courseModal &&
                courseModal.style.display === "block"
            ) {

                closeCourseDetails();

            }

        }

    }
);



/* =====================================================
   OLD ADMISSION ENQUIRY - WHATSAPP
===================================================== */

function sendAdmissionEnquiry() {

    const name =
        document.getElementById(
            "enquiryName"
        )?.value.trim();


    const mobile =
        document.getElementById(
            "enquiryMobile"
        )?.value.trim();


    const course =
        document.getElementById(
            "enquiryCourse"
        )?.value;


    const message =
        document.getElementById(
            "enquiryMessage"
        )?.value.trim();


    if (!name) {

        alert(
            "Please enter Student Name."
        );

        return;

    }


    if (!mobile) {

        alert(
            "Please enter Mobile Number."
        );

        return;

    }


    if (!course) {

        alert(
            "Please select a Course."
        );

        return;

    }


    const whatsappMessage =
        "Admission Enquiry - Unique Computers\n\n" +
        "Student Name: " + name + "\n" +
        "Mobile: " + mobile + "\n" +
        "Course: " + course + "\n" +
        "Message: " + message;


    const whatsappURL =
        "https://wa.me/918653929775?text=" +
        encodeURIComponent(
            whatsappMessage
        );


    window.open(
        whatsappURL,
        "_blank"
    );

}



/* =====================================================
   NEW STUDENT ADMISSION
===================================================== */


/* =====================================================
   COURSE DATA FOR ADMISSION FORM
===================================================== */

const admissionCourseMap = {

    "BASIC": {

        duration: "3 Months",

        fee: 2000

    },

    "DIPLOMA IN INFORMATION TECHNOLOGY (DIT)": {

        duration: "12 Months",

        fee: 7000

    },

    "DTP": {

        duration: "6 Months",

        fee: 6000

    },

    "TALLY WITH GST": {

        duration: "6 Months",

        fee: 7000

    },

    "GRAPHICS PRO": {

        duration: "6 Months",

        fee: 8000

    },

    "WEB DESIGNING": {

        duration: "6 Months",

        fee: 6000

    },

    "CHILD PACKAGE": {

        duration: "12 Months",

        fee: 0

    },

    "SMART AI": {

        duration: "6 Months",

        fee: 6000

    },

    "ADVANCE EXCEL": {

        duration: "3 Months",

        fee: 4000

    },

    "ADVANCED DIPLOMA": {

        duration: "12 Months",

        fee: 12000

    },

    "MULTIMEDIA ANIMATION - PACKAGE 1 (1 YEAR)": {

        duration: "1 Year",

        fee: 150000

    },

    "MULTIMEDIA ANIMATION - PACKAGE 2 (2 YEAR)": {

        duration: "2 Year",

        fee: 200000

    },

    "VFX - PACKAGE 3 (3 YEAR)": {

        duration: "3 Year",

        fee: 375000

    }

};



/* =====================================================
   LOAD COURSE FEE & DURATION
===================================================== */

function updateAdmissionCourseDetails() {

    const courseElement =
        document.getElementById(
            "admissionCourse"
        );


    const durationElement =
        document.getElementById(
            "admissionDuration"
        );


    const feeElement =
        document.getElementById(
            "admissionTotalFee"
        );


    if (!courseElement) {

        return;

    }


    const selectedCourse =
        courseElement.value;


    const data =
        admissionCourseMap[selectedCourse];


    if (!data) {

        if (durationElement) {

            durationElement.value = "";

        }


        if (feeElement) {

            feeElement.value = "";

        }


        updateAdmissionDue();

        return;

    }


    if (durationElement) {

        durationElement.value =
            data.duration;

    }


    if (feeElement) {

        feeElement.value =
            data.fee;

    }


    updateAdmissionDue();

}



/* =====================================================
   CALCULATE ADMISSION DUE
===================================================== */

function updateAdmissionDue() {

    const totalFeeElement =
        document.getElementById(
            "admissionTotalFee"
        );


    const paymentElement =
        document.getElementById(
            "admissionPayment"
        );


    const dueElement =
        document.getElementById(
            "admissionDue"
        );


    if (
        !totalFeeElement ||
        !paymentElement ||
        !dueElement
    ) {

        return;

    }


    const totalFee =
        Number(
            totalFeeElement.value
        ) || 0;


    const firstPayment =
        Number(
            paymentElement.value
        ) || 0;


    let due =
        totalFee - firstPayment;


    if (due < 0) {

        due = 0;

    }


    dueElement.value =
        due;

}



/* =====================================================
   PHOTO PREVIEW
===================================================== */

function previewStudentPhoto(event) {

    const file =
        event.target.files[0];


    const preview =
        document.getElementById(
            "studentPhotoPreview"
        );


    const photoText =
        document.getElementById(
            "photoUploadText"
        );


    if (
        !file ||
        !preview
    ) {

        return;

    }


    const reader =
        new FileReader();


    reader.onload =
        function(e) {

            preview.src =
                e.target.result;


            preview.style.display =
                "block";


            if (photoText) {

                photoText.style.display =
                    "none";

            }


            updatePrintPhoto();

        };


    reader.readAsDataURL(file);

}



/* =====================================================
   SAVE NEW STUDENT ADMISSION
===================================================== */

async function saveAdmission() {

    const name =
        document.getElementById(
            "admissionName"
        )?.value.trim();


    const fatherName =
        document.getElementById(
            "fatherName"
        )?.value.trim();


    const motherName =
        document.getElementById(
            "motherName"
        )?.value.trim();


    const dob =
        document.getElementById(
            "dateOfBirth"
        )?.value;


    const mobile =
        document.getElementById(
            "admissionMobile"
        )?.value.trim();


    const alternativeMobile =
        document.getElementById(
            "alternativeMobile"
        )?.value.trim();


    const address =
        document.getElementById(
            "studentAddress"
        )?.value.trim();


    const course =
        document.getElementById(
            "admissionCourse"
        )?.value;


    const duration =
        document.getElementById(
            "admissionDuration"
        )?.value;


    const totalFee =
        Number(
            document.getElementById(
                "admissionTotalFee"
            )?.value
        ) || 0;


    const firstPayment =
        Number(
            document.getElementById(
                "admissionPayment"
            )?.value
        ) || 0;


    const due =
        Number(
            document.getElementById(
                "admissionDue"
            )?.value
        ) || 0;


    const paymentMode =
        document.getElementById(
            "paymentMode"
        )?.value;


    const remarks =
        document.getElementById(
            "admissionRemarks"
        )?.value.trim();


    const photoElement =
        document.getElementById(
            "studentPhoto"
        );


    /* =================================================
       VALIDATION
    ================================================= */

    if (!name) {

        alert(
            "Please enter Student Name."
        );

        return;

    }


    if (!mobile) {

        alert(
            "Please enter Mobile Number."
        );

        return;

    }


    if (!course) {

        alert(
            "Please select Course."
        );

        return;

    }


    if (firstPayment > totalFee) {

        alert(
            "First Payment cannot be greater than Total Fee."
        );

        return;

    }


    /* =================================================
       PHOTO
    ================================================= */

    let photo = "";


    if (
        photoElement &&
        photoElement.files &&
        photoElement.files[0]
    ) {

        const file =
            photoElement.files[0];


        try {

            photo =
                await readFileAsDataURL(
                    file
                );

        }

        catch (photoError) {

            console.error(
                "Photo Error:",
                photoError
            );

            alert(
                "Student photo could not be read."
            );

            return;

        }

    }


    /* =================================================
       DATA
    ================================================= */

    const admissionData = {

        action: "saveAdmission",

        name: name,

        fatherName: fatherName,

        motherName: motherName,

        dob: dob,

        mobile: mobile,

        alternativeMobile:
            alternativeMobile,

        address: address,

        course: course,

        duration: duration,

        totalFee: totalFee,

        firstPayment: firstPayment,

        due: due,

        paymentMode:
            paymentMode,

        remarks: remarks,

        photo: photo

    };


    /* =================================================
       SAVE BUTTON
    ================================================= */

    const saveButton =
        document.getElementById(
            "saveAdmissionBtn"
        );


    const oldButtonText =
        saveButton
            ? saveButton.textContent
            : "💾 Save Admission";


    if (saveButton) {

        saveButton.disabled =
            true;

        saveButton.textContent =
            "Saving...";

    }


    try {

        const response =
            await fetch(
                API_URL,
                {

                    method: "POST",

                    body:
                        JSON.stringify(
                            admissionData
                        )

                }
            );


        const result =
            await response.json();


        if (
            result.status === "success" ||
            result.success === true
        ) {

            alert(
                "Admission saved successfully!"
            );


            /* =================================================
               FILL PRINT DATA
            ================================================= */

            fillAdmissionPrintData(
                result.data || result
            );


            /* =================================================
               RESET FORM
            ================================================= */

            const form =
                document.getElementById(
                    "admissionForm"
                );


            if (form) {

                form.reset();

            }


            const preview =
                document.getElementById(
                    "studentPhotoPreview"
                );


            if (preview) {

                preview.src = "";

                preview.style.display =
                    "none";

            }


            const photoText =
                document.getElementById(
                    "photoUploadText"
                );


            if (photoText) {

                photoText.style.display =
                    "block";

            }


            /* =================================================
               OPEN PRINT
            ================================================= */

            openAdmissionPrint();

        }


        else {

            alert(
                result.message ||
                "Admission could not be saved."
            );

        }

    }


    catch (error) {

        console.error(
            "Admission Error:",
            error
        );


        alert(
            "Error saving admission. Please check your internet connection and Apps Script."
        );

    }


    finally {

        if (saveButton) {

            saveButton.disabled =
                false;


            saveButton.textContent =
                oldButtonText;

        }

    }

}



/* =====================================================
   READ PHOTO FILE
===================================================== */

function readFileAsDataURL(file) {

    return new Promise(
        function(resolve, reject) {

            const reader =
                new FileReader();


            reader.onload =
                function() {

                    resolve(
                        reader.result
                    );

                };


            reader.onerror =
                function() {

                    reject(
                        new Error(
                            "Photo could not be read."
                        )
                    );

                };


            reader.readAsDataURL(
                file
            );

        }
    );

}



/* =====================================================
   FILL PRINT DATA
===================================================== */

function fillAdmissionPrintData(data) {

    setPrintValue(
        "printAdmissionNo",
        data.admissionNo || ""
    );


    setPrintValue(
        "printStudentId",
        data.studentId || ""
    );


    setPrintValue(
        "printAdmissionDate",
        data.admissionDate || ""
    );


    setPrintValue(
        "printStudentName",
        data.studentName ||
        data.name ||
        ""
    );


    setPrintValue(
        "printFatherName",
        data.fatherName || ""
    );


    setPrintValue(
        "printMotherName",
        data.motherName || ""
    );


    setPrintValue(
        "printDOB",
        data.dob || ""
    );


    setPrintValue(
        "printMobile",
        data.mobile || ""
    );


    setPrintValue(
        "printAlternativeMobile",
        data.alternativeMobile || ""
    );


    setPrintValue(
        "printAddress",
        data.address || ""
    );


    setPrintValue(
        "printCourse",
        data.course || ""
    );


    setPrintValue(
        "printDuration",
        data.duration || ""
    );


    setPrintValue(
        "printTotalFee",
        data.totalFee || ""
    );


    setPrintValue(
        "printFirstPayment",
        data.firstPayment || ""
    );


    setPrintValue(
        "printDue",
        data.due || ""
    );


    setPrintValue(
        "printPaymentMode",
        data.paymentMode || ""
    );


    setPrintValue(
        "printRemarks",
        data.remarks || ""
    );


    /* =================================================
       PHOTO
    ================================================= */

    const printPhoto =
        document.getElementById(
            "printStudentPhoto"
        );


    if (
        printPhoto &&
        data.photo
    ) {

        printPhoto.src =
            data.photo;


        printPhoto.style.display =
            "block";

    }

}



/* =====================================================
   SET PRINT VALUE
===================================================== */

function setPrintValue(
    elementId,
    value
) {

    const element =
        document.getElementById(
            elementId
        );


    if (!element) {

        return;

    }


    element.textContent =
        value;

}



/* =====================================================
   OPEN ADMISSION PRINT
===================================================== */

function openAdmissionPrint() {

    const printArea =
        document.getElementById(
            "admissionPrintArea"
        );


    if (!printArea) {

        alert(
            "Print area is not available yet."
        );

        return;

    }


    printArea.style.display =
        "block";


    window.print();


    setTimeout(
        function() {

            printArea.style.display =
                "none";

        },
        1000
    );

}



/* =====================================================
   PRINT PHOTO PREVIEW
===================================================== */

function updatePrintPhoto() {

    const source =
        document.getElementById(
            "studentPhotoPreview"
        );


    const target =
        document.getElementById(
            "printStudentPhoto"
        );


    if (
        !source ||
        !target
    ) {

        return;

    }


    if (
        source.src &&
        source.src !==
        window.location.href
    ) {

        target.src =
            source.src;


        target.style.display =
            "block";

    }

}



/* =====================================================
   PREPARE ADMISSION PRINT
===================================================== */

function prepareAdmissionPrint() {

    const data = {

        admissionNo:
            document.getElementById(
                "printAdmissionNo"
            )?.textContent || "",


        studentId:
            document.getElementById(
                "printStudentId"
            )?.textContent || "",


        admissionDate:
            document.getElementById(
                "printAdmissionDate"
            )?.textContent || "",


        name:
            document.getElementById(
                "admissionName"
            )?.value.trim() || "",


        fatherName:
            document.getElementById(
                "fatherName"
            )?.value.trim() || "",


        motherName:
            document.getElementById(
                "motherName"
            )?.value.trim() || "",


        dob:
            document.getElementById(
                "dateOfBirth"
            )?.value || "",


        mobile:
            document.getElementById(
                "admissionMobile"
            )?.value.trim() || "",


        alternativeMobile:
            document.getElementById(
                "alternativeMobile"
            )?.value.trim() || "",


        address:
            document.getElementById(
                "studentAddress"
            )?.value.trim() || "",


        course:
            document.getElementById(
                "admissionCourse"
            )?.value || "",


        duration:
            document.getElementById(
                "admissionDuration"
            )?.value || "",


        totalFee:
            document.getElementById(
                "admissionTotalFee"
            )?.value || "",


        firstPayment:
            document.getElementById(
                "admissionPayment"
            )?.value || "",


        due:
            document.getElementById(
                "admissionDue"
            )?.value || "",


        paymentMode:
            document.getElementById(
                "paymentMode"
            )?.value || "",


        remarks:
            document.getElementById(
                "admissionRemarks"
            )?.value.trim() || ""

    };


    /* =================================================
       PHOTO
    ================================================= */

    const photoPreview =
        document.getElementById(
            "studentPhotoPreview"
        );


    if (
        photoPreview &&
        photoPreview.src &&
        photoPreview.style.display !== "none"
    ) {

        data.photo =
            photoPreview.src;

    }


    /* =================================================
       VALIDATION
    ================================================= */

    if (!data.name) {

        alert(
            "Please enter Student Name before printing."
        );

        return;

    }


    if (!data.mobile) {

        alert(
            "Please enter Mobile Number before printing."
        );

        return;

    }


    if (!data.course) {

        alert(
            "Please select Course before printing."
        );

        return;

    }


    /* =================================================
       FILL PRINT AREA
    ================================================= */

    fillAdmissionPrintData(
        data
    );


    updatePrintPhoto();


    openAdmissionPrint();

}



/* =====================================================
   RESET ADMISSION FORM
===================================================== */

function resetAdmissionForm() {

    const form =
        document.getElementById(
            "admissionForm"
        );


    if (!form) {

        return;

    }


    const confirmReset =
        confirm(
            "Are you sure you want to reset the admission form?"
        );


    if (!confirmReset) {

        return;

    }


    form.reset();


    /* =================================================
       CLEAR COURSE DETAILS
    ================================================= */

    const duration =
        document.getElementById(
            "admissionDuration"
        );


    const totalFee =
        document.getElementById(
            "admissionTotalFee"
        );


    const due =
        document.getElementById(
            "admissionDue"
        );


    if (duration) {

        duration.value = "";

    }


    if (totalFee) {

        totalFee.value = "";

    }


    if (due) {

        due.value = "";

    }


    /* =================================================
       CLEAR PHOTO
    ================================================= */

    const photoInput =
        document.getElementById(
            "studentPhoto"
        );


    const photoPreview =
        document.getElementById(
            "studentPhotoPreview"
        );


    const photoText =
        document.getElementById(
            "photoUploadText"
        );


    if (photoInput) {

        photoInput.value = "";

    }


    if (photoPreview) {

        photoPreview.src = "";

        photoPreview.style.display =
            "none";

    }


    if (photoText) {

        photoText.style.display =
            "block";

    }


    /* =================================================
       CLEAR PRINT PHOTO
    ================================================= */

    const printPhoto =
        document.getElementById(
            "printStudentPhoto"
        );


    if (printPhoto) {

        printPhoto.src = "";

        printPhoto.style.display =
            "none";

    }


    alert(
        "Admission form has been reset."
    );

}