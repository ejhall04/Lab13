const express = require('express')
const bp = require('body-parser')
const app = express()
const port = 3000

app.use(bp.json())
app.use(bp.urlencoded({extended: false}))

let userInput = ['test']

app.get('/', (req, res) => {
  res.send('Hello World! ' + req.statusCode)
})
app.post('/', (req, res) => {
    let data = req.body;
    res.send('Got a POST request ' + req.statusCode)
 })
app.put('/user', (req, res) => {
    res.send('Got a PUT request at /user ' + req.statusCode)
  })
app.delete('/user', (req, res) => {
    res.send('Got a DELETE request at /user ' + req.statusCode)
  })
app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})

