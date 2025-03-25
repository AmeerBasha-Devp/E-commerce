document.querySelectorAll('input[name="payment-method"]').forEach((elem) => {
    elem.addEventListener('change', function(event) {
        const selectedMethod = event.target.value;
        const upiField = document.getElementById('upi-id'); // Assuming this field exists
        const bankField = document.getElementById('bank-details'); // Assuming this field exists
        const cardholderField = document.getElementById('cardholder-name');
        const cardNumberField = document.getElementById('card-number');
        const expirationField = document.getElementById('expiration-date');
        const cvvField = document.getElementById('cvv');

        // Hide all payment input fields initially
        cardholderField.style.display = 'none';
        cardNumberField.style.display = 'none';
        expirationField.style.display = 'none';
        cvvField.style.display = 'none';


        // Hide all fields initially
        upiField.style.display = 'none';
        bankField.style.display = 'none';

        // Show relevant fields based on selected payment method and hide others

        if (selectedMethod === 'upi') {
            upiField.style.display = 'block';
        } else if (selectedMethod === 'net-banking') {
            // Show bank details input fields

            bankField.style.display = 'block';
        }
    });
});

// Existing validation code


document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    const cardholderName = document.getElementById('cardholder-name').value;
    const cardNumber = document.getElementById('card-number').value;
    const expirationDate = document.getElementById('expiration-date').value;
    const cvv = document.getElementById('cvv').value;

    // Validation flags
    let isValid = true;
    let errorMessage = '';

    // Validate cardholder name
    if (!cardholderName) {
        isValid = false;
        errorMessage += 'Cardholder name is required.\n';
    }

    // Validate card number (simple validation for 16 digits)
    if (!/^\d{16}$/.test(cardNumber)) {
        isValid = false;
        errorMessage += 'Card number must be 16 digits.\n';
    }

    // Validate expiration date (MM/YY format)
    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expirationDate)) {
        isValid = false;
        errorMessage += 'Expiration date must be in MM/YY format.\n';
    }

    // Validate CVV (3 or 4 digits)
    if (!/^\d{3,4}$/.test(cvv)) {
        isValid = false;
        errorMessage += 'CVV must be 3 or 4 digits.\n';
    }

    // Show error messages or confirmation
    if (!isValid) {
        document.getElementById('error-message').innerText = errorMessage;
    } else {
        document.getElementById('confirmation-message').innerText = 'Payment processed successfully!';
        // Here you can add further payment processing logic
    }
});
