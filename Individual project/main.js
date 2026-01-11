document.addEventListener('DOMContentLoaded', () => {
    
    // 1. CONTACT PAGE LOGIC
    // Check if we are on the contact page by looking for the submit button
    const contactBtn = document.getElementById('contact-btn');
    
    if (contactBtn) {
        contactBtn.addEventListener('click', (e) => {
            e.preventDefault(); // Stop page from reloading immediately

            // Note: Update your HTML IDs to match these!
            // Currently your HTML has duplicate IDs. Please fix them to:
            // <input id="c-name">, <input id="c-subject">, etc.
            const name = document.querySelector('input[placeholder="Your Name"]')?.value || document.getElementsByTagName('input')[0].value;
            const mobile = document.querySelector('input[placeholder="Mobile Number"]')?.value || document.getElementsByTagName('input')[2].value;
            const email = document.querySelector('input[placeholder="Your Email"]')?.value || document.getElementsByTagName('input')[3].value;

            // Simple Validation
            if(name === "" || mobile === "" || email === "") {
                alert("Please fill in all required fields!");
                return;
            }

            // Mobile number validation (Sri Lanka format)
            if(!/^\d{10}$/.test(mobile) && !/^\+94\d{9}$/.test(mobile)) {
                alert("Please enter a valid mobile number.");
                return;
            }

            // Success Message
            alert(`Thank you ${name}! We have received your message regarding "${document.getElementsByTagName('input')[1].value}". We will contact you at ${email}.`);
            
            // Here you would normally send this data to a backend server
        });
    }

    // 2. BOOKING PAGE LOGIC 
    // Check if we are on the booking page
    const bookingSelect = document.getElementById('form-one');
    
    if (bookingSelect) {
        // Create a 'Confirm' button dynamically 
        const confirmBtn = document.createElement('button');
        confirmBtn.innerText = "Calculate Total & Confirm";
        confirmBtn.style.marginTop = "20px";
        confirmBtn.style.padding = "10px 20px";
        confirmBtn.style.backgroundColor = "#4ca0af"; 
        confirmBtn.style.color = "white";
        confirmBtn.style.border = "none";
        confirmBtn.style.cursor = "pointer";

        // Find the form and append the button
        const formContainer = document.querySelector('.form-one');
        if(formContainer) {
            formContainer.parentElement.appendChild(confirmBtn);
        }

        confirmBtn.addEventListener('click', (e) => {
            e.preventDefault();
            
            const selectedOption = bookingSelect.options[bookingSelect.selectedIndex];
            const text = selectedOption.text;
            const value = selectedOption.value;

            // Check if user selected the default placeholder title
            if (value === "Katugastota-Kandy" || value === "Akurana" || value === "Kahatapitiya-Gampola" || value === "Gelioya") {
                alert("Please select a valid time slot.");
                return;
            }

            // Extract Price from the text (e.g., "1 Hour... :Rs3500")
            // This splits the text by ':' and takes the second part
            const parts = text.split(':');
            let price = "0";
            if(parts.length > 1) {
                price = parts[1].trim();
            }

            // Show confirmation
            const confirmBooking = confirm(`You are booking:\n${text}\n\nTotal Price: ${price}\n\nDo you want to proceed to payment?`);
            
            if(confirmBooking) {
                // Redirect to a payment gateway or show payment instructions
                alert("Booking Confirmed! Please proceed to the payment counter.");
            }
        });
    }

    // 3. FIXING THE BOOKING POLICY BUTTON 
    window.showPolicy = function() {
        alert("Booking Policy:\n\n1. Cancellations must be made 24h in advance.\n2. Full payment required before entering the court.\n3. We are available 24/7 on Whatsapp @ 0766696080");
    }
});

// ... your existing contact form code ...

    // --- LOGIN FORM LOGIC ---
    const loginBtn = document.getElementById('btn-login');

    if (loginBtn) {
        loginBtn.addEventListener('click', (e) => {
            e.preventDefault(); // Stop page reload

            // Get values from the Login form
            const username = document.getElementById('login-username').value;
            const password = document.getElementById('login-password').value;

            // 1. Validation: Check if empty
            if (username === "" || password === "") {
                alert("Please enter both username and password.");
                return;
            }

            // 2. Simulate Login (Since we don't have a real database yet)
            if (username === "admin" && password === "1234") {
                alert("Login Successful! Welcome back.");
                window.location.href = "index.html"; // Redirect to home page
            } else {
                // If you want to accept any input for now, just remove the 'else' and alert success
                alert(`Login successful for user: ${username}`);
            }
        });
    }

    // --- REGISTER FORM LOGIC ---
    const registerBtn = document.getElementById('btn-register');
    
    if (registerBtn) {
        registerBtn.addEventListener('click', (e) => {
            e.preventDefault(); // Stop page reload

            // Get values from the Register form
            const email = document.getElementById('reg-email').value;
            const password = document.getElementById('reg-password').value;

            // 1. Validation: Check if empty
            if (email === "" || password === "") {
                alert("Please fill in all registration fields.");
                return;
            }

            // 2. Validation: Simple Email Check
            if (!email.includes("@") || !email.includes(".")) {
                alert("Please enter a valid email address.");
                return;
            }

            // 3. Validation: Password Strength (Optional)
            if (password.length < 6) {
                alert("Password must be at least 6 characters long.");
                return;
            }

            // Success
            alert(`Registration Successful!\nEmail: ${email}\nYou can now log in.`);
            
            // Clear the boxes
            document.getElementById('reg-email').value = "";
            document.getElementById('reg-password').value = "";
        });
    }