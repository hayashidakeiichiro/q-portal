const express = require('express')
const app = express()

app.use('/img', express.static(__dirname + '/app/dist/img/'));
app.use('/css', express.static(__dirname + '/app/dist/css/'));
app.use('/js', express.static(__dirname + '/app/dist/js/'));
app.use('/favicon', express.static(__dirname + '/app/dist/favicon.ico'));
app.get('/', (req, res) => res.sendFile(__dirname + '/app/dist/index.html'))

app.listen(8080, () => console.log('Example app listening on port 8080!'))