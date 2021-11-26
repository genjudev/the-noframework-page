function route(name) {
    let content = '';
    switch (name) {
        case '/home':
            content = Home();
            break;
        case '/lol':
            content = '<h1>LOL</h1>';
            break;
        default:
            content = '';
            break;
    }
    render(content);
}
