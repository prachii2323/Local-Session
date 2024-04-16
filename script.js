function handleUpdate(user) {
  var userData = JSON.parse(localStorage.getItem('userData'));
  var index = userData.findIndex(function(u) {
      return u.username === user.username;
  });
  if (index !== -1) {
      var updatedFullName = prompt('Enter updated full name:', user.fullName);
      var updatedEmail = prompt('Enter updated email:', user.email);
      var updatedMobile = prompt('Enter updated mobile:', user.mobile);
      userData[index].fullName = updatedFullName;
      userData[index].email = updatedEmail;
      userData[index].mobile = updatedMobile;
      localStorage.setItem('userData', JSON.stringify(userData));
      location.reload();
  } else {
      console.log('User not found');
  }
}

// Function to handle delete
function handleDelete(user) {
  var userData = JSON.parse(localStorage.getItem('userData'));
  var index = userData.findIndex(function(u) {
      return u.username === user.username;
  });
  if (index !== -1) {
      userData.splice(index, 1);
      localStorage.setItem('userData', JSON.stringify(userData));
      location.reload();
  } else {
      console.log('User not found');
  }
}

var userData = JSON.parse(localStorage.getItem('userData'));
var tableBody = document.querySelector('#userTable tbody');

if (userData) {
  userData.forEach(function(user) {
      var row = tableBody.insertRow();
      var fullNameCell = row.insertCell(0);
      var emailCell = row.insertCell(1);
      var mobileCell = row.insertCell(2);
      var usernameCell = row.insertCell(3);
      var actionCell = row.insertCell(4);

      fullNameCell.innerHTML = user.fullName;
      emailCell.innerHTML = user.email;
      mobileCell.innerHTML = user.mobile;
      usernameCell.innerHTML = user.username;

      var updateButton = document.createElement('button');
      updateButton.textContent = 'Update';
      updateButton.addEventListener('click', function() {
          handleUpdate(user);
      });

      var deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', function() {
          handleDelete(user);
      });

      actionCell.appendChild(updateButton);
      actionCell.appendChild(deleteButton);
  });
}

document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault();

  var fullName = document.getElementById('fullName').value;
  var email = document.getElementById('email').value;
  var mobile = document.getElementById('mobile').value;
  var username = document.getElementById('username').value;
  var userData = JSON.parse(localStorage.getItem('userData')) || [];
  var user = {
    fullName: fullName,
    email: email,
    mobile: mobile,
    username: username
  };
  userData.push(user);
  localStorage.setItem('userData', JSON.stringify(userData));
  window.location.href = 'dashboard.html';
});
