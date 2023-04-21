const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('자바스크립트로 할지.. Python으로 할 지 고민중..');
});

app.listen(port, () => {
    console.log(`server is listening at location: ${port}`);
});