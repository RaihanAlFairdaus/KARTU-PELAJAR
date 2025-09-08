/* ---------- Typing Effect ---------- */
const typingEl = document.getElementById('typing');
const typingText = ['AI by Rehan', 'Web Toolbox', 'HTML • CSS • JS'];
let tIdx = 0, chIdx = 0;
function typeLoop(){
  const txt = typingText[tIdx];
  typingEl.textContent = txt.slice(0,chIdx);
  chIdx++;
  if(chIdx>txt.length){
    chIdx=0; tIdx=(tIdx+1)%typingText.length;
    setTimeout(typeLoop,700);
  } else {
    setTimeout(typeLoop,90);
  }
}
typeLoop();

/* ---------- Fade-in on scroll ---------- */
const faders = document.querySelectorAll('.fade-in');
const obs = new IntersectionObserver(entries=>{
  entries.forEach(ent=>{
    if(ent.isIntersecting) ent.target.classList.add('show');
  });
},{threshold:0.15});
faders.forEach(f => obs.observe(f));

/* ---------- Chat AI ---------- */
const chatLog = document.getElementById('chatLog');
const chatInput = document.getElementById('chatInput');
const sendBtn = document.getElementById('sendBtn');

function appendMsg(text,type){
  const div = document.createElement('div');
  div.className = 'chat-msg ' + type;
  div.textContent = text;
  chatLog.appendChild(div);
  chatLog.scrollTop = chatLog.scrollHeight;
}

async function askAI(question){
  try{
    const res = await fetch('http://localhost:3000/ask',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({question})
    });
    const data = await res.json();
    return data.answer || 'AI tidak menjawab';
  }catch(err){
    console.error(err);
    return 'Gagal terhubung ke server AI';
  }
}

sendBtn.addEventListener('click', async ()=>{
  const q = chatInput.value.trim();
  if(!q) return;
  appendMsg(q,'user');
  chatInput.value='';
  appendMsg('...','ai');
  const aiMsg = await askAI(q);
  chatLog.lastChild.textContent = aiMsg;
});

chatInput.addEventListener('keypress', e=>{
  if(e.key==='Enter'){ sendBtn.click(); }
});
