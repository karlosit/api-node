const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.json({succes: "Hello World!"});
});

app.get('/users', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.status(200).json({
        user: "carlosit"
    })
});

app.listen(port, () => console.log(`API listening on port ${port} !`));