async function getChatCompletition(prompt) {
  const MODEL = 'gpt-3.5-turbo';
  const API_URL = 'https://api.openai.com/v1/chat/completions';

  let apiKey = null;

  try {
    const result = await browser.storage.local.get('apiKey');
    apiKey = result.apiKey;
  } catch (error) {
    console.error('Error loading API key:', error);
    return null;
  }

  if ( !apiKey ) {
    console.error('API key not found.');
    return null;
  }

  const messages = [
    {
      role: "system",
      content: "You are summarization AI. Summarize the following text:",
    },
    {
      role: "user",
      content: prompt,
    }
  ]

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: MODEL,
        messages: messages,
        temperature: 0,
        n: 1,
      })
    });

    if ( !response.ok ) {
      throw new Error('API request failed.');
    }

    const data = await response.json();

    console.log('API response:', JSON.stringify(data, null, 2));

    return data.choices[0].message.content.trim();

  } catch (error) {
    console.error('API error:', error);
    return null;
  }
}

export default getChatCompletition;