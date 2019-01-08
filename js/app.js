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