// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dynamic Filter/Search (Basic Example)
const searchInput = document.getElementById('search');
searchInput.addEventListener('input', function() {
    const searchValue = searchInput.value.toLowerCase();
    const mentorCards = document.querySelectorAll('.mentor-card');

    mentorCards.forEach(card => {
        const name = card.querySelector('h3').textContent.toLowerCase();
        if (name.includes(searchValue)) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
});

// Modal Popup (Example for Contact Form)
const modal = document.getElementById('contactModal');
const contactButton = document.getElementById('contactBtn');
const closeModal = document.getElementsByClassName('close')[0];

contactButton.onclick = function() {
    modal.style.display = 'block';
}

closeModal.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
