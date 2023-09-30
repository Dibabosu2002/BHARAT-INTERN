document.addEventListener("DOMContentLoaded", function() {
    const celsiusInput = document.getElementById("celsius");
    const convertButton = document.getElementById("convert");
    const fahrenheitOutput = document.getElementById("fahrenheit");
    const kelvinOutput = document.getElementById("kelvin");

    convertButton.addEventListener("click", function() {
        const celsiusValue = parseFloat(celsiusInput.value);

        if (!isNaN(celsiusValue)) {
            const fahrenheitValue = (celsiusValue * 9/5) + 32;
            const kelvinValue = celsiusValue + 273.15;

            fahrenheitOutput.textContent = fahrenheitValue.toFixed(2);
            kelvinOutput.textContent = kelvinValue.toFixed(2);
        } else {
            fahrenheitOutput.textContent = "-";
            kelvinOutput.textContent = "-";
            alert("Please enter a valid temperature in Celsius.");
        }
    });
});
