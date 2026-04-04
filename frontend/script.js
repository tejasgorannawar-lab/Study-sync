document.querySelectorAll('.nav-links li').forEach(item => {
    item.addEventListener('click', function() {
        // Remove active class from all
        document.querySelectorAll('.nav-links li').forEach(li => li.classList.remove('active'));
        // Add to clicked item
        this.classList.add('active');
    });
});

// Simple button interaction
const getStartedBtn = document.querySelector('.btn-primary');
getStartedBtn.addEventListener('click', () => {
    alert('Initializing Study Sync...');
});
