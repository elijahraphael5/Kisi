// script.js
document.addEventListener('DOMContentLoaded', () => {
  const reServeForm = document.getElementById('reServe');

  reServeForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    // Get form data using form elements
    const sname = document.getElementById('sname').value;
    const semail = document.getElementById('semail').value;
    const sphone = document.getElementById('sphone').value;
    const spickupAddress = document.getElementById('spickupAddress').value;
    const sdestination = document.getElementById('sdestination').value;
    const sdate = document.getElementById('sdate').value;
    const spickupTime = document.getElementById('spickupTime').value;

    const formData = {
      sname: sname,
      semail: semail,
      sphone: sphone,
      spickupAddress: spickupAddress,
      sdestination: sdestination,
      sdate: sdate,
      spickupTime: spickupTime,
    };

    try {
      const response = await fetch('http://localhost:3000/submit/reServe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Server response:', data);
        // Handle success response from the server
      } else {
        console.error('Server returned an error:', response.status);
        // Handle error response from the server
      }
    } catch (error) {
      console.error('Error sending form data:', error);
      // Handle network or fetch-related errors
    }
  });

  // Add similar event listeners for other forms
});
