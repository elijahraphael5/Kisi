// app.js (client-side code)
document.addEventListener('DOMContentLoaded', () => {
    function showNotification(type, message) {
      const notificationElement = document.getElementById('notification');
      notificationElement.innerHTML = `<div class="${type}">${message}</div>`;
      notificationElement.style.display = 'block';
  
      // Hide the notification after 3 seconds (adjust as needed)
      setTimeout(() => {
        notificationElement.style.display = 'none';
      }, 3000);
    }
  
    // You can keep your existing code for form submissions here
  
  });
  