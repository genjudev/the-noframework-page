const express = require('express');
const app = express();
const path = require('path');

const PORT = 3000;

app.use(express.static('./'));

app.get('*', function (_req, res) {
    res.sendFile('./index.html', {
        root: path.join(__dirname, './'),
    });
});

app.listen(3000, () => {
    console.log(`Listen on Port: ${PORT}`);
});
