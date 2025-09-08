function calculate() {
  const input = document.getElementById('calcInput').value;
  let result;
  try { result = eval(input); }
  catch(e) { result = 'Error'; }
  document.getElementById('calcResult').textContent = 'Hasil: ' + result;
}
