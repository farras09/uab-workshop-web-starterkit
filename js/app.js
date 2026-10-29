// Workshop Web Development - Starter Script
// Mahasiswa bisa menambahkan interaksi sederhana jika sudah siap

document.addEventListener('DOMContentLoaded', () => {
  console.log('🚀 Starter kit berhasil dijalankan!');
  console.log('💡 Tips: Buka tab Elements & Console di DevTools (F12) untuk menginspeksi Box Model!');
  
  // Opsional: Klik efek mikro saat link dibuka
  const links = document.querySelectorAll('.link-item');
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      // Menyimpan log interaksi untuk pembelajaran
      console.log(`Mengakses tautan: ${link.querySelector('.link-text').innerText}`);
    });
  });
  

  // Menampilkan ringkasan data form registrasi
  const form = document.querySelector('#form-pendaftaran');
  const resultDialog = document.querySelector('#registration-result');

  if (form && resultDialog instanceof HTMLDialogElement) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const formData = new FormData(form);
      const fields = ['nama', 'nim', 'kelas', 'angkatan', 'no_hp', 'motivasi'];

      fields.forEach((field) => {
        const output = resultDialog.querySelector(`[data-result="${field}"]`);
        if (output) {
          output.textContent = formData.get(field)?.toString() ?? '';
        }
      });

      resultDialog.showModal();
    });
  }
});
