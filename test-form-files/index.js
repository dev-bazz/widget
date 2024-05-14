document.getElementById('hbForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(document.getElementById('hbForm'));

    try {
      const response = await fetch('http://localhost:27017/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(Object.fromEntries(formData)),
        mode: 'no-cors' // pls for debugging only "HB o"
      });

      if (response.ok) {
        alert('Form submitted successfully!');
        document.getElementById('hbForm').reset();
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error:', error.message);
      alert('Failed to submit form. Please try again later.');
    }
  });