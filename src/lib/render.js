async function render(content) {
    const doc = document.getElementById('root');
    const wrap = document.createElement('span');
    wrap.innerHTML = content
    doc.innerHTML = wrap.innerHTML;
}