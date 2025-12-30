// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Smooth scrolling for footer links
document.querySelectorAll('footer a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Read More/Show Less button for blog
const readMoreBtn = document.getElementById('read-more-btn');
let isExpanded = false;

readMoreBtn.addEventListener('click', function() {
    const hiddenBlogs = document.querySelectorAll('.blog-item.hidden');
    if (!isExpanded) {
        // Show all blogs
        hiddenBlogs.forEach(blog => {
            blog.classList.remove('hidden');
        });
        this.textContent = 'Show Less';
        isExpanded = true;
    } else {
        // Hide extra blogs
        hiddenBlogs.forEach(blog => {
            blog.classList.add('hidden');
        });
        this.textContent = 'Read More';
        isExpanded = false;
    }
});