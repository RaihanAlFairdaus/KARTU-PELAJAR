function startApp() {
  document.getElementById('splash-screen').classList.add('hidden');
  document.getElementById('app').classList.remove('hidden');
  loadMessages();
}

// Mode Gelap/Terang
function toggleMode() {
  document.body.classList.toggle('dark-mode');
}

// Upload File
function uploadFile(event) {
  const file = event.target.files[0];
  if(file) alert('File ' + file.name + ' berhasil diupload (sementara hanya notifikasi).');
}

// Kalkulator
function toggleCalculator() {
  document.getElementById('calculator').classList.toggle('hidden');
}
