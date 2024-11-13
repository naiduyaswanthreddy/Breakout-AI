![Screenshot 2024-11-13 221928](https://github.com/user-attachments/assets/316440e7-6f22-46b0-b83b-8def3bbb75b9)


# Custom Email Sending Dashboard

This project is an email sending dashboard designed to personalize, schedule, and track bulk emails. The dashboard offers dynamic email customization, scheduling, analytics, and ESP (Email Service Provider) integration for delivery tracking. This README will guide you through each component, setup, and feature to complete the assignment requirements.


### 1. Project Overview

The email sending dashboard is a web application where users can:
- Connect a Google Sheet or upload CSV files with recipient data.
- Set up and connect an email account for bulk sending.
- Customize email content with placeholders for personalized messaging.
- Schedule emails, apply throttling limits, and track real-time analytics.
- Integrate with ESPs (like SendGrid, Amazon SES, or Mailgun) for tracking email statuses, including sent, delivered, opened, and bounced emails.

---

### 2. Features

1. **Data Connection**
   - Import email data from a CSV file or Google Sheets.
   - Automatically detect columns like Company Name, Location, etc., and map them to placeholders for email customization.

2. **Email Integration**
   - Connect to email providers via OAuth2 for secure connections or configure SMTP.
   - Compatible with Gmail, Outlook, or ESPs with SMTP configurations.

3. **Customizable Prompt for Email Content**
   - Use placeholders such as `{Company Name}` and `{Location}` to dynamically personalize email content.

4. **Column Detection and Dynamic Field Replacement**
   - Automatically detect columns from the uploaded data to replace placeholders in emails.

5. **Email Customization and Sending**
   - Use a language model API (like OpenAI API) to generate content if necessary.
   - Customize each email for individual recipients using the detected data.

6. **Email Scheduling and Throttling**
   - Schedule emails to be sent at specific times.
   - Throttle email sending to avoid exceeding email provider limits.

7. **Real-Time Analytics and Tracking**
   - Track total emails sent, scheduled, pending, and failed.
   - Monitor delivery statuses and response rates.
   - Integrate with ESPs for delivery tracking.

---

### 3. Getting Started

#### Prerequisites
- Node.js installed on your system.
- ESP API keys (e.g., SendGrid, Amazon SES, Mailgun) for delivery tracking.
- Google OAuth credentials if connecting to Google Sheets or Gmail.

#### Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/naiduyaswanthreddy/Breakout-AI.git
    cd email-dashboard
    ```

2. Install required dependencies:
    ```bash
    npm install
    ```

3. Set up OAuth and ESP credentials:
   - Place your Google OAuth credentials in a `.env` file.
   - Configure ESP API credentials if integrating with a provider like SendGrid.

4. Run the application:
    ```bash
    npm start
    ```

5. Access the application in your browser at `http://localhost:3000`.

---

### 4. Usage Guide

#### Step 1: Connect Email Account
1. Click the **Connect Email** button.
2. Follow the OAuth authentication flow (e.g., Gmail, Outlook) or configure your SMTP settings.
3. Once connected, you’ll see a confirmation message in the status bar.

#### Step 2: Upload Data
1. Click on **Upload File** and select a CSV file with columns like Company Name, Location, Email, etc.
2. Once the file is uploaded, columns are automatically detected, and placeholders are enabled.

#### Step 3: Customize Email Content
1. Fill in the **Email Subject** and **Email Body** fields.
2. Use placeholders like `{Company Name}`, `{Location}`, etc., in the email body. These placeholders will be replaced with the actual data from each row.

#### Step 4: Schedule and Throttle Emails
1. Enable **Schedule Email Sending** if you want to send emails at a specific time. Choose a date and time.
2. Set the **Throttle Rate** to limit the number of emails sent per minute.

#### Step 5: Send Emails
1. Click **Send Emails** to start the sending process.
2. Real-time status updates, including sent, scheduled, pending, and failed emails, appear in the analytics section.

#### Step 6: Monitor Analytics
1. Track the status of each email: sent, scheduled, pending, or failed.
2. Monitor response rates and delivery stats if ESP tracking is enabled.

---

### 5. Implementation Details

#### Data Connection and Column Detection
- CSV files are read and parsed to extract column headers.
- The application automatically detects headers and makes them available as placeholders in the prompt box.

#### Email Integration and Customization
- OAuth2 is used for secure email connections, or SMTP settings are configured for ESPs.
- Placeholders in email templates are dynamically replaced with values from the CSV or Google Sheets data.

#### Scheduling and Throttling
- Emails can be scheduled at specific times or throttled to limit sending rates.
- A queuing system (e.g., Celery or time-based functions) manages email scheduling and delivery within provider limits.

#### Real-Time Analytics and ESP Tracking
- Real-time status of emails (sent, scheduled, pending, failed) is updated.
- The analytics dashboard tracks delivery status using ESP API data, such as SendGrid, SES, or Mailgun, for event-based tracking (e.g., delivered, opened, bounced).

---

### Notes

This project is still in development, and certain features (like OAuth integration for specific email providers) may require additional setup depending on your chosen providers.

---

This README provides an overview of how to use the email dashboard effectively for bulk email customization, sending, scheduling, and analytics. Follow the guide for setup and usage instructions to meet assignment requirements.
