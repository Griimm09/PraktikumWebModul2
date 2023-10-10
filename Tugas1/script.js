const angka1Input = document.getElementById('angka1');
const angka2Input = document.getElementById('angka2');
const hasilSpan = document.getElementById('hasil');

function hitung(operator) {
  const angka1 = parseFloat(angka1Input.value);
  const angka2 = parseFloat(angka2Input.value);
  let hasil;

  switch (operator) {
    case '+':
      hasil = angka1 + angka2;
      break;
    case '-':
      hasil = angka1 - angka2;
      break;
    case '*':
      hasil = angka1 * angka2;
      break;
    case '/':
      if (angka2 !== 0) {
        hasil = angka1 / angka2;
      } else {
        hasil = 'Tidak bisa dibagi oleh 0';
      }
      break;
    default:
      hasil = 'Operasi tidak valid';
  }

  alert('hasil = ' + hasil);
}

function reset() {
  angka1Input.value = '';
  angka2Input.value = '';
  hasilSpan.textContent = '';
}

document.getElementById('tambah').addEventListener('click', () => hitung('+'));
document.getElementById('kurang').addEventListener('click', () => hitung('-'));
document.getElementById('kali').addEventListener('click', () => hitung('*'));
document.getElementById('bagi').addEventListener('click', () => hitung('/'));
document.getElementById('reset').addEventListener('click', reset);
