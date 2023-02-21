const express = require('express')
const cors = require('cors')
const fs = require('fs')

const file = fs.readFileSync('./D1A118DBB77FE803B8CE3D0440D1070B.txt')

const app = express()
const port = 3000

app.use(cors())

app.get('/api', (req, res) => {
    res.send({
        people: '444adf'
    })
})

app.get('/.well-known/pki-validation/D1A118DBB77FE803B8CE3D0440D1070B.txt', (req, res) => {
    res.sendFile('/home/ubuntu/aws-node2/D1A118DBB77FE803B8CE3D0440D1070B.txt')
})

app.listen(port, () => console.log(`Listening on ${port}`))