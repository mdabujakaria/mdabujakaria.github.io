document.addEventListener('DOMContentLoaded', () => {
    const projectList = document.getElementById('project-list');
    const projects = [
        { title: "E-Commerce App", link: "#", tags: ["React", "API"] },
        { title: "Weather Dashboard", link: "#", tags: ["JS", "Fetch"] },
        { title: "Portfolio V1", link: "#", tags: ["HTML", "CSS"] },
        { title: "Simple Landing Page", link: "#", tags: ["HTML", "CSS"] }
    ];

    projects.forEach(project => {
        const card = document.createElement('div');
        card.classList.add('project-card');
        card.innerHTML = `<h4>${project.title}</h4><p>${project.tags.join(' | ')}</p>`;
        card.addEventListener('click', () => window.open(project.link || '#', '_blank'));
        projectList.appendChild(card);
    });

    // Simple scroll animation for blocks
    const animatedBlocks = document.querySelectorAll('.block-base, .header');
    animatedBlocks.forEach(block => {
        block.style.opacity = 0;
        block.style.transform = 'translateY(20px)';
        block.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    });

    const animateBlocks = () => {
        animatedBlocks.forEach((block, index) => {
            if(!block.classList.contains('header')) {
                setTimeout(() => {
                    block.style.opacity = 1;
                    block.style.transform = 'translateY(0)';
                }, 100*index);
            }
        });
        document.querySelector('.header').style.opacity = 1;
        document.querySelector('.header').style.transform = 'translateY(0)';
    };

    animateBlocks();
});
