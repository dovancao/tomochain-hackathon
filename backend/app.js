const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');

const WalletRouter = require('./modules/api/wallet/router');

let app = express();

app.use(cors());

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/api/wallet',WalletRouter);

const port = 5000;

app.listen(port, (err) => {
    if(err) console.log(err)
    else console.log("Server is listening");
})