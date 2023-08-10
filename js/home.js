// navbar only

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function() {
    if (window.scrollY > 0) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

window.addEventListener("scroll", function() {
    if (window.scrollY > 0) {
        navbar.classList.add("scrolled");
        navbar.classList.add("blur-bg"); // Tambahkan kelas blur-bg saat navbar di-scroll
    } else {
        navbar.classList.remove("scrolled");
        navbar.classList.remove("blur-bg"); // Hapus kelas blur-bg saat navbar di-scroll ke atas
    }
});


//end of navbar



