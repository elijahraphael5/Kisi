// server.js
require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

let commonStyles = `
  body {
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
    padding: 30px;
  }
  h2 {
    color: #333;
    font-weight: 800;
  }
  p {
    margin: 10px 0;
    font-size: 25px;
  }
  strong {
    color: #007bff;
  }
`;

// Map for form-specific details
const formDetails = {
  reServe: {
    recipientEmail: 'elijahraphael5@gmail.com',
    subject: 'New Reservation',
    fields: ['sname', 'semail', 'sphone', 'saddress', 'sdestination', 'spickupAddress', 'sdate', 'spickupTime'],
  },
  sendParcel: {
    recipientEmail: 'realsticks14@gmail.com',
    subject: 'New Parcel',
    fields: ['name', 'email', 'phone', 'address', 'destination', 'pickupAddress'],
  },
  instantRide: {
    recipientEmail: 'realsticks14@gmail.com',
    subject: 'New Instant Ride',
    fields: ['name', 'email', 'phone', 'address', 'destination', 'pickupAddress', 'drop1', 'drop2'],
  },
  bookRide: {
    recipientEmail: 'realsticks14@gmail.com',
    subject: 'New Ride Booking',
    fields: ['name', 'email', 'phone', 'address', 'destination', 'pickupAddress', 'date', 'pickupTime'],
  },
};

// Route for handling form submissions
app.post('/submit/:formId', async (req, res) => {
  const formId = req.params.formId;
  const formData = req.body;

  // Default values
  let emailContent = `<p>No content available for this form ID: ${formId}</p>`;

  // Check if formId is in the formDetails mapping
  if (formDetails[formId]) {
    const { recipientEmail, subject, fields } = formDetails[formId];

    // Create HTML content dynamically based on form fields
    emailContent = `
      <html>
        <head>
          <style>
            ${commonStyles}
          </style>
        </head>
        <body>
          <h2>${subject} details:</h2>
          ${fields.map(field => `<p><strong>${capitalizeFirstLetter(field)}:</strong> ${formData[field]}</p>`).join('')}
        </body>
      </html>
    `;

    // Send the email
    const mailOptions = {
      from: formData.email,
      to: recipientEmail,
      subject: subject,
      html: emailContent,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.json({ success: true, message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ success: false, message: 'Error sending email' });
    }
  } else {
    console.error(`Unknown form ID: ${formId}`);
    res.status(400).json({ success: false, message: 'Unknown form ID' });
  }
});

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
