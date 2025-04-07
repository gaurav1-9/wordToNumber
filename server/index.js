const Joi = require('joi')
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const wordToNum = require('./wordToNum')

const app = express()
app.use(express.json())
app.use(morgan('tiny'))
app.use(cors)

function validateInput(request){
    const schema = Joi.object({
        inp: Joi.string().min(3).required(),
    })
    return schema.validate(request);
}

app.get('/' ,(req,res)=>{
    res.send("Server is running go to port '/wordToNum'")
})

app.get('/wordToNum', (req,res)=>{
    const {error} = validateInput(req.query)
    if(error) return res.status(404).send(error.details[0].message)

    res.send(wordToNum(req.query.inp))
})

app.listen(3000, ()=>console.log("Listneing on port 3000..."))