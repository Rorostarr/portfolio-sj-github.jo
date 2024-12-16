<script>
    const button = document.getElementById('book-button');
    const bookAnimation = document.getElementById('book-animation');
    const pages = document.querySelectorAll('.page');

    let currentPage = 0;

    button.addEventListener('click', (e) => {
        e.preventDefault();
        bookAnimation.classList.remove('hidden');
        turnPage();
    });

    function turnPage() {
        if (currentPage < pages.length) {
            pages[currentPage].style.transform = `rotateY(${180 * (currentPage + 1)}deg)`;
            currentPage++;
            setTimeout(turnPage, 500);
        } else {
            window.location.href = 'galerie-complete.html'; // Redirige vers la nouvelle page
        }
    }
</script>

