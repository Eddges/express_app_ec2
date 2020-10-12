const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('Hello EC2')
})

app.listen(5000, () => {
    console.log('App listening at port 5000')
})