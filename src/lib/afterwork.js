document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        if (window.location.pathname !== '') {
            route(window.location.pathname);
        }
    }
};
