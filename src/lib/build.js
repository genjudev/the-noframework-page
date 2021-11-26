function build(element) {
    let doc = document.createElement('span');
    doc.innerHTML = element;
    return doc.innerHTML
}