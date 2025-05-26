function beli(namaMobil) {
  alert("Terima kasih! Kamu telah memilih untuk membeli " + namaMobil + ". Tim kami akan segera menghubungi kamu.");
}

// Smooth scroll
document.querySelectorAll('.nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: 'smooth'
      });
    }
  });
});

// wa otomatis
const nomor = "6285806628212";

document.querySelectorAll('.btn-beli').forEach(button => {
  button.addEventListener('click', () => {
    const pesan = button.getAttribute('data-pesan');
    const url = "https://wa.me/" + nomor + "?text=" + pesan;
    window.open(url, '_blank');
  });
});



