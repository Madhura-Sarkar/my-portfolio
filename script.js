document.addEventListener("DOMContentLoaded", function () {
    const divs = document.querySelectorAll('div[id]');  // Select divs with ids
    const navLinks = document.querySelectorAll('.nav-link');

    // Determine the current page
    const currentPage = window.location.pathname.split('/').pop(); // Get the current page name

    // Remove active class from all nav links
    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    // Set active class based on the current page
    if (currentPage === 'index.html') {
        document.querySelector('.nav-link[href="#home"]').classList.add('active');
    } else if (currentPage === 'projects.html') {
        document.querySelector('.nav-link[href="projects.html"]').classList.add('active');
    }

    window.addEventListener('scroll', () => {
        let currentDiv = '';

        // Loop through each div to determine which one is in view
        divs.forEach(div => {
            const divTop = div.offsetTop;
            const divHeight = div.clientHeight;

            if (window.scrollY >= divTop - divHeight / 3) {
                currentDiv = div.getAttribute('id');
            }
        });

        // Remove active class from all nav links
        navLinks.forEach(link => {
            link.classList.remove('active');
        });

        // Add active class to the nav link corresponding to the current div
        const activeLink = document.querySelector(`.nav-link[href="#${currentDiv}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    });

    // Hamburger menu functionality
    document.getElementById('menu-toggle').addEventListener('click', function () {
        const menu = document.getElementById('mobile-menu');
        menu.classList.toggle('hidden');
    });

    // Close mobile menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            const menu = document.getElementById('mobile-menu');
            menu.classList.add('hidden'); // Hide the menu
        });
    });
});

// about script
const paragraphs = [
    "Hello! My name is Madhura Sarkar. I am a passionate individual who loves to explore new technologies and ideas.",
    "I enjoy coding, designing, and creating innovative solutions to everyday problems.",
    "In my free time, I like to read books, travel, and spend time with my family and friends.",
    "I believe in continuous learning and strive to improve myself every day.",
    "I am excited to share my journey with you and hope to inspire others along the way!"
];

let currentLine = 0;
const typewriterElement = document.getElementById('typewriter');

function typeLine(line) {
    let index = 0;
    const typingSpeed = 50; // Speed of typing in milliseconds

    const typingInterval = setInterval(() => {
        if (index < line.length) {
            typewriterElement.innerHTML += line.charAt(index);
            index++;
        } else {
            clearInterval(typingInterval);
            currentLine++;
            if (currentLine < paragraphs.length) {
                setTimeout(() => {
                    typewriterElement.innerHTML += '<br>'; // Add a line break
                    typeLine(paragraphs[currentLine]); // Type the next line
                }, 1000); // Wait before typing the next line
            }
        }
    }, typingSpeed);
}

// Start typing the first line
typeLine(paragraphs[currentLine]);


// aptitude script
document.querySelectorAll('.skill').forEach(skill => {
    skill.classList.add('px-4', 'py-2', 'text-sm', 'font-semibold', 'text-white', 'bg-gray-700', 
        'border-2', 'border-indigo-400', 'rounded-full', 'shadow-md', 'cursor-pointer', 
        'transition-all', 'duration-300');

    skill.addEventListener('mouseenter', () => {
        skill.classList.add('scale-110', 'shadow-indigo-500/50', 'bg-indigo-500', 'text-gray-900');
    });

    skill.addEventListener('mouseleave', () => {
        skill.classList.remove('scale-110', 'shadow-indigo-500/50', 'bg-indigo-500', 'text-gray-900');
    });
});


// FAQs script 
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        answer.classList.toggle('hidden');
        question.classList.toggle('text-purple-400');
    });
});

const toggleButton = document.getElementById('toggle-questions');
const hiddenFaqItems = document.querySelectorAll('.faq-item.hidden');

toggleButton.addEventListener('click', () => {
    hiddenFaqItems.forEach(item => item.classList.toggle('hidden'));
    toggleButton.textContent = hiddenFaqItems[0].classList.contains('hidden') ? 'Show More' : 'Show Less';
});

