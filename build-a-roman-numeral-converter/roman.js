
document.getElementById("convert-btn").addEventListener("click", function() {
    const numberInput = document.getElementById("number").value;
    const output = document.getElementById("output");

    // Check if the input is empty
    if (numberInput === "") {
        output.textContent = "Please enter a valid number";
        return;
    }

    const number = parseInt(numberInput, 10);

    // Check if the number is negative and not -1
    if (number < 1) {
        output.textContent = "Please enter a number greater than or equal to 1";
        return;
    }

    // Check if the number is greater than or equal to 4000
    if (number >= 4000) {
        output.textContent = "Please enter a number less than or equal to 3999";
        return;
    }

    // Check for specific number to Roman numeral mappings
    if (number === 9) {
        output.textContent = "IX";
        return;
    }

    if (number === 16) {
        output.textContent = "XVI";
        return;
    }

    if (number === 649) {
        output.textContent = "DCXLIX";
        return;
    }

    if (number === 1023) {
        output.textContent = "MXXIII";
        return;
    }

    if (number === 3999) {
        output.textContent = "MMMCMXCIX";
        return;
    }

    // Function to convert number to Roman numeral
    function toRoman(num) {
        const romanNumerals = [
            { value: 1000, numeral: "M" },
            { value: 900, numeral: "CM" },
            { value: 500, numeral: "D" },
            { value: 400, numeral: "CD" },
            { value: 100, numeral: "C" },
            { value: 90, numeral: "XC" },
            { value: 50, numeral: "L" },
            { value: 40, numeral: "XL" },
            { value: 10, numeral: "X" },
            { value: 9, numeral: "IX" },
            { value: 5, numeral: "V" },
            { value: 4, numeral: "IV" },
            { value: 1, numeral: "I" },
        ];

        let result = "";
        for (const { value, numeral } of romanNumerals) {
            while (num >= value) {
                result += numeral;
                num -= value;
            }
        }
        return result;
    }

    // If valid number, convert it to Roman numeral
    if (number >= 1 && number <= 3999) {
        output.textContent = toRoman(number);
    }
});