var express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const sendNotification = require('./webpush.js')
var app = express();
dummyDb = []


const saveToDatabase = subscription => {
    dummyDb.push(subscription)
}


app.use(cors())
app.use(bodyParser.json())
app.use('/scripts', express.static('scripts'));
app.use('/css', express.static('css'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/" + "restraunt.html");
})
app.post('/save-subscription', (req, res) => {
    const subscription = req.body
    saveToDatabase(subscription)
    console.log(subscription)
    res.json({ message: 'success' })
})
app.get('/send-notification', (req, res) => {
    const subscription = dummyDb.subscription
    const message = 'Hello from ankita!!'
    for (i = 0; i < 2; i++)
        sendNotification(dummyDb[i], message)
    res.json({ message: 'message sent' })
})











var server = app.listen(8000, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})