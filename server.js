const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
// app.use(bodyParser.json({ type: 'application/*+json'}))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())

// Fake Database --Do not uses this real life

const users = [
    {username: 'admin', password: 'pass123', occupation: 'site Admin'},
    {username: 'kalu', password: 'kaluForTheLadies', occupation: 'Doctor'}
]

app.get('/', (req, res) =>{
    res.send('<h1>Welcome to our server</h1>')

})

app.get('/users',(req, res) =>{
    let list = users.map (({username, occupation}) =>{
        return {username, occupation}

    })
    res.json(list) 

})

// creating a login route
app.post('/login', (req, res) => {
    let userDetails = req.body
    let user = users.find(user => user.username === userDetails.username)
    console.log(userDetails);

    if (!user) {
        res.status(404)
        res.json({message: 'No user found with that username'})
    }
    
    if (user.password !== userDetails.password) {
        res.status(304)
        res.json({message: 'Incorrect password', userDetails, user})
    }

    //Finally
    res.status(200)
    res.json({ message: 'Login Successful'})

})

//creating a sign up route
const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`server started in ${port}`);
})


