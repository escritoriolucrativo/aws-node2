const express = require('express')
const cors = require('cors')
const fs = require('fs')
const https = require('https')

const key = fs.readFileSync('private.key')
const cert = fs.readFileSync('certificate.crt')

const app = express()
const port = 3000

const cred = {
    key,
    cert
}

app.use(cors())

app.get('/api', (req, res) => {
    res.send({
        people: '444adf'
    })
})

app.listen(port, () => console.log(`Listening on ${port}`))

const httpsServer = https.createServer(cred, app)
httpsServer.listen(8443)