const express = require('express');
const app = express();
const port = 3030;
const server = require('http').Server(app);

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('room');
})



server.listen(port, () => console.log(`Listening on port: ${port}`));