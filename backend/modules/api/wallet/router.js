const express = require('express');
const bodyParser = require('body-parser');
const Web3 = require('web3');
const lightwallet = require('eth-lightwallet');
const HookedWeb3Provider = require("hooked-web3-provider");

let Router = express.Router();

Router.use(bodyParser.urlencoded({extended: true}));

Router.post('/new-wallet', function(req,res){
    let web3 = new Web3();
    function setWeb3Provider(keystore){
        let web3Provider = new HookedWeb3Provider({
            host: "https://ropsten.infura.io/JSNq1F7CXtysVQqxYM1h",
            transaction_signer: keystore
        });
        web3.setProvider(web3Provider);
    }
    
    console.log(req.body.password);
    let passwordOfUser = req.body.password;
    let secretSeed = lightwallet.keystore.generateRandomSeed();

    lightwallet.keystore.createVault({
        password: passwordOfUser,
        seedPhrase: secretSeed,
        hdPathString: "m/0'/0'/0'"
    }, function(err,ks){
        ks.keyFromPassword(passwordOfUser, function(err,pwDerivedKey){
            if(err) console.log(err);
            ks.generateNewAddress(pwDerivedKey, 1);
            let address = ks.getAddresses()[0];
            let private_key = ks.exportPrivateKey(address,pwDerivedKey);
            let ksString = ks;
            
            res.send({
                keystoreFile: ksString,
                address: address,
                private_key: private_key,
                secretSeed: secretSeed
            });
        })
    })
})

module.exports = Router;

