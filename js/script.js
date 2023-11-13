// Navbar Fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
}


// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');
hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});


// Testimonials
const mainTesti = document.querySelectorAll('.testimonial-inner');
// Set elemen pertama sebagai aktif secara default
mainTesti[1].classList.add('active');

// Jalankan Fungsi ketika di klik
function showTesti(clickImgTestimoni) {
    // Hapus kelas 'active' dari elemen sebelumnya
    mainTesti.forEach(item => {
        item.classList.remove('active');
    });

    // Tambahkan kelas 'active' ke elemen yang diklik
    clickImgTestimoni.classList.add('active');

    // Sembunyikan semua .testimonial-items
    document.querySelectorAll('.testimonial-items').forEach(item => {
        item.classList.add('hidden');
    });

    // Tampilkan .testimonial-items yang terkait dengan elemen yang diklik
    clickImgTestimoni.querySelector('.testimonial-items').classList.remove('hidden');
}