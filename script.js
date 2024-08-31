document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Dynamic filter or search functionality (for mentors.html)
    const mentorCards = document.querySelectorAll('.mentor-card');
    const searchInput = document.createElement('input');
    searchInput.setAttribute('placeholder', 'Search by expertise...');
    document.querySelector('#mentor-grid').insertBefore(searchInput, mentorCards[0]);

    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        mentorCards.forEach(card => {
            const expertise = card.querySelector('p').textContent.toLowerCase();
            if (expertise.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });

    // Modal popup for contact form (Optional)
    const modal = document.createElement('div');
    modal.style.display = 'none';
    modal.style.position = 'fixed';
    modal.style.left = '50%';
    modal.style.top = '50%';
    modal.style.transform = 'translate(-50%, -50%)';
    modal.style.backgroundColor = 'white';
    modal.style.padding = '20px';
    modal.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';

    const closeModal = document.createElement('button');
    closeModal.textContent = 'Close';
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    modal.appendChild(closeModal);
    document.body.appendChild(modal);

    document.querySelector('form').addEventListener('submit', function(e) {
        e.preventDefault();
        modal.style.display = 'block';
    });
});
