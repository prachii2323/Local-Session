document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
    var mobile = document.getElementById('mobile').value;
    var username = document.getElementById('username').value;
  
    
    var userData = JSON.parse(localStorage.getItem('userData')) || [];
  
    //user object
    var user = {
      fullName: fullName,
      email: email,
      mobile: mobile,
      username: username
    };
  
    // Add user object to user data array
    userData.push(user);
  
    // Store user data array in local storage
    localStorage.setItem('userData', JSON.stringify(userData));
    alert('Registration successful!');
    // Redirect to dashboard page
    window.location.href = 'dashboard.html';
  });
  