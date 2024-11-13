async function uploadData() {
    const fileInput = document.getElementById("dataFile");
    const file = fileInput.files[0];

    if (!file) {
        alert("Please select a CSV file to upload.");
        return;
    }

    const formData = new FormData();
    formData.append("file", file);

    console.log("Uploading file:", file.name);  // Log file details

    try {
        document.getElementById("statusText").textContent = "Uploading file...";

        const response = await fetch("http://127.0.0.1:5000/upload", {
            method: "POST",
            body: formData
        });

        const result = await response.json();
        console.log("Server response:", result);  // Log the server response

        if (response.ok) {
            document.getElementById("statusText").textContent = "File uploaded successfully!";
            console.log("Upload success:", result);
        } else {
            document.getElementById("statusText").textContent = `Upload failed: ${result.error || "Unknown error"}`;
            console.error("Upload failed:", result.error || "No error message");
        }
    } catch (error) {
        document.getElementById("statusText").textContent = "An error occurred during upload. Please check your network.";
        console.error("Upload error:", error);
    }
}

async function sendEmails() {
    const emailSubject = document.getElementById("emailSubject").value;
    const emailBody = document.getElementById("emailBody").value;
    const emailPrompt = document.getElementById("emailPrompt").value;

    if (!emailSubject || !emailBody || !emailPrompt) {
        alert("Please complete all fields in the email customization section.");
        return;
    }

    const emailData = {
        subject: emailSubject,
        bodyTemplate: emailBody,  // Updated to 'bodyTemplate' as per server expectation
        prompt: emailPrompt
    };

    console.log("Email data being sent:", emailData);  // Log email data to verify structure

    try {
        document.getElementById("statusText").textContent = "Sending emails...";

        const response = await fetch("http://127.0.0.1:5000/send_emails", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(emailData)
        });

        const result = await response.json();
        console.log("Server response for sending emails:", result);  // Log the server response

        if (response.ok) {
            document.getElementById("statusText").textContent = "Emails sent successfully!";
            console.log("Emails sent:", result);
        } else {
            document.getElementById("statusText").textContent = `Sending failed: ${result.error || "Unknown error"}`;
            console.error("Sending failed:", result.error || "No error message");
        }
    } catch (error) {
        document.getElementById("statusText").textContent = "An error occurred while sending emails. Please check your network.";
        console.error("Send error:", error);
    }
}


// Function to connect the user's email account using OAuth or SMTP
function connectAccount() {
    // Placeholder for actual OAuth or SMTP connection logic
    alert("Connecting to email account... (OAuth or SMTP setup required)");
    document.getElementById("statusText").textContent = "Connected to email account.";
}

// Function to upload and parse CSV data
function uploadData() {
    const fileInput = document.getElementById("dataFile").files[0];
    if (!fileInput) {
        alert("Please upload a CSV file.");
        return;
    }

    const reader = new FileReader();
    reader.onload = function(event) {
        const csvContent = event.target.result;
        const dataRows = csvContent.split("\n").map(row => row.split(","));
        
        // Detect columns and generate prompt placeholders dynamically
        const headers = dataRows[0];
        console.log("Detected Columns:", headers);
        
        // Example placeholder: {Company Name}
        document.getElementById("statusText").textContent = "Data loaded successfully!";
    };
    reader.readAsText(fileInput);
}

// Function to preview emails if enabled
document.getElementById('previewSwitch').addEventListener('change', function() {
    if (this.checked) {
        alert("Previewing emails...");
        document.getElementById("statusText").textContent = "Previewing emails enabled.";
    }
});

// Toggle scheduling options
document.getElementById('scheduleSendSwitch').addEventListener('change', function() {
    document.getElementById("scheduleTimeGroup").style.display = this.checked ? 'block' : 'none';
});

// Function to send emails
async function sendEmails() {
    const subject = document.getElementById("emailSubject").value;
    const body = document.getElementById("emailBody").value;
    const prompt = document.getElementById("emailPrompt").value;
    const scheduledTime = document.getElementById("scheduleTime").value;
    const throttleRate = parseInt(document.getElementById("throttleRate").value) || 10;
    
    if (!subject || !body) {
        alert("Please provide both a subject and body for the email.");
        return;
    }

    document.getElementById("statusText").textContent = "Sending emails...";

    if (scheduledTime) {
        console.log("Emails scheduled for:", scheduledTime);
        document.getElementById("emailsScheduled").textContent = "1"; // Example increment
    } else {
        for (let i = 0; i < throttleRate; i++) { // Example throttle
            // Logic to send each email with placeholders filled
            // Example: replace `{Company Name}` with actual company name

            console.log(`Email ${i + 1} sent.`);
            document.getElementById("emailsSent").textContent = i + 1;
            // Throttling and delay logic
            await new Promise(resolve => setTimeout(resolve, 60000 / throttleRate));
        }
        document.getElementById("statusText").textContent = "Emails sent successfully!";
    }
    
    // Placeholder for analytics tracking updates
}

// Update analytics periodically
function updateAnalytics() {
    document.getElementById("emailsSent").textContent = "0";
    document.getElementById("emailsScheduled").textContent = "0";
    document.getElementById("emailsPending").textContent = "0";
    document.getElementById("emailsFailed").textContent = "0";
    document.getElementById("responseRate").textContent = "0%";
}
setInterval(updateAnalytics, 10000);  // Update analytics every 10 seconds
