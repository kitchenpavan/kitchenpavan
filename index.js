const express = require('express');
const https = require('https');
const app = express();
const cors = require('cors');
app.use(cors({origin: '*', methods:['GET', 'POST']}));

// app.use(express.static('assets'))
app.use(express.static('public'));


const port = 3000;
app.get('/', (req, res) => {
    res.sendFile('./index.html', { root: __dirname });
});
app.listen(port, () => console.log(`listening on port ${port}!`));