import './settings.css';

document.addEventListener('DOMContentLoaded', function () {
  const apiKeyInput = document.getElementById('apiKey');
  const saveButton = document.getElementById('saveButton');

  // Load the API key if it has been saved previously
  browser.storage.local.get('apiKey')
    .then(result => {
      if (result.apiKey) {
        console.log('API key loaded:', result.apiKey);

        apiKeyInput.value = result.apiKey;
      } else {
        console.warn('API key not found.');
      }
    })
    .catch(error => {
      console.error('Error loading API key:', error);
    });

  saveButton.addEventListener('click', function () {
    const apiKey = apiKeyInput.value;

    // Save the API key to storage
    browser.storage.local.set({ apiKey })
      .then(() => {
        console.log('API key saved.');
      })
      .catch(error => {
        console.error('Error saving API key:', error);
      });
  });
})