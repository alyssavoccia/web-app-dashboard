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
  // Checks to see if the user has entered anything into the fields
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


// SAVING SETTINGS TO LOCAL STORAGE

// Function to support local storage on the page
function supportsLocalStorage() {
  try {
    return 'localStorage' in window && window['localStorage'] !== null;
  } catch(e) {
    return false;
  }
}

// Function to retrieve the recent saved settings
function getRecentSettings() {
  let emailSettings = localStorage.getItem('email_val');
  let profileSettings = localStorage.getItem('profile_val');
  let timezoneSettings = localStorage.getItem('timezone_val');
  let settingsArray = [];
  settingsArray.push(emailSettings, profileSettings, timezoneSettings);
  return settingsArray;
}



// What happens on page load
window.onload = function() {
  const saveButton = document.querySelector('.save-button');
  const cancelButton = document.querySelector('.cancel-button');
  let emailNotif = document.getElementById('send-email-notifications');
  let profilePublic = document.getElementById('set-profile-public');
  let timezone = document.querySelector('.timezone-options');
  if(supportsLocalStorage()) {
    // Initialize recent settings
    let recentSettings = getRecentSettings();
    // Checks to see if there are saved options
    if (recentSettings[0] == null || recentSettings[1] == null) {
      emailNotif.setAttribute('checked', true);
      profilePublic.setAttribute('checked', true);
      // What to do if options have been saved
    } else {
      if (recentSettings[0] === 'true') {
        emailNotif.checked = true;
      } else {
        emailNotif.checked = false;
      }
      if (recentSettings[1] === 'true') {
        profilePublic.checked = true;
      } else {
        profilePublic.checked = false;
      }
      if (recentSettings[2] == "eastern") {
        timezone.value = 'eastern';
      } else if (recentSettings[2] == 'central') {
        timezone.value = 'central';
      } else if (recentSettings[2] == 'mountain') {
        timezone.value = 'mountain';
      } else if (recentSettings[2] == 'pacific') {
        timezone.value = 'pacific';
      }
    }
    

    
    // Event listener for save on settings form
    saveButton.addEventListener('click', (e) => {  
      e.preventDefault();
      if (emailNotif.checked == true) {
        localStorage.setItem('email_val', true);
      } else {
        localStorage.setItem('email_val', false);
      }
      if (profilePublic.checked == true) {
        localStorage.setItem('profile_val', true);
      } else {
        localStorage.setItem('profile_val', false);
      }
      // What happens when the user selects a timezone
      let selectedTimezone = timezone.options[timezone.selectedIndex].value;
      localStorage.setItem('timezone_val', selectedTimezone);
    });

    // Event listener for cancel on settings form
    cancelButton.addEventListener('click', (e) => {
      e.preventDefault();
      // Gets the values the user has currently selected
      let selectedEmail = document.getElementById('send-email-notifications').checked;
      let selectedProfile = document.getElementById('set-profile-public').checked;
      // Gets the current values for the different options
      let recentSettings = getRecentSettings();
      let savedEmail = recentSettings[0] == 'false' ? false : true;
      let savedProfile = recentSettings[1] == 'false' ? false: true;
      let savedTimezone = recentSettings[2];
      // Checks to see if the users options match what was saved
      if (savedEmail !== selectedEmail) {
        emailNotif.checked = savedEmail;
      }
      if (savedProfile !== selectedProfile) {
        profilePublic.checked = savedProfile;
      }
      if (timezone.value == '') {
        timezone.value = '';
      } else if (savedTimezone !== timezone.value) {
        if (savedTimezone == null) {
          timezone.value = '';
        } else {
          timezone.value = savedTimezone;
        }
      }
    });
  }
} 