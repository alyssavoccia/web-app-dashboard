// Event listener to close alert dialog box on click
const exitAlert = document.querySelector('.exit-alert');
const alertBox = document.querySelector('.alert-box');
exitAlert.addEventListener('click', (e) => {
  alertBox.style.display = 'none'; 
});

// Event listener for when a user clicks on the bell icon
const bell = document.querySelector('.bell-icon');
const bellBadge = document.querySelector('.bell-badge');
const notificationContent = document.querySelector('.notification-content');
bell.addEventListener('click', () => {
  notificationContent.classList.toggle('show');
  bellBadge.classList.add('hide');
});

// Validation for Message form
const sendButton = document.querySelector('.message-button');
sendButton.addEventListener('click', (e) => {
  e.preventDefault();
  let userSearch = document.forms['message-user-form']['search-user'].value;
  let userMessage = document.forms['message-user-form']['message-user'].value;
  let userAlert = document.querySelector('.user-alert');
  let messageAlert = document.querySelector('.message-alert');
  let successMessage = document.querySelector('.success-message');
  if (userSearch === '') {
    userAlert.style.display = 'block';
  } else {
    userAlert.style.display = 'none';
  }
  if (userMessage === '') {
    messageAlert.style.display = 'block';
  } else {
    messageAlert.style.display = 'none';
  }

  if (userSearch !== '' && userMessage !== '') {
    successMessage.style.display = 'block';
    document.getElementById('message-form').reset();
  }
});