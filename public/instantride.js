const form = document.getElementById('instantRide');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  // Get form data using form elements
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const address = document.getElementById('address').value;
  const destination = document.getElementById('destination').value;
  const drop1 = document.getElementById('drop1').value;
  

  const formData = {
    name: name,
    email: email,
    phone: phone,
    address: address,
    destination: destination,
    drop1: drop1,
  };

  try {
    const response = await fetch('http://localhost:3000/submit/instantRide', {
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
