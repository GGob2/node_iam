const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

app.get('/api/:idType', (req, res) => {
    const idType = req.params.idType;
    if(idType === 'wallet-id') {
        res.send('You have selected "Wallet ID\"');
    } else if(idType === 'personal-id') {
        res.send('You have selected "Personal ID"'); 
    } else{
        res.send("Invalid Type");
    }
});

app.post('/requestData', function(req, res) {
    console.log(req.body);
    res.send("조회 완료")
});

app.listen(port, () => {
    console.log(`server is listening at location: ${port}`);
});

