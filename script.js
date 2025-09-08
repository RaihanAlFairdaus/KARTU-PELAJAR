const form = document.getElementById('ktpForm');
const ktpCard = document.getElementById('ktpCard');
const fotoInput = document.getElementById('foto');
const fotoPreview = document.getElementById('fotoPreview');

form.addEventListener('submit', function(event){
  event.preventDefault();

  // Masukkan data ke kartu
  document.getElementById('nameCard').textContent = document.getElementById('name').value;
  document.getElementById('birthdayCard').textContent = document.getElementById('birthday').value;
  document.getElementById('constellationCard').textContent = document.getElementById('constellation').value;
  document.getElementById('classCard').textContent = document.getElementById('class').value;

  // Tampilkan foto
  const file = fotoInput.files[0];
  if(file){
    const reader = new FileReader();
    reader.onload = function(e){
      fotoPreview.src = e.target.result;
    }
    reader.readAsDataURL(file);
  }

  // Sembunyikan form, tampilkan kartu depan
  form.style.display = 'none';
  ktpCard.style.display = 'block';
});
