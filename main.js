import './style.css'
import getChatCompletition from './api/api.js';

document.addEventListener('DOMContentLoaded', function () {
  const inputText = document.getElementById('inputText');
  const summarizeButton = document.getElementById('summarizeButton');
  const summaryResult = document.getElementById('summaryResult');

  summarizeButton.addEventListener('click', async function () {
    const textToSummarize = inputText.value;

    console.log('Summarizing:', textToSummarize.length, 'characters');

    const summary = await getChatCompletition(textToSummarize);

    if ( summary ) {
      summaryResult.textContent = summary;
    }

  });
});
