// Handling form submission for 'bookRide'
const bookRideForm = document.getElementById('bookRide');

bookRideForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  // Get form data using form elements
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const address = document.getElementById('address').value;
  const destination = document.getElementById('destination').value;
  const pickupAddress = document.getElementById('pickupAddress').value;
  const date = document.getElementById('date').value;
  const pickupTime = document.getElementById('pickupTime').value;

  const formData = {
    name: name,
    email: email,
    phone: phone,
    address: address,
    destination: destination,
    pickupAddress: pickupAddress,
    date: date,
    pickupTime: pickupTime,
  };

  try {
    const response = await fetch('http://localhost:3000/submit/bookRide', {
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
