document.addEventListener('DOMContentLoaded', function() {
    // Initialize tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
    
    // Search functionality
    const searchInput = document.querySelector('.search-box input');
    searchInput.addEventListener('keyup', function(e) {
        if (e.key === 'Enter') {
            const searchTerm = this.value.toLowerCase();
            if (searchTerm.trim() === '') return;
            
            // In a complete implementation, this would search through content
            // and highlight/filter results. For now, just show an alert.
            alert(`Searching for: ${searchTerm}\n\nIn a complete implementation, this would filter the content to show relevant policies, laws, or safety information.`);
        }
    });
    
    // FAQ accordion functionality
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        
        question.addEventListener('click', () => {
            const isOpen = answer.style.display === 'block';
            
            // Close all answers
            document.querySelectorAll('.faq-answer').forEach(ans => {
                ans.style.display = 'none';
            });
            
            // Remove all active classes
            document.querySelectorAll('.faq-question').forEach(q => {
                q.classList.remove('active');
            });
            
            // Toggle this one if it wasn't open
            if (!isOpen) {
                answer.style.display = 'block';
                question.classList.add('active');
            }
        });
    });
    
    // Tab content loading simulation
    const tabPanes = document.querySelectorAll('.tab-pane');
    tabPanes.forEach(pane => {
        if (!pane.classList.contains('active')) {
            // In a complete implementation, we might load content dynamically
            // when tabs are shown. For now, just log to console.
            const tabId = pane.getAttribute('id');
            const tabButton = document.querySelector(`[data-bs-target="#${tabId}"]`);
            
            tabButton.addEventListener('shown.bs.tab', function() {
                console.log(`Loading content for ${tabId} tab...`);
            });
        }
    });
    
    // Print button functionality
    const printButtons = document.querySelectorAll('.print-btn');
    printButtons.forEach(button => {
        button.addEventListener('click', function() {
            window.print();
        });
    });
    
    // External link tracking
    const externalLinks = document.querySelectorAll('a[target="_blank"]');
    externalLinks.forEach(link => {
        link.addEventListener('click', function() {
            console.log(`Navigating to external resource: ${this.href}`);
        });
    });
    
    // Initialize scroll animations
    const animateElements = document.querySelectorAll('[data-animate]');
    
    function checkScroll() {
        animateElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.classList.add('animated');
            }
        });
    }
    
    // Initial check
    checkScroll();
    
    // Check on scroll
    window.addEventListener('scroll', checkScroll);
});