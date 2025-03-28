// Handle registration form submission
document.getElementById('registerForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const role = document.querySelector('input[name="role"]:checked').value;
    const mobile = document.getElementById('mobile').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const address = document.getElementById('address').value;
    const kycProof = document.getElementById('kyc-proof').files[0];
    const kycImage = document.getElementById('kyc-image').files[0];
    
    // Validate password match
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }
    
    // Validate mobile number length
    if (mobile.length !== 10) {
        alert('Mobile number must be 10 digits.');
        return;
    }
    
    // Create form data object
    const formData = {
        firstName,
        lastName,
        role,
        mobile,
        email,
        password,
        address,
        kycProof: kycProof ? kycProof.name : null,
        kycImage: kycImage ? kycImage.name : null
    };
    
    // In a real app, you would send this to your backend
    console.log('Registration data:', formData);
    
    // For demo purposes, store user data in localStorage
    const userData = {
        firstName,
        lastName,
        email,
        role,
        mobile
    };
    localStorage.setItem('userData', JSON.stringify(userData));
    
    // For demo purposes, just show an alert and redirect
    alert('Registration successful! Redirecting to login page...');
    window.location.href = 'login.html';
});