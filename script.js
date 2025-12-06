// --- PROJECT DATA ---
const projects = [
    {title:"Project Alpha: E-Commerce Platform",desc:"Developed a fully responsive, mobile-first product catalog platform. Demonstrated expertise in CSS Grid/Flexbox layouts and accessible component structure.",link:"https://github.com/MdAbuJakaria/ecommerce-project-alpha",tags:["HTML5","CSS3","JavaScript","Responsive Design","UI/UX"]},
    {title:"Project Beta: Task Manager (CRUD)",desc:"A robust client-side application using vanilla JavaScript for core logic. Implemented Create, Read, Update, Delete (CRUD) operations with Local Storage persistence.",link:"https://github.com/MdAbuJakaria/task-tracker-beta",tags:["JavaScript","Local Storage","DOM Manipulation","Accessibility"]},
    {title:"Project Gamma: Portfolio V1 Template",desc:"A customizable, single-page professional portfolio template. Highlights clean architecture, semantic markup, and performance optimization for fast loading.",link:"https://github.com/MdAbuJakaria/portfolio-gamma",tags:["Semantic HTML","CSS Variables","Performance","Inter Font"]}
];

const list = document.getElementById('project-list');

/**
 * Creates a project card element using pure DOM manipulation.
 * @param {object} p - Project data object.
 * @returns {HTMLElement} The project card div.
 */
const createProjectCard = (p) => {
    const card = document.createElement('div');
    card.className = 'card';
    
    // 1. Title
    const title = document.createElement('h3');
    title.textContent = p.title;

    // 2. Description
    const desc = document.createElement('p');
    desc.textContent = p.desc;
    
    // 3. Tags Container
    const tagsDiv = document.createElement('div');
    tagsDiv.className = 'project-tags';
    p.tags.forEach(tagText => {
        const tagSpan = document.createElement('span');
        tagSpan.className = 'project-tag';
        tagSpan.textContent = tagText;
        tagsDiv.appendChild(tagSpan);
    });

    // 4. Link Button
    const link = document.createElement('a');
    link.href = p.link;
    link.className = 'button primary-button';
    link.target = '_blank';
    link.rel = 'noopener noreferrer'; // Security best practice
    
    const icon = document.createElement('i');
    icon.className = 'fas fa-external-link-alt';
    
    link.appendChild(icon);
    link.appendChild(document.createTextNode(' View Project'));

    // Assemble the card
    card.appendChild(title);
    card.appendChild(desc);
    card.appendChild(tagsDiv);
    card.appendChild(link);
    
    return card;
};

const renderProjects = () => {
    list.innerHTML = ''; // Clear the list
    
    const fragment = document.createDocumentFragment();

    projects.forEach(p => {
        fragment.appendChild(createProjectCard(p));
    });
    
    list.appendChild(fragment);
};


// --- CONTACT FORM HANDLER ---
const contactForm = document.getElementById('contact-form');
const statusElement = document.getElementById('status');

const handleContactSubmit = (e) => {
    e.preventDefault();
    
    statusElement.className = 'form-status'; // Clear previous status classes
    
    // In a real scenario, use Fetch API to send data to a backend (e.g., Formspree/Netlify).
    
    // Simulation Success
    statusElement.innerText = 'Success! Your message has been sent. I will respond to you within 24 hours.';
    statusElement.classList.add('success-message'); 
    
    contactForm.reset();

    // Hide status after 6 seconds
    setTimeout(() => {
        statusElement.innerText = '';
        statusElement.classList.remove('success-message');
    }, 6000);
};


// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    // 1. Render projects
    if (list) {
        renderProjects();
    }
    
    // 2. Attach form handler
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmit);
    }
});