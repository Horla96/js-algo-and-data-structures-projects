document.getElementById("check-btn").addEventListener("click", function() {
  const textInput = document.getElementById("text-input").value;
  const resultElement = document.getElementById("result");

  if (!textInput) {
    alert("Please input a value.");
    return;
  }

  // Clean the input text: remove non-alphanumeric characters and convert to lowercase
  const cleanedText = textInput.replace(/[^a-z0-9]/gi, '').toLowerCase();

  // Check if the cleaned text is a palindrome
  if (cleanedText === cleanedText.split('').reverse().join('')) {
    resultElement.textContent = `${textInput} is a palindrome`;
  } else {
    resultElement.textContent = `${textInput} is not a palindrome`;
  }
});
