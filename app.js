const express = require('express')
const { ServerDescription } = require('mongodb')
const port = 3000
const app = express()
const mongoose = require('mongoose')

const linkSchema = new mongoose.Schema({
    title: {type:String, required: true},
    description: String,
    url: {type:String,required:true},
    click: {type:Number, rdefault: 0}
})

const linkModel = mongoose.model('Link', linkSchema)

let link = new linkModel({
    title:'github',
    description: 'meu github',
    url: 'https://github.com/csantilucas?tab=repositories'
})

link.save().then(
    doc => { console.log(doc) })
    .catch(erro => {
        console.log(erro)
    })



// const personSchema = new mongoose.Schema({
//     name:String,
//     age:Number
// })

// const personModel = mongoose.model('Person',personSchema)

// let person = new personModel({name:"lucas",age:19})


// person.save()
//   .then(doc => console.log(doc))
//   .catch(erro => console.log(erro))




async function connect() {
    try {
        await mongoose.connect('mongodb://localhost/Links')
        console.log('connetc to mongo')
        console.log(mongoose.BaseConnection)
    } catch (error) {
        console.log(`erro ${error}`)
    }
}
connect()

app.get('/', (req, res) => {
    res.send('hello server')
})
app.listen(port, () => { console.log(`server running on port ${port}`) }
)
