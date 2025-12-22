let filterItem = document.querySelector('.items.list');

window.addEventListener('load', () => {
    if (!filterItem) return;

    // collect project cards and their associated data-name (from .project-img inside)
    const projectCards = Array.from(document.querySelectorAll('.project-card'));

    function applyFilter(filterName) {
        projectCards.forEach((card) => {
            const imgEl = card.querySelector('.project-img');
            const tag = imgEl ? imgEl.getAttribute('data-name') : null;
            if (filterName === 'all' || tag === filterName) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    }

    // Click handler for filter pills
    filterItem.addEventListener('click', (e) => {
        const target = e.target;
        if (!target.classList.contains('item-link')) return;

        const current = document.querySelector('.pill-active');
        if (current) current.classList.remove('pill-active');
        target.classList.add('pill-active');

        const filterName = target.getAttribute('data-name');
        applyFilter(filterName);
    });

    // Trigger initial state: ensure the active pill (or 'all') is applied on load
    const active = document.querySelector('.pill-active') || document.querySelector('.item-link[data-name="all"]');
    if (active) {
        active.classList.add('pill-active');
        applyFilter(active.getAttribute('data-name') || 'all');
    }
});