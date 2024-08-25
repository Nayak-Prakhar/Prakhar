document.getElementById('enquiryForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const formData = new FormData(this);

    fetch('https://your-server-url/submit', { // Replace with your server URL
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        alert('Form submitted successfully!');
        document.getElementById('enquiryForm').reset(); // Reset the form
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error submitting the form.');
    });
});
