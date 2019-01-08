// Event listener to close alert dialog box on click
const exitAlert = document.querySelector('.exit-alert');
const alertBox = document.querySelector('.alert-box');
exitAlert.addEventListener('click', (e) => {
  alertBox.style.display = 'none'; 
})