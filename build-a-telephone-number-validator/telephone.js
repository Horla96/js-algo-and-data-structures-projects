// Helper function to validate phone number using a regex
function validatePhoneNumber(number) {
    const regex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-]?)\d{3}([\s\-]?)\d{4}$/;
    return regex.test(number);
}

// Clear results div
function clearResults() {
    document.getElementById('results-div').innerHTML = '';
}

// Event listener for the check button
document.getElementById('check-btn').addEventListener('click', function() {
    const userInput = document.getElementById('user-input').value.trim();
    const resultsDiv = document.getElementById('results-div');

    if (!userInput) {
        alert("Please provide a phone number");
        return;
    }

    // Validate phone number
    const isValid = validatePhoneNumber(userInput);

    // Display results
    if (isValid) {
        resultsDiv.innerHTML = `Valid US number: ${userInput}`;
    } else {
        resultsDiv.innerHTML = `Invalid US number: ${userInput}`;
    }
});

// Event listener for the clear button
document.getElementById('clear-btn').addEventListener('click', clearResults);
