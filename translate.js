function translateText() {
  const text = prompt('Masukkan teks yang ingin diterjemahkan:');
  if(!text) return;
  // Placeholder: nanti bisa pakai API Google Translate
  alert('Teks diterjemahkan (sementara placeholder): ' + text.split('').reverse().join(''));
}
