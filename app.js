const chatLog = document.getElementById('chatLog');
const chatInput = document.getElementById('chatInput');
const sendBtn = document.getElementById('sendBtn');

function askAI(question){
  const answers = [
    "Menarik pertanyaannya!",
    "Saya pikir jawabannya adalah 42.",
    "Coba jelaskan lebih rinci.",
    "Itu tergantung konteksnya.",
    "Hmm… saya tidak yakin, tapi bisa dicoba."
  ];
  return answers[Math.floor(Math.random()*answers.length)];
}

function appendMsg(text, type){
  const div = document.createElement('div');
  div.className = 'chat-msg ' + type;
  div.textContent = text;
  chatLog.appendChild(div);
  chatLog.scrollTop = chatLog.scrollHeight;
}

sendBtn.addEventListener('click', ()=>{
  const q = chatInput.value.trim();
  if(!q) return;
  appendMsg(q,'user');
  chatInput.value='';
  setTimeout(()=>{
    const a = askAI(q);
    appendMsg(a,'ai');
  }, 500);
});

chatInput.addEventListener('keypress', e=>{
  if(e.key==='Enter'){ sendBtn.click(); }
});
