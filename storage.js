function saveMessage(msg) {
  let messages = JSON.parse(localStorage.getItem('chatMessages')) || [];
  messages.push(msg);
  localStorage.setItem('chatMessages', JSON.stringify(messages));
}

function loadMessages() {
  const messages = JSON.parse(localStorage.getItem('chatMessages')) || [];
  const messagesDiv = document.getElementById('messages');
  messages.forEach(msg => {
    const div = document.createElement('div');
    div.textContent = msg;
    div.classList.add(msg.startsWith('Kamu:') ? 'user' : 'ai');
    messagesDiv.appendChild(div);
  });
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}
