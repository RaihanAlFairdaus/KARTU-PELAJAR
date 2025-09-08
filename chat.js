function sendMessage() {
  const input = document.getElementById('userInput');
  const messages = document.getElementById('messages');
  if(!input.value.trim()) return;

  // User message
  const userMsg = document.createElement('div');
  userMsg.classList.add('user');
  userMsg.textContent = 'Kamu: ' + input.value;
  messages.appendChild(userMsg);

  // AI response
  getAIResponse(input.value).then(response => {
    const aiMsg = document.createElement('div');
    aiMsg.classList.add('ai');
    aiMsg.textContent = 'AI: ' + response;
    messages.appendChild(aiMsg);

    saveMessage('Kamu: ' + input.value);
    saveMessage('AI: ' + response);
    messages.scrollTop = messages.scrollHeight;
  });

  input.value = '';
}

// Contoh panggilan ke API OpenAI (harus punya API key)
async function getAIResponse(text) {
  // Placeholder, nanti bisa diganti pakai fetch ke OpenAI API
  text = text.toLowerCase();
  if(text.includes('halo')) return 'Halo! Apa kabar?';
  if(text.includes('siapa namamu')) return 'Aku AI buatan Rehan!';
  return 'Aku sedang belajar memahami itu, tapi akan membalas sebaik mungkin.';
}
