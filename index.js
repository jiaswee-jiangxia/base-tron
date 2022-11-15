const TronWeb = require('tronweb')
const express = require('express');
const app = express();
const port = 6060;

const fullNode = 'https://api.shasta.trongrid.io';
const solidityNode = 'https://api.shasta.trongrid.io';
const eventServer = 'https://api.shasta.trongrid.io';
const privateKey = 'f5b547e851785e7edfc3e903ed9b7d6f37be9f08394dd90482f6390581c4b102';
const tronWeb = new TronWeb(fullNode,solidityNode,eventServer,privateKey);

app.get('/createAddress', (req, res) => {
    const acc = TronWeb.createRandom()
    res.send(acc)
});

app.post('/createTx', async (req, res) => {
    // const sdk = require('api')('@tron-cn/v4.5.2#2rmgt4fla6jxkgn');
    // let resQ = {}
    //
    // sdk.createtransaction({
    //     owner_address: 'TD66b2Y7UJukqSmK9qouyo5m7Vvpc1y7B5',
    //     to_address: 'TBxB41UnL8W2AJdk1nWmDYuvkURydmQJEN',
    //     amount: 1000,
    //     visible: true
    // })
    //     .then(async ({data}) => {
    //
    //     })
    //     .catch(err => console.error(err));

    const tradeobj = await tronWeb.transactionBuilder.sendTrx("TNo9e8MWQpGVqdyySxLSTw3gjgFQWE3vfg", 100,"TD66b2Y7UJukqSmK9qouyo5m7Vvpc1y7B5",1);
    const signedtxn = await tronWeb.trx.sign(tradeobj, privateKey);
    res.send(signedtxn)

    // let resQ = tronWeb.trx.sendTransaction("TVDGpn4hCSzJ5nkHPLetk8KQBtwaTppnkr", 1000);
    // res.send(resQ)
    // const tradeobj = await TronWeb.transactionBuilder.sendTrx("TNo9e8MWQpGVqdyySxLSTw3gjgFQWE3vfg", 100, "TM2TmqauSEiRf16CyFgzHV2BVxBejY9iyR", 1);

    // console.log(signedtxn)
});



app.listen(port, () => console.log(`App started on ${port}!`));

// divert elephant height calm doctor turtle black inject float goose two night