// Get the form and the .op class element
const form = document.querySelector('form');
const opElement = document.querySelector('.op');

// Add an event listener to the form's submit event
form.addEventListener('submit', (e) => {
  // Prevent the default form submission behavior
  e.preventDefault();

  // Get the source and destination input values
  const sourceValue = document.getElementById('source').value.trim();
  const destinationValue = document.getElementById('destination').value.trim();

  // Check if both source and destination values are not empty
  if (sourceValue !== '' && destinationValue !== '') {
    // Show the .op class content
    opElement.style.display = 'block';
  } else {
    // Hide the .op class content
    opElement.style.display = 'none';
  }
});

// Initially hide the .op class content
opElement.style.display = 'none';