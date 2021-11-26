document.addEventListener('click', (event) => {
    let target = event.target;
    if (target.tagName === 'A') {
        const to = target.getAttribute('to');
        if (to !== null) {
            event.preventDefault();

            const url = new URL(to, window.location);
            window.history.pushState({}, '', url);
            route(to);
        }
    }
});
