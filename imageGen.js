function generateImage() {
  const promptText = prompt('Masukkan deskripsi gambar:');
  if(!promptText) return;
  // Placeholder: nanti bisa pakai API DALL·E
  const output = document.getElementById('imageOutput');
  output.innerHTML = '<img src="https://via.placeholder.com/300x200?text='+encodeURIComponent(promptText)+'">';
  output.classList.remove('hidden');
}
