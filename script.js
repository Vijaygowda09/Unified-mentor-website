// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Example JavaScript code for dynamic filtering (optional)
function filterMentors() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let mentorCards = document.getElementsByClassName('mentor-card');

    Array.from(mentorCards).forEach(card => {
        let name = card.querySelector('h3').textContent.toLowerCase();
        if (name.includes(input)) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
}
